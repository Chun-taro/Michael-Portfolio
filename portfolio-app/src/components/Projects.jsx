import React from 'react';
import './Projects.css';

// Project Screenshots
import houseOfAPickleballImg from "../Images/House of A's PickleBall Court.png";
import buksuMedClinicImg from '../Images/BukSU Medical Clinic.png';
import buksuMedAppImg from '../Images/BukSU Medical Clinic App.png';
import dineMultiTenancyImg from '../Images/Dine Multi Tenancy.png';
import nationalBlackGuideImg from '../Images/National Black Guide Wordpress.png';

const Projects = () => {
  const projects = [
    {
      title: "Dine — Multi-Tenancy Restaurant Platform",
      category: "Full Stack SaaS",
      description: "A modern MERN stack multi-tenant restaurant SaaS platform and super admin console featuring multi-branch management, real-time analytics, and role-based access control.",
      tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Multi-Tenancy"],
      image: dineMultiTenancyImg,
      liveLink: "https://dine-2wv3.onrender.com/"
    },
    {
      title: "House of A's Pickleball Court",
      category: "Full Stack Web App",
      description: "A sports center & court booking system featuring real-time online reservations, schedule management, user authentication, and responsive UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
      image: houseOfAPickleballImg,
      link: "https://github.com/Chun-taro/House-of-A-Pickleball-Court",
      liveLink: "https://house-of-a-pickleball-court.vercel.app/"
    },
    {
      title: "BukSU Medical Clinic",
      category: "Healthcare System",
      description: "A comprehensive web-based clinic management system built for Bukidnon State University to streamline patient consultations, medical records, and appointment schedules.",
      tags: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
      image: buksuMedClinicImg,
      link: "https://github.com/Chun-taro/medicalclinic-system-v2",
      liveLink: "https://medicalclinic-system-v2-1.onrender.com/#/"
    },
    {
      title: "BukSU Medical Clinic App",
      category: "Mobile & Showcase",
      description: "Official mobile application and showcase platform for BukSU Medical Clinic, providing students and staff seamless access to appointment bookings and digital health records.",
      tags: ["Android APK", "Mobile App", "JavaScript", "Responsive UI"],
      image: buksuMedAppImg,
      link: "https://github.com/Chun-taro/BukSU_Medical_Clinic_App_Dev",
      liveLink: "https://medicalclinic-system-v2-1.onrender.com/app.html"
    },
    {
      title: "National Black Guide",
      category: "CMS & Directory",
      description: "A dynamic WordPress community network and business directory portal facilitating localized listings, event calendars, and multimedia content.",
      tags: ["WordPress", "CMS", "PHP", "Web Design"],
      image: nationalBlackGuideImg
    },
    {
      title: "AI-Powered Yellow Box Zone Violation Monitoring System",
      category: "AI & Computer Vision",
      description: "An intelligent computer vision system utilizing Python and OpenCV to detect Multicab stop-time and yellow box zone violations, automating traffic enforcement in real time.",
      tags: ["Python", "Computer Vision", "AI", "OpenCV", "Traffic Monitoring"],
      link: "https://github.com/Chun-taro/AI-Powered-Yellow-Box-Zone-Violation-Monitoring-System"
    },
    {
      title: "Research Tracker",
      category: "Academic Web App",
      description: "An application engineered to track, manage, and monitor academic research projects, faculty proposals, and milestones efficiently.",
      tags: ["Web Development", "Database", "JavaScript"],
      link: "https://github.com/Chun-taro/Research_tracker"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-eyebrow">03 / Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated collection of SaaS platforms, healthcare systems, and web applications I've architected and developed.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => {
            const primaryUrl = project.liveLink || project.link;

            return (
              <div className="project-card glass-panel" key={index}>
                {project.image && (
                  <div className="project-image-container">
                    {primaryUrl ? (
                      <a 
                        href={primaryUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="project-image-link"
                        title={`Open ${project.title}`}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-img" 
                          loading="lazy" 
                        />
                        <div className="project-image-overlay">
                          <span className="overlay-badge">
                            {project.liveLink ? 'Live Preview ↗' : 'View Project ↗'}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="project-image-link non-clickable">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="project-img" 
                          loading="lazy" 
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="project-content">
                  <div className="project-header">
                    <div className="header-left">
                      {project.category && (
                        <span className="project-category">{project.category}</span>
                      )}
                      {!project.image && (
                        <div className="folder-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="project-links">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="external-link" title="GitHub Repository">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="external-link live-indicator" title="Live Demo">
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
                    {primaryUrl ? (
                      <a href={primaryUrl} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="project-description">{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>

                  {project.liveLink && (
                    <div className="project-cta-wrapper">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="project-live-btn"
                      >
                        <span>Visit Site</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
