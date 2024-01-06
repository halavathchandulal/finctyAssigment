import React, { useState } from "react";

const ProjectsSection = ({ addProject, projects }) => {
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [showViewButton, setShowViewButton] = useState(false);

  const handleAddProject = () => {
    addProject(projectName, projectLink, projectDescription);

    setProjectName("");
    setProjectLink("");
    setProjectDescription("");

    setShowViewButton(true);
  };

  return (
    <section className="projects-section">
      <h1>Add Project</h1>

      <p>Project Name</p>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <p>Project Link</p>
      <input
        type="text"
        placeholder="Project Link"
        value={projectLink}
        onChange={(e) => setProjectLink(e.target.value)}
      />
      <p>Description</p>
      <input
        type="text"
        placeholder="Project Description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />

      <button onClick={handleAddProject}>Add</button>

      <div className="projects-view">
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>{project.link}</a>
          </div>
        ))}
      </div>

      {showViewButton && (
        <button onClick={() => console.log("View Projects")}>
          View Projects
        </button>
      )}
    </section>
  );
};

export default ProjectsSection;
