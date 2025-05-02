import React from 'react';
import HeaderNavbar from './components/HeaderNavbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import StudyInfo from './components/StudyInfo';
import SocialLinks from './components/SocialLinks';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <HeaderNavbar />
      <main>
        <div className="block-section" id="about">
          <About />
        </div>
        <div className="block-section">
          <SocialLinks />
        </div>
        <div className="block-section" id="skills">
          <Skills />
        </div>
        <div className="block-section" id="projects">
          <Projects />
        </div>
        <div className="block-section" id="study">
          <StudyInfo />
        </div>
        <div className="block-section" id="resume">
          <Resume />
        </div>
        <div className="block-section" id="contact">
          <Contact />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;