import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">01.</span> About Me</h2>
        
        <div className="about-grid">
          <div className="about-content glass-panel">
            <p>
              I am a dedicated IT student at Bukidnon State University, expected to graduate in 2026. 
              My journey into tech is unique—I originally trained in the Cookery Track at Malaybalay City 
              National Science High School. This taught me discipline, preparation, and how to perform under pressure.
            </p>
            <p>
              Now, I apply those same principles to code. I enjoy building simple and user-friendly websites, 
              focusing on the foundational elements of web development. I'm also an avid gaming enthusiast, 
              which originally sparked my curiosity about how digital worlds and software are created.
            </p>
            <div className="education">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Bachelor of Science in Information Technology</strong><br/>
                  Bukidnon State University (2022 - 2026)
                </li>
                <li>
                  <strong>TVL - Cookery Track</strong><br/>
                  Malaybalay City National Science High School (Graduated 2022)
                </li>
              </ul>
            </div>
          </div>
          
          <div className="skills-content glass-panel">
            <h3>My Skills</h3>
            <div className="skills-list">
              <div className="skill-item">MERN Stack</div>
              <div className="skill-item">PHP & Laravel</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Computer Vision & AI</div>
              <div className="skill-item">Database Management</div>
              <div className="skill-item">HTML5 & CSS3</div>
              <div className="skill-item">Hardware Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
