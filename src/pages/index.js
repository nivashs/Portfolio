import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Logo"
                className="w-3/4 h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mb-20">
              <AnimatedText
                text="Bringing Ideas to Life Through Code"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a passionate full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Dive into my latest work
                and insights, highlighting my skills in React.js and modern web
                development.
              </p>
              <div className="flex items-center self-start mt-10 lg:self-center">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center justify-center p-2.5 px-6 text-white bg-dark rounded-lg text-lg font-semibold
                   hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark 
                   
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:s.nivash24@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        {/* <div className="absolute bottom-8 right-8 w-24 inline-block md:hidden">
          <Image src={lightBulb} alt="Nivash" className="w-full h-auto" />
        </div> */}
      </main>
    </>
  );
}
