import React from "react";
import "./Skills.css";

const skills = [
  "Java", "JavaScript", "HTML", "CSS",

  "Spring Boot", "JPA", "Hibernate", "REST APIs", "Spring MVC", "Spring Security",
  "React",

  "MySQL", "H2",
  "Git/Github", "Maven", "Postman", "Junit", "Debugging",
  "Agile", "SDLC", "STLC"
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <p className="skill-title">SKILLS</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <span className="skill-tag" key={i}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
