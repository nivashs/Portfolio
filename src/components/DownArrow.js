import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DownArrow = () => {
  const [currentSection, setCurrentSection] = useState("skills");

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const sectionIds = ["github", "skills", "experience", "education"];

      for (const sectionId of sectionIds) {
        const section = document.querySelector(`#${sectionId}-section`);
        if (section && section.getBoundingClientRect().top > threshold) {
          setCurrentSection(sectionId);
          return;
        }
      }

      setCurrentSection("education");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    let targetSection;

    targetSection = document.querySelector(`#${currentSection}-section`);

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
