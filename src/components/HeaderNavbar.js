import React from 'react';
import './HeaderNavbar.css';

function HeaderNavbar() {
  return (
    <header className="header">
      <div className="logo">Atharva Maske</div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#study">Study Info</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default HeaderNavbar;