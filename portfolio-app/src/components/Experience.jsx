import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Independent Software Developer",
      company: "Academic & Personal Projects",
      period: "2023 - Present",
      description: [
        "Architected and developed full-stack web applications using the MERN stack and Laravel, including House of A Pickleball Court booking system, BukSU Medical Clinic, and a Research Tracker.",
        "Built an AI-based Camera Detection System utilizing Python and Computer Vision to monitor Multicab yellow box zones.",
        "Designed database schemas and implemented scalable frontend and backend architectures."
      ]
    },
    {
      title: "Student Assistant",
      company: "ICT Services Unit - Bukidnon State University",
      period: "Present",
      description: [
        "Assisted students and staff in the computer laboratory.",
        "Provided technical support for hardware and software issues.",
        "Ensured the smooth operation of computer lab facilities."
      ]
    },
    {
      title: "Hardware Maintenance Technician",
      company: "Technical & Computer Support",
      period: "2023 - Present",
      description: [
        "Performed computer hardware diagnostics, troubleshooting, assembly, and component upgrades.",
        "Maintained workstations, peripheral devices, and system hardware infrastructure.",
        "Executed routine preventive maintenance, hardware installation, and system repairs."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">02.</span> Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item glass-panel" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
