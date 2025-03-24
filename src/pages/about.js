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
    springValue.on("change", (latestValue) => {
      if (ref.current) {
        ref.current.textContent = Math.ceil(latestValue);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Nivash | About Page</title>
        <meta name="description" content="nivash" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center"></main>
      <Layout className="pt-16">
        <AnimatedText text="Dream Build Achieve." className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm Nivash, a Full Stack Developer adept in developing Angular
              and React based web applications, strong in front-end and back-end
              technologies. I have 3 years of professional development
              experience in London Stock Exchange Group
            </p>
            <p className="my-4 font-medium">
              I am always looking for new and innovative ways to bring my
              clients' visions to life.
            </p>
            <p className="font-medium">
              With my strong interest, knowledge, skills and experience in
              Software Development, and my positive learning attitude and team
              spirit, I will bring a great fit to the position to bring in value
              to the company.
            </p>
          </div>

          <div className="col-span-3 relative w-[70%] rounded-2xl border-2 border-solid border-dark bg-light flex items-center justify-center p-4 ml-16">
            <Image
              src={profilePic}
              alt="Nivash"
              className="h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={20} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={10} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={3} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </Layout>
    </>
  );
};

export default about;
