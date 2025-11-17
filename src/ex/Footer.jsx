import React from 'react';

import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Amine</h2>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://github.com/Saboo24" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/amine-hamzaoui-a2453a35b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://wa.me/213554139526" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
        <p className="footer-copy">&copy; 2025 Amine. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
