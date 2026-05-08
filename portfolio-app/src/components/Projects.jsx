import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Medical Clinic System v2",
      description: "A comprehensive medical clinic management system built to streamline operations and patient data management.",
      tags: ["PHP", "JavaScript", "HTML", "CSS"],
      link: "https://github.com/Chun-taro/medicalclinic-system-v2",
      liveLink: "https://medicalclinic-system-v2-1.onrender.com/"
    },
    {
      title: "Research Tracker",
      description: "An application to track and manage research projects efficiently, designed for academic use.",
      tags: ["Web Development", "Database"],
      link: "https://github.com/Chun-taro/Research_tracker"
    },
    {
      title: "Multicab Yellow Box Zone Monitoring System",
      description: "An innovative AI-based camera detection system for monitoring Multicab yellow box zones.",
      tags: ["AI", "Computer Vision", "Python"],
      link: "https://github.com/Chun-taro/Multicab-Yellow-Box-Zone-Monitoring-System-Using-AI-based-Camera-Detection-V2"
    },
    {
      title: "BukSU Medical Clinic App Dev",
      description: "A dedicated medical clinic application developed specifically for Bukidnon State University.",
      tags: ["App Development", "Healthcare"],
      link: "https://github.com/Chun-taro/BukSU_Medical_Clinic_App_Dev"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">03.</span> Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-panel" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="external-link" title="GitHub Repository">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="external-link" title="Live Demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="project-title">
                  <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
