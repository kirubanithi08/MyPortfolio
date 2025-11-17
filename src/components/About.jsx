import React from 'react';
import "./About.css"

export default function About() {
  return (
    <section className="about" id="about">
      <p>ABOUT ME</p>


      <div className="about-row">


        {/* LEFT SIDE */}
        <div className="left">

          <div className="title">
            <h1>Summery</h1>
          </div>

          <div className="hrrr"><hr /></div>



          <p>
            Enthusiastic and detail-oriented Computer Science graduate with strong hands-on training in Java, Spring Boot, and MySQL.
            <br />Skilled in software design, back-end development, and web technologies with proven ability to deliver efficient
solutions.  <br /> logic with creativity to bring ideas to life.
          </p>

          <p>
            Adept at working in collaborative environments, troubleshooting technical issues, and adapting quickly to new
technologies. 
            <br /> Seeking an entry-level role as a Software Developer to apply technical expertise and problem-solving
skills.
<br />I have learned the  front-end development, including HTML, CSS, JavaScript and React enabling me to create responsive and user-friendly interfaces.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">

          <div className="title">
            <h1>Education</h1>
          </div>

          <div className="hrrr"><hr /></div>


          <div className="card">
            
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <br />
              <h4>B.E-Computer Science Engineering</h4>
              
              <p>K.S.K College of Engineering & Technology, Anna University, Kumbakonam</p>
              
              <h4>2019-2023</h4>
            </div>

            <div className="c2">
              <h3><i className="fa-solid fa-code"></i>Certification</h3>
            <br />
              <p>-Gained practical expertise in Java, Spring Boot, MySQL, and REST API development.</p>
              <p>-Built and deployed Spring Boot projects with database-driven functionality 
              (CRUD operations, authentication, data security).</p>
              <p>-Applied front-end technologies (HTML, CSS, JavaScript) to design responsive 
              user interfaces.</p>
              <p>-Utilized Maven for build automation and Git/GitHub for version control.</p>
            </div>
          </div>
        </div>

      </div>


    </section>
  );
}
