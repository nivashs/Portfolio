import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/nivash.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import DownArrow from "@/components/DownArrow";
import dynamic from "next/dynamic";

const GitHubActivity = dynamic(() => import("@/components/GitHubActivity"), {
  ssr: false,
  loading: () => (
    <div className="my-64 text-center font-medium" role="status">
      Loading GitHub activity…
    </div>
  ),
});

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latestValue) => {
      if (ref.current) {
        ref.current.textContent = Math.min(value, Math.ceil(latestValue));
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Nivash Sudalaimani</title>
        <meta
          name="description"
          content="Learn about Nivash Sudalaimani's software engineering experience, technical skills, education, and production work across education technology and financial services."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Dream Build Achieve."
            className="mb-16 !text-5xl md:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium dark:text-light">
                Hi, I&apos;m Nivash, a Software Engineer with 4+ years of
                experience building web and mobile applications across
                education technology and financial services.
              </p>
              <p className="my-4 font-medium dark:text-light">
                At Mind Stretcher, I build and operate Dash, a Django platform
                for student enrolments, classes, payments, teacher workflows,
                reporting, and mobile APIs. My work includes AI-assisted search
                and registration, external service integrations, and production
                performance and reliability.
              </p>
              <p className="font-medium dark:text-light">
                Previously, I developed financial applications at LSEG using
                Angular and .NET. I enjoy taking features from design and
                implementation through testing, deployment, and production
                support.
              </p>
            </div>

            <div
              className="col-span-3 relative w-[70%] rounded-2xl border-2 border-solid border-dark bg-light flex items-center justify-center p-4 ml-16 dark:text-light
            xl:col-span-4 md:order-1 md:col-span-8"
            >
              <Image
                src={profilePic}
                alt="Nivash"
                className="h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={3} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  featured projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-5xl font-bold dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={2} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  industries
                </h2>
              </div>
            </div>
          </div>
          <div id="github-section">
            <GitHubActivity />
          </div>
          <Skills />
          <Experience />
          <Education />
          <DownArrow />
        </Layout>
      </main>
    </>
  );
};

export default about;
