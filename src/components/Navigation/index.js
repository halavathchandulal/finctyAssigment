import React from "react";
import "./index.css";

const Navigation = ({ navigateToSection }) => {
  return (
    <nav>
      <button className="btn" onClick={() => navigateToSection("About")}>
        About
      </button>
      <button className="btn" onClick={() => navigateToSection("Projects")}>
        Projects
      </button>
      <button className="btn" onClick={() => navigateToSection("Contact")}>
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
