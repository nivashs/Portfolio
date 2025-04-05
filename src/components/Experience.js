import React, { use } from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  const workItems = Array.isArray(work) ? work : [work];

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between dark:text-light/75
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="list-disc pl-5 mt-2">
          {workItems.map((item, index) => (
            <li key={index} className="font-medium md:text-sm mb-1">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="experience-section" className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light/75 md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light/75
          md:w-[2px] xs:left-[30px] xs:w-[2px] xs:top-0"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer Intern"
            company="MindStretcher Education Pvt Ltd"
            companyLink={"https://www.mindstretcher.com/"}
            time="2024 May - 2023 Sep"
            address="Singapore"
            work={[
              "Developed and maintained MindStretcher mobile application using React Native Expo",
              "Optimized app performance for older devices by implementing efficient rendering techniques using FlatList and reducing renders",
              "Created a custom data management script to populate database from CSV files, improving data handling efficiency",
              "Monitored and maintained the existing Mind Stretcher web applications",
              "Developed new features for web and mobile platforms",
            ]}
          />
          <Details
            position="Software Engineer"
            company="London Stock Exchange Group"
            companyLink={"https://www.lseg.com/"}
            time="2020-2023 (3 years experience)"
            address="Bangalore, India"
            work={[
              "Developed and maintained multiple web applications using Angular, JavaScript and .Net",
              "Built new features to enhance functionality and user experience",
              "Led the deployment of multiple web applications for product releases in LSEG workspace application",
              "Improved performance and scalability of existing applications",
              "Collaborated with cross-functional teams to deliver high-quality software solutions",
            ]}
          />
          <Details
            position="Software Intern"
            company="Kaashiv Infotech"
            companyLink={"https://www.kaashivinfotech.com/"}
            time="2019 May - 2019 July"
            address="Chennai, India"
            work={[
              "Developed web applications using .NET framework and SQL Server",
              "Created IoT-based projects using Arduino and micro-controllers",
              "Gained hands-on experience in full-stack development",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
