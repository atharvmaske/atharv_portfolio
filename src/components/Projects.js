import React from 'react';
import './Projects.css'; 

function Projects() {
  const projects = [
    {
      title: 'sheRide',
      description: 'A women-safety-oriented cab service application using React for the front-end and Firebase for back-end support as instructed.',
      link: 'https://github.com/atharvmaske/sheRide', 
    },
    {
      title: 'TripPlanner',
      description: 'A trip planning app that helps users plan their trips, set budgets, and manage their accounts.',
      link: 'https://github.com/atharvmaske/tripPlanner',
    },
    {
      title: 'News',
      description: 'A news app that fetches and displays recent news articles, with filtering options for categories to enhance the user experience.',
      link: 'https://github.com/atharvmaske/news',
    },
    {
      title: 'To-Do List',
      description: 'A full-stack task manager app with PHP and MySQL, handling task and user data storage and management.',
      link: 'https://github.com/atharvmaske/to-do-list-for-nptel',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;