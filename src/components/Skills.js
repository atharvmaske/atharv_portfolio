import React from "react";
import "./Skills.css";

// Correct relative imports
import htmlIcon from "../assets/skills/icons8-html5.svg";
import cssIcon from "../assets/skills/icons8-css3.svg";
import jsIcon from "../assets/skills/icons8-javascript.svg";
import bootstrapIcon from "../assets/skills/icons8-bootstrap.svg";
import tailwindIcon from "../assets/skills/icons8-tailwind-css.svg";
import gitIcon from "../assets/skills/icons8-git.svg";
import githubIcon from "../assets/skills/icons8-github.svg";
import firebaseIcon from "../assets/skills/icons8-firebase.svg";
import mysqlIcon from "../assets/skills/icons8-mysql-logo.svg";
import pythonIcon from "../assets/skills/icons8-python.svg";
import javaIcon from "../assets/skills/java.svg";


function Skills() {
  const skills = [
    { name: "JAVA", icon: javaIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Python", icon: pythonIcon },

  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-img" />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
