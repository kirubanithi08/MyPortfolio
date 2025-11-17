import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-title">CONTACT</p>
      <h1 className="contact-heading">Get in Touch with Me</h1>

      <div className="contact-content">
  <h1 className="contact-name">Kiruba</h1>
        <div className="top-row">
          {/* <h1 className="contact-name">Kiruba</h1> */}

          <ul className="social-list">
            <li><a href="https://github.com/kirubanithi08"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="mailto:kirubanithi812@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
            <li><a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </div>

        <div className="bottom-row">
          <p><i className="fa-solid fa-phone"></i> +91 9361250105</p>
          <p><i className="fa-solid fa-envelope"></i> kirubanithi812@gmail.com</p>
        </div>

      </div>
    </section>
  );
}
