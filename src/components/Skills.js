import React from "react";

const frontEndSkills = [
  { name: "Angular", level: 4 },
  { name: "React", level: 5 },
  { name: "Next.js", level: 4 },
  { name: "Material UI", level: 3 },
  { name: "Tailwind CSS", level: 4 },
];

const backEndSkills = [
  { name: ".Net Core", level: 4 },
  { name: "Node JS", level: 3 },
  { name: "FastApi", level: 3 },
  { name: "PostgreSQL", level: 5 },
  { name: "Spring Boot", level: 3 },
];

const tools = [
  { name: "JavaScript", level: 4 },
  { name: "C#", level: 4 },
  { name: "Java", level: 3 },
  { name: "Python", level: 5 },
  { name: "Git", level: 5 },
];

const SkillMeter = ({ level }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`h-4 w-8 rounded-full ${
            i < level
              ? "bg-dark dark:bg-light/75"
              : "bg-gray-300 dark:bg-black/20"
          }`}
        ></div>
      ))}
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="p-8 border rounded-xl shadow-lg w-full dark:text-light/75">
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 border-b"
        >
          <span className="text-lg font-semibold">{skill.name}</span>
          <SkillMeter level={skill.level} />
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills-section" className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-16 w-full text-center dark:text-light/75 md:text-6xl sm:text-5xl xs:text-4xl sm:mt-32">
        Skills
      </h2>
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-4 md:col-span-8">
          <SkillCard title="Front-End Development" skills={frontEndSkills} />
        </div>
        <div className="col-span-4 md:col-span-8">
          <SkillCard title="Back-End & Databases" skills={backEndSkills} />
        </div>
        <div className="col-span-4 col-start-3 md:col-span-8 md:col-start-1">
          <SkillCard title="Programming Languages & Tools" skills={tools} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
