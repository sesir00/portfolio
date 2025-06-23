import React from "react";
import "./Project.css";

const projects = [
  {
    title: "MCQ Generator",
    description: "Generates multiple-choice questions using a fine-tuned AI model.",
    tags: ["React", "Node.js", "SQL", "Python"],
    live: "#",
    code: "https://github.com/sesir00/MCQ-Generator",
  },
  {
    title: "CCRStream",
    description: "A movie site to browse, search, and save favorite movies.",
    tags: ["HTML", "CSS", "TMDb API"],
    live: "https://ccrstream.netlify.app/",
    code: "https://github.com/sesir00/CCRStream",
  },
  {
    title: "ToDo List",
    description: "MVC-based ToDo app with mappers, migrations, middleware.",
    tags: ["React", "CSS", "ASP.NET Core Web API"],
    live: "#",
    code: "https://github.com/sesir00/Todo-asp",
  },
  {
    title: "Property Bidding System",
    description: "Online platform for competitive property bidding",
    tags: ["ASP.NET Core", "SQL"],
    live: "#",
    code: "#",
  },
];

const Project = () => {
  return (
    <section id="project" className="project-section">
      <h2 className="project-heading">My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-container">
              {project.tags.map((tag, idx) => (
                <span className="tag" key={idx}>{tag}</span>
              ))}
            </div>
            <div className="btn-group">
              <a href={project.live} target="_blank" rel="noreferrer">
                <button className="btn">Live Demo</button>
              </a>
              <a href={project.code} target="_blank" rel="noreferrer">
                <button className="btn">GitHub Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
