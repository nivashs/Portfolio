import React, { use } from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-2xl font-bold sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light/50">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="education-section" className="my-64 dark:text-light/75">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light/75 origin-top
          md:w-[2px] xs:left-[30px] xs:w-[2px] xs:top-0"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Master of Computing"
            time="2023-2025"
            place="National University of Singapore"
            info="Relevent courses included Data Structures and Algorithms, Software Engineering, Database Systems and Artificial Intelligence."
          />
          <Details
            type="Bachelors in Electronics and Communication Engineering"
            time="2016-2020"
            place="Vellore Institute of Technology, Vellore"
            info="Relevent courses included Object Oriented Programming, Java Programming, Computer Communication, Computer Organization and Architectures, Statistics, Linear Algebra, Neural Networks."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
