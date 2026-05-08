import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi there, I'm</p>
          <h1 className="hero-name gradient-text">Michael Angelo</h1>
          <h2 className="hero-role">IT Student & Web Developer</h2>
          <p className="hero-desc">
            Hardworking and reliable individual with a strong foundation in web development. 
            I build simple, user-friendly, and aesthetic websites while pursuing my Bachelor's 
            in Information Technology at Bukidnon State University.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-image animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="image-wrapper">
            {/* The image is loaded from the public folder */}
            <img src="/profile.png" alt="Michael Angelo" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
