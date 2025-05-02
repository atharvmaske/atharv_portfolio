import React from 'react';
import './StudyInfo.css'; 

function StudyInfo() {
  const colleges = [
    {
      name: 'A.G.Patil Polytechnic,Solapur',
      degree: 'Diploma in CSE',
      duration: '2021 - 2024',
    },
    {
      name: 'JSPM University',
      degree: 'B.Tech',
      duration: '2024 - Present',
    },
  ];

  return (
    <section id="study" className="study-info-section">
      <h2>Study Information</h2>
      <ul className="colleges-list">
        {colleges.map((college, index) => (
          <li key={index} className="college-item">
            <h3>{college.name}</h3>
            <p><strong>Degree:</strong> {college.degree}</p>
            <p><strong>Duration:</strong> {college.duration}</p>
            <p>{college.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudyInfo;