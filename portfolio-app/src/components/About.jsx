import React from 'react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive UI", "Tailwind / Modern CSS"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express", "PHP", "Laravel", "MongoDB", "MySQL"]
    },
    {
      title: "AI, CMS & Systems",
      skills: ["Python", "Computer Vision (OpenCV)", "WordPress", "Hardware Diagnostics", "Git & GitHub"]
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-eyebrow">01 / Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A background rooted in discipline, continuous learning, and crafting practical digital solutions.
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-card glass-panel">
            <div className="bio-block">
              <h3 className="card-heading">My Journey</h3>
              <p>
                I am an IT student at <strong>Bukidnon State University</strong>, graduating in 2026 – 2027. 
                My path into software development started with a unique foundation—I completed the TVL Cookery Track 
                at Malaybalay City National Science High School. That experience instilled in me rigorous discipline, 
                preparation, and the calm mindset required to deliver under pressure.
              </p>
              <p>
                Today, I bring that same standard of craftsmanship to full-stack engineering. I focus on building clean, 
                responsive, and dependable web applications that solve real-world problems.
              </p>
            </div>

            <div className="education-block">
              <h3 className="card-heading">Education</h3>
              <div className="education-cards">
                <div className="edu-card">
                  <div className="edu-year">2022 — 2026 / 2027</div>
                  <div className="edu-details">
                    <h4 className="edu-degree">Bachelor of Science in Information Technology</h4>
                    <p className="edu-school">Bukidnon State University</p>
                  </div>
                </div>
                
                <div className="edu-card">
                  <div className="edu-year">Graduated 2022</div>
                  <div className="edu-details">
                    <h4 className="edu-degree">TVL — Cookery Track</h4>
                    <p className="edu-school">Malaybalay City National Science High School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-card glass-panel">
            <h3 className="card-heading">Technical Stack</h3>
            <p className="skills-intro">
              Technologies and toolchains I work with across frontend, backend, databases, and system maintenance:
            </p>

            <div className="skill-groups">
              {skillCategories.map((cat, idx) => (
                <div className="skill-group" key={idx}>
                  <h4 className="skill-group-title">{cat.title}</h4>
                  <div className="skill-pills">
                    {cat.skills.map((skill, sIdx) => (
                      <span className="skill-pill" key={sIdx}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;