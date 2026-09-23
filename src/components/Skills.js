import React from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C#", "Java", "SQL"],
  },
  {
    title: "Backend & Data",
    skills: [
      "Django",
      "Django REST Framework",
      "NestJS",
      "PostgreSQL",
      ".NET",
      "WCF",
      "Redis",
      "Celery",
      "OpenSearch",
    ],
  },
  {
    title: "Frontend",
    skills: ["HTMX", "React", "React Native", "Angular", "RxJS", "NgRx"],
  },
  {
    title: "Delivery",
    skills: ["Git", "Jenkins"],
  },
  {
    title: "Cloud",
    skills: ["DigitalOcean", "AWS"],
  },
  {
    title: "Observability & Performance",
    skills: ["Datadog", "PostHog", "Grafana", "Locust"],
  },
];

const SkillCard = ({ title, skills }) => {
  return (
    <div className="p-8 border rounded-xl shadow-lg w-full dark:text-light/75">
      <h2 className="text-xl font-bold mb-6 text-center">{title}</h2>
      {skills.map((skill, index) => (
        <span
          key={index}
          className="inline-flex items-center rounded-full border border-dark/20 bg-dark px-3 py-1.5 text-sm font-semibold text-light mr-2 mb-2 dark:border-light/30 dark:bg-light dark:text-dark"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills-section" className="my-64">
      <h2 className="font-bold text-5xl mt-64 mb-16 w-full text-center dark:text-light/75 md:text-4xl sm:text-3xl xs:text-2xl sm:mt-32">
        Skills
      </h2>
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="col-span-4 md:col-span-8">
            <SkillCard title={group.title} skills={group.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
