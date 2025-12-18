
import React from 'react';
import "./Projects.css"

import Portfolio from "../assets/Portfolio.png"
import Travel from "../assets/Travel.png"
// import Inventory from "../assets/inventory.png"
import Recipe from "../assets/recipe.png"
import GameStore from "../assets/GameStore.png"
// import Authapi from "../assets/Authapi.png"

const projectList = [
  { img: GameStore, title: 'GameStore WebApp', 
    desc: 'Developed backend for an e-commerce web app with JWT-based authentication and role-basedaccess. Implemented REST controllers for games, categories, and user operations. Implemented validation, global exception handling, and Docker-based containerize deployment.',
    btn:"btn", cName:"cImg", git:"https://github.com/kirubanithi08/Game_Store", 
  live:"https://game-store-lilac-five.vercel.app/",
  skills: ['SpringBoot','JPA','MySQL','SpringSecurity','React'] },

  { img: Recipe, title: 'Recipes Sharing', 
    desc: "Built a Spring Boot web app for creating and managing recipes, using MVC architecture, MySQL database design, secure authentication, and robust data validation for a reliable user experience.", 
     btn:"btn-hide", cName:"cImg", git:"https://github.com/kirubanithi08/RecipeSharing_WebApplicatin", 
     skills: ['HTML','CSS','Js', 'Spring boot'] },

  { img: Travel, title: 'Travel Website', 
  desc: 'Built a responsive landing page for a travel website with clean UI and organized content sections.Optimized layout for different screen sizes to deliver a seamless browsing experience with contact form.', 
  btn:"btn", cName:"cImg", git:"https://github.com/kirubanithi08/TourismWeb", 
  live:"https://tourismweb-eta.vercel.app/",
  skills: ['React','CSS',] },

  // { img: Authapi, title: 'Auth api', 
  // desc: 'Built a real-time private chat app using Spring Boot, WebSockets (STOMP), and Spring Security, with a lightweight HTML and JS frontend and JPA for message storage.Spring Security with JPA for message persistence.', 
  // cName:"cImg", skills: ['HTML','CSS','Js','Spring boot'] },

  // { img: Inventory, title: 'Inventory Management', 
  // desc: 'Developed a desktop application with CRUD operations, inventory tracking, low-stock alerts, secure role-based authentication.', 
  //  btn:"btn-hide", cName:"cImg", git:"https://github.com/kirubanithi08/tourism_web",
  //  skills: ['Java','MySQL'] },


  { img: Portfolio, title: 'Portfolio', 
  desc: 'Developed a responsive portfolio website to showcase projects, skills, and experience.Implemented a modern layout with smooth navigation and optimized performance across devices.', 
   btn:"btn", cName:"cImg", git:"https://github.com/kirubanithi08/MyPortfolio",
   live:"https://portfolio-phi-three-49.vercel.app/",
   skills: ['React','CSS'] },
];

export default function Projects() {
  return (
    <section className="project" id="project">
      <p>PROJECTS</p>
      {/* <h1>Featured Work</h1> */}
      <hr />
     
      <div className="projects-container reveal">
        {projectList.map((p, idx) => (
          <div className="project-card" key={idx}>
            <img src={p.img} alt={p.title}  className={p.cName}/>
            <h3 className='project-title'>{p.title}</h3>
            
            <p>{p.desc}</p>
            <div className="skills">{p.skills.map((s,i)=>(<span key={i} href="#">{s}</span>))}</div>
            <div className="btns">
              <a href={p.git} className="btn"><i className="fab fa-github"></i> GitHub</a>
              <a href={p.live} className={p.btn}><i className="fas fa-external-link-alt"></i> Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
