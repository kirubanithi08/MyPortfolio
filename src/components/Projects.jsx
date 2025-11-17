
import React from 'react';
import "./Projects.css"

import Portfolio from "../assets/Portfolio.png"
import Travel from "../assets/Travel.png"

const projectList = [
  { img: Portfolio, title: 'E-Commerce Website', 
    desc: 'Modern online store with product filtering, cart, and payment system.',
    cName:"cImg", skills: ['HTML','CSS','JavaScript'] },

  { img: Portfolio, title: 'Recipes Sharing', 
    desc: "Built a Spring Boot web app for creating and managing recipes, using MVC architecture, MySQL database design, secure authentication, and robust data validation for a reliable user experience.", 
    cName:"cImg", skills: ['HTML','CSS','Js', 'Spring boot'] },

  { img: Travel, title: 'Travel Website', 
  desc: 'Built a responsive landing page for a travel website with clean UI and organized content sections.Optimized layout for different screen sizes to deliver a seamless browsing experience with contact form.', 
  cName:"cImg", git:"https://github.com/kirubanithi08/tourism_web", live:"https://tourismweb-eta.vercel.app/",
  skills: ['React','CSS',] },

  { img: Portfolio, title: 'Private Chat', 
  desc: 'Built a real-time private chat app using Spring Boot, WebSockets (STOMP), and Spring Security, with a lightweight HTML and JS frontend and JPA for message storage.Spring Security with JPA for message persistence.', 
  cName:"cImg", skills: ['HTML','CSS','Js','Spring boot'] },

  { img: Portfolio, title: 'Inventory Management', 
  desc: 'Developed a desktop application with CRUD operations, inventory tracking, low-stock alerts, secure role-based authentication, and Excel export features for streamlined reporting.', 
  cName:"cImg", skills: ['Java','MySQL'] },


  { img: Portfolio, title: 'Portfolio', 
  desc: 'Developed a responsive portfolio website to showcase projects, skills, and experience.Implemented a modern layout with smooth navigation and optimized performance across devices.', 
  cName:"cImg", skills: ['React','CSS'] },
];

export default function Projects() {
  return (
    <section className="project" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      {/* <hr /> */}
      {/* <div className="info-pro">
        <p>A showcase of my recent projects demonstrating expertise in full-stack </p>
        <p>development, modern frameworks, and creative problem-solving.</p>
      </div> */}
      <div className="projects-container reveal">
        {projectList.map((p, idx) => (
          <div className="project-card" key={idx}>
            <img src={p.img} alt={p.title}  className={p.cName}/>
            <h3 className='project-title'>{p.title}</h3>
            
            <p>{p.desc}</p>
            <div className="skills">{p.skills.map((s,i)=>(<span key={i} href="#">{s}</span>))}</div>
            <div className="btns">
              <a href={p.git} className="btn"><i className="fab fa-github"></i> GitHub</a>
              <a href={p.live} className="btn"><i className="fas fa-external-link-alt"></i> Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
