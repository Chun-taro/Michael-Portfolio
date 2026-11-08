import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <header className="site-header">
        <div className="nav-container">
          <a href="#hero" className="nav-brand" title="Home">
            <span className="brand-monogram">MA</span>
            <span className="brand-dot" title="Available for projects"></span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta-btn">
            Connect
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span className="footer-name">Michael Angelo Angeles</span>
            <span className="footer-divider">•</span>
            <span className="footer-role">IT Student & Developer</span>
          </div>
          <div className="footer-right">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;