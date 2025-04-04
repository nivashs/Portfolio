import React from "react";

const frontEndSkills = [
  { name: "Angular", level: 4 },
  { name: "React", level: 5 },
  { name: "Nest.js", level: 4 },
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
          className={`h-4 w-8 rounded-full  ${
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
    <div className="p-8 border rounded-xl shadow-lg w-full max-w-2xl dark:text-light/75">
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 border-b "
        >
          <span className="text-lg font-semibold">{skill.name}</span>
          <SkillMeter level={skill.level} />
        </div>
      ))}
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full p-8">
      <SkillCard title="Front-End Development" skills={frontEndSkills} />
      <SkillCard title="Back-End & Databases" skills={backEndSkills} />
      <SkillCard title="Programming Languages & Tools" skills={tools} />
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 mb-16 w-full text-center dark:text-light/75">
        Skills
      </h2>
      <SkillSection />
      {/* <div className="w-full h-screen relative flex items-center justify-center rounded-full">
        <SkillSection />
      </div> */}
    </>
  );
};

export default Skills;
