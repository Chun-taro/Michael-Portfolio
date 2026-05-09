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
      <header>
        <div className="container nav-content">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Michael Angelo A. Angeles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
