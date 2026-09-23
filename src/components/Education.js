import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ institution, degree, time, cgpa, coursework }) => {
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
          {institution}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light/50">
          {degree} | {time} | CGPA: {cgpa}
        </span>
        <p className="font-medium w-full mt-2 md:text-sm">
          <strong>Coursework:</strong> {coursework}
        </p>
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
      <h2 className="font-bold text-5xl mb-32 w-full text-center md:text-4xl sm:text-3xl xs:text-2xl md:mb-16">
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
            institution="National University of Singapore"
            degree="Master of Computing, Computer Science"
            time="August 2023 - January 2025"
            cgpa="4.21/5.00"
            coursework="Data Structures and Algorithms; Software Development Fundamentals (Python); Enterprise Systems Architecture Fundamentals; Artificial Intelligence; Data Analytics; Stream Processing; Big Data Systems for Data Science."
          />
          <Details
            institution="Vellore Institute of Technology"
            degree="BTech, Electronics and Communication Engineering"
            time="July 2016 - September 2020"
            cgpa="8.54/10.00"
            coursework="Object-Oriented Programming; Java Programming; Computer Communication; Computer Organization and Architecture; Statistics; Linear Algebra; Neural Networks."
          />
        </ul>
      </div>
      <div className="w-[60%] mx-auto mt-24 rounded-2xl border border-solid border-dark p-8 shadow-lg dark:border-light md:w-[80%] sm:p-6">
        <h3 className="text-2xl font-bold sm:text-xl">Research Publication</h3>
        <p className="font-medium mt-3 md:text-sm">
          Co-authored research on spectrally efficient frequency division
          multiplexing, published in the International Journal of Innovative
          Technology and Exploring Engineering.
        </p>
      </div>
    </div>
  );
};

export default Education;
