import React from 'react';
import './Resume.css';
import resumeFile from '../assets/Atharva_Maske_resume.pdf'; 

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>
        Here is my resume.
      </p>
      <a href={resumeFile} download="atharv_maske.pdf" className="resume-button">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;