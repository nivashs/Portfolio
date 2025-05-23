import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project0 from "../../public/images/projects/tripster.png";
import project1 from "../../public/images/projects/reddit-memes.png";
import project2 from "../../public/images/projects/ms-app.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  techStack,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2.5rem] rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      ></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6
      lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light
          sm:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark dark:text-light
        sm:text-sm"
        >
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 my-2">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="bg-dark text-light dark:bg-white dark:text-dark px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className={`${
              github ? "ml-4" : ""
            } bg-dark text-light p-2 px-6 text-lg font-semibold
    dark:bg-light dark:text-dark rounded-xl
    sm:px-4 sm:text-base`}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, link, type, github, techStack }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between
    rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem] rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      ></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold
          lg:text-2xl"
          >
            {title}
          </h2>
        </Link>
        <div className="flex flex-wrap gap-2 my-2">
          {techStack?.map((tech, index) => (
            <span
              key={index}
              className="bg-dark text-light dark:bg-white dark:text-dark px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nivash | Projects Page</title>
        <meta name="description" content="nivash" />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Curiosity Drives Discovery"
            className="mb-16
           lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div
            className="grid w-full grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Tripster"
                summary="A travel planning web app for explorers with integrated google maps and AI-powered personalized itinerary generation.
                Users can search for attractions, restaurants, and activities based on their preferences and location. 
                Integrates interactive Google Maps for visualizing day-wise iternary plans on map and for exploring attractions."
                img={project0}
                link="https://youtu.be/MqxU95xBtk8"
                github=""
                type="Featured Project"
                techStack={[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "GraphQL",
                  "MongoDB",
                  "Google Maps API",
                  "OAuth 2.0",
                  "OpenAI API",
                  "AWS",
                  "Docker",
                ]}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Reddit Memes Crawler"
                summary="Web app that crawls, stores, and updates the top trending memes from Reddit's r/memes subreddit. 
                Automatically generates report of memes every day and sends them via Telegram.
                Memes are stored in a Supabase database and can be viewed sorted by upvotes, date, or number of comments."
                img={project1}
                link="https://reddit-memes-ui.vercel.app"
                github="https://github.com/nivashs/reddit-memes-ui"
                type="Featured Project"
                techStack={["React.js", "Supabase", "FastAPI", "Telegram API"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project
                title="MindStretcher Mobile App"
                img={project2}
                link="https://play.google.com/store/apps/details?id=com.mindstretcher.app&hl=en_IN"
                github=""
                type="Project"
                techStack={["React Native", "Expo", "NestJS"]}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="asd"
                img={project1}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="asd"
                summary="asd"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="asd"
                img={project1}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="asd"
                img={project1}
                link="/"
                github="/"
                type="Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
