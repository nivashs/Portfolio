import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DownArrow = () => {
  // Track which section to scroll to next
  const [currentSection, setCurrentSection] = useState("skills");

  // Handle scroll event to update current section
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector("#skills-section");
      const experienceSection = document.querySelector("#experience-section");

      if (!skillsSection || !experienceSection) return;

      const skillsPosition = skillsSection.getBoundingClientRect().top;
      const experiencePosition = experienceSection.getBoundingClientRect().top;
      const threshold = window.innerHeight / 2;

      // Reset to "skills" if user scrolls above it
      if (skillsPosition > threshold) {
        setCurrentSection("skills");
        return;
      }

      if (skillsPosition < threshold && experiencePosition > threshold) {
        setCurrentSection("experience");
        return;
      }

      if (experiencePosition < threshold) {
        setCurrentSection("education");
        return;
      }
      // If skills section is in view, set next section to experience
      if (skillsPosition < window.innerHeight / 2) {
        setCurrentSection("experience");
      }

      // If experience section is in view, could set to next section or hide arrow
      if (experiencePosition < window.innerHeight / 2) {
        setCurrentSection("education");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    let targetSection;

    switch (currentSection) {
      case "skills":
        targetSection = document.querySelector("#skills-section");
        break;
      case "experience":
        targetSection = document.querySelector("#experience-section");
        break;
      case "education":
        targetSection = document.querySelector("#education-section");
        break;
      default:
        targetSection = document.querySelector("#skills-section");
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      onClick={scrollToNextSection}
      className="fixed bottom-8 right-8 z-20 cursor-pointer bg-dark dark:bg-light text-light dark:text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </motion.div>
  );
};

export default DownArrow;
