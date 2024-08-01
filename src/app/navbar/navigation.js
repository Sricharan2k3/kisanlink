import React, { useEffect, useState } from "react";
import NavBar from "./smooth";
import ContentSections from "./contentsection";

const Navigation1 = () => {
  const [activeSection, setActiveSection] = useState("farms");

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId.substring(1));
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll(".content-section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <NavBar
        activeSection={activeSection}
        handleSmoothScroll={handleSmoothScroll}
      />
      <ContentSections />
    </div>
  );
};

export default Navigation1;
