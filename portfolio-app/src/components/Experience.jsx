import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Independent Software Developer",
      company: "Academic & Personal Projects",
      period: "2023 — Present",
      badge: "Software Engineering",
      description: [
        "Architected and developed full-stack web applications using the MERN stack, including Dine Multi-Tenancy SaaS Platform, House of A Pickleball Court booking system, and the BukSU Medical Clinic ecosystem.",
        "Engineered the AI-Powered Yellow Box Zone Violation Monitoring System using Python and Computer Vision to detect Multicab stop-time and junction violations in real time.",
        "Designed scalable database schemas, RESTful APIs, and responsive mobile-first user interfaces."
      ]
    },
    {
      title: "Student Assistant",
      company: "ICT Services Unit — Bukidnon State University",
      period: "Present",
      badge: "Campus Support",
      description: [
        "Assisted university students, faculty, and administrative staff across computer laboratories and campus facilities.",
        "Provided rapid front-line technical support for software installations, networking issues, and workstation setups.",
        "Ensured consistent uptime and smooth daily operations of campus IT infrastructure."
      ]
    },
    {
      title: "Hardware Maintenance Technician",
      company: "Technical & Computer Support",
      period: "2023 — Present",
      badge: "Systems & Infrastructure",
      description: [
        "Performed computer hardware diagnostics, troubleshooting, custom PC assembly, and component upgrades.",
        "Maintained desktop workstations, peripherals, thermal solutions, and power delivery components.",
        "Executed routine preventive maintenance and hardware recovery procedures."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header-block">
          <div className="section-eyebrow">02 / Experience</div>
          <h2 className="section-title">Experience & Roles</h2>
          <p className="section-subtitle">
            A track record of software development, university technical assistance, and hardware infrastructure support.
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item glass-panel" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <span className="timeline-badge">{exp.badge}</span>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                
                <ul className="timeline-bullets">
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