import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentSection, setCurrentSection] = useState("About");

  const navigateToSection = (section) => {
    setCurrentSection(section);
  };

  const addProject = (name, link, description) => {
    const projectDetails = {
      name: name,
      link: link,
      description: description,
    };

    setProjects([...projects, projectDetails]);
  };

  return (
    <div className="App">
      <header>
        <Navigation navigateToSection={navigateToSection} />
      </header>
      <main>
        {currentSection === "About" && (
          <AboutSection navigateToSection={navigateToSection} />
        )}
        {currentSection === "Projects" && (
          <ProjectsSection addProject={addProject} projects={projects} />
        )}
        {currentSection === "Contact" && <ContactSection />}
      </main>
    </div>
  );
};

export default App;
