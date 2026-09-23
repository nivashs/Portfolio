import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nivash Sudalaimani | Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer with 4+ years of experience building production web, mobile, and AI-assisted systems across education technology and financial services."
        />
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
                text="Building Reliable Products from Idea to Production"
                className="!text-5xl !text-left lg:!text-center md:!text-4xl sm:!text-3xl xs:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a Software Engineer with 4+ years of experience building
                web and mobile products across education technology and
                financial services. I work across Django, APIs, PostgreSQL,
                React, React Native, and Angular, with ownership from design and
                testing through production operations.
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
      </main>
    </>
  );
}
