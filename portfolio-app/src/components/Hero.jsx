import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Available for projects & roles</span>
          </div>

          <h1 className="hero-name">
            Michael Angelo <span className="hero-name-accent">Angeles</span>
          </h1>
          
          <p className="hero-role">Full-Stack Web Developer & IT Student</p>
          
          <p className="hero-desc">
            Focused on building clean, user-friendly websites, SaaS platforms, and scalable web applications. 
            Currently pursuing a Bachelor of Science in Information Technology at Bukidnon State University.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="hero-quick-stats">
            <div className="stat-item">
              <span className="stat-value">5+</span>
              <span className="stat-label">Full-Stack Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">2026</span>
              <span className="stat-label">BSIT Graduate</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">PH</span>
              <span className="stat-label">Malaybalay City</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-col animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="profile-card">
            <div className="profile-image-frame">
              <img src="/profile.png" alt="Michael Angelo Angeles" className="profile-img" />
            </div>
            <div className="profile-card-footer">
              <span className="profile-tag">BSIT Student Developer</span>
              <span className="profile-location">BukSU • 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;