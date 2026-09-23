import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const MotionImage = motion(Image);

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const ProjectPreview = ({
  title,
  image,
  videoSrc,
  link,
  priority = false,
  sizes,
  className = "",
}) => {
  const linkRef = useRef(null);
  const videoRef = useRef(null);
  const shouldPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const stopPreview = useCallback(() => {
    shouldPlayRef.current = false;

    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  }, []);

  const playPreview = useCallback(() => {
    if (!videoRef.current || videoFailed) return;
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    shouldPlayRef.current = true;
    const playPromise = videoRef.current.play();

    if (playPromise) {
      playPromise.catch(() => {
        shouldPlayRef.current = false;
        setIsPlaying(false);
      });
    }
  }, [videoFailed]);

  useEffect(() => {
    if (!videoSrc || !linkRef.current || videoFailed) return undefined;

    const hoverMedia = window.matchMedia(HOVER_QUERY);
    const reducedMotionMedia = window.matchMedia(REDUCED_MOTION_QUERY);
    const videoElement = videoRef.current;

    const stopForPreferenceChange = () => stopPreview();
    hoverMedia.addEventListener("change", stopForPreferenceChange);
    reducedMotionMedia.addEventListener("change", stopForPreferenceChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hoverMedia.matches || reducedMotionMedia.matches) return;

        if (entry.intersectionRatio >= 0.6) {
          playPreview();
        } else if (entry.intersectionRatio < 0.25) {
          stopPreview();
        }
      },
      { threshold: [0, 0.25, 0.6, 1] }
    );

    observer.observe(linkRef.current);

    return () => {
      observer.disconnect();
      hoverMedia.removeEventListener("change", stopForPreferenceChange);
      reducedMotionMedia.removeEventListener("change", stopForPreferenceChange);
      shouldPlayRef.current = false;
      videoElement?.pause();
    };
  }, [playPreview, stopPreview, videoFailed, videoSrc]);

  const handleMouseEnter = () => {
    if (window.matchMedia(HOVER_QUERY).matches) playPreview();
  };

  const poster = typeof image === "string" ? image : image.src;

  return (
    <Link
      ref={linkRef}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch the full ${title} demo`}
      className={`block cursor-pointer overflow-hidden rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
    >
      <motion.div
        className="relative w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <MotionImage
          src={image}
          alt={title}
          className="h-auto w-full"
          priority={priority}
          sizes={sizes}
        />

        {!videoFailed && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            onPlaying={() => {
              if (shouldPlayRef.current) setIsPlaying(true);
            }}
            onError={() => {
              setVideoFailed(true);
              stopPreview();
            }}
          />
        )}

        <span
          className="pointer-events-none absolute right-3 top-3 rounded-full bg-dark/80 px-3 py-1 text-xs font-semibold tracking-wide text-light backdrop-blur-sm motion-reduce:hidden dark:bg-light/90 dark:text-dark"
        >
          12s Preview
        </span>
      </motion.div>
    </Link>
  );
};

export default ProjectPreview;
