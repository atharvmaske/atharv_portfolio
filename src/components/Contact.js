import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or check my location below.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:maskeatharv03@gmail.com">maskeatharv03@gmail.com</a></p>
        <p><strong>Location:</strong> Pune, Maharashtra</p>
      </div>
      <p className="thank-you">Thanks for visiting my portfolio!</p>
    </section>
  );
}

export default Contact;
