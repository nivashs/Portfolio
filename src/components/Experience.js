import React from "react";
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
      <h2 className="font-bold text-5xl mb-32 w-full text-center dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl md:mb-16">
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
            position="Software Engineer"
            company="Mind Stretcher"
            companyLink={"https://www.mindstretcher.com/"}
            time="June 2025 - Present"
            address="Singapore"
            work={[
              "Build and operate Dash, a Django platform for student enrolments, classes, payments, teacher workflows, reporting, and mobile APIs, delivering Django/HTMX workflows with server-side permissions and business rules.",
              "Built an AI-powered registration assistant using Django, tool calling, and Server-Sent Events, with signed previews, explicit parent confirmation, and transactional validation for sensitive actions.",
              "Built Dash Smart Search and a read-only Model Context Protocol analytics service, giving approved users permission-aware access to live class search, reports, and operational metrics.",
              "Improved PostgreSQL reporting and Django API performance by narrowing scanned data, simplifying ORM queries, and adding targeted indexes, reducing a full academic-year metrics refresh from roughly 50 minutes to 30–60 seconds in warm runs.",
              "Integrated Stripe, Twilio OTP, TalentLMS, Zoom, and Respond.io, including conflict-free meeting allocation, stable teacher host links, incremental synchronization, rate-limit handling, and duplicate-contact safeguards.",
              "Made Stripe checkout, webhooks, and Celery jobs reliable under retries through payment validation, record locking, idempotent processing, and controlled retry handling.",
              "Diagnosed timeouts in a staged 100,000-user load test and restored reliable logins by addressing worker bottlenecks, delayed replica reads, and PostgreSQL connection-pooling behavior.",
            ]}
          />
          <Details
            position="Software Engineer Intern"
            company="Mind Stretcher"
            companyLink={"https://www.mindstretcher.com/"}
            time="May 2024 - September 2024"
            address="Singapore"
            work={[
              "Built React Native/Expo screens and NestJS APIs for authenticated mobile workflows, using Prisma and PostgreSQL.",
              "Integrated Auth0, push notifications, and CSV imports; improved long mobile lists with FlatList.",
            ]}
          />
          <Details
            position="Software Engineer"
            company="London Stock Exchange Group"
            companyLink={"https://www.lseg.com/"}
            time="August 2020 - July 2023"
            address="Bengaluru, India"
            work={[
              "Developed and maintained financial web applications for House Views, Market Insights, and Refinitiv Securitized Derivatives using Angular 12, RxJS, NgRx, .NET Core, WCF, and MySQL.",
              "Built reusable Angular components and services, delivering pagination, Excel/CSV import and export, and JWT-based authentication while reducing repeated implementation work by 20%.",
              "Implemented instrument search and filtering, configurable layouts, and comparison pages with Element Framework charts and grids, helping users analyze and export financial instrument data.",
              "Led deployments of multiple product releases to LSEG Workspace and delivered enhancements, diagnostic fixes, and patches for production applications.",
              "Increased Jasmine test coverage by 50%, collaborated with QA to resolve defects, and mentored trainee developers through code reviews and technical guidance.",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
