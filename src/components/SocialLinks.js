import React from 'react';
import './SocialLinks.css';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import githubIcon from '../assets/github.svg';

function SocialLinks() {
  return (
    <section className="social-links">
      <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com/Atharv_maske_?t=YGrVJvuOPncKlBcAQwnWzw&s=08" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </section>
  );
}

export default SocialLinks;