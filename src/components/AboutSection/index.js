import React from "react";
import "./index.css";

const AboutSection = ({ navigateToSection }) => {
  const handleProjectsClick = () => {
    navigateToSection("Projects");
  };

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="text-content">
          <h1 className="heading">UI/UX DESIGNER</h1>
          <h2>Hello, my name is Madelyn Torff</h2>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <button className="btn1" onClick={handleProjectsClick}>
            Projects
          </button>
          <button className="btn2">LinkedIn</button>
        </div>
        <div className="image-content">
          <img src="https://i.ibb.co/pWnj0LH/banner-img.png" alt="banner-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
