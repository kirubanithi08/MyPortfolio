import "./Home.css";
import HomeImg from "../assets/user.png";

import React, { useEffect, useState } from "react";

const words = [
  "Java", "JavaScript",

  "Spring Boot", "JPA", "Hibernate", "Spring Security",
  "React",

  "MySQL"
];

export default function Home() {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const handleTyping = () => {
      if (!isDeleting) {
        const next = currentWord.slice(0, display.length + 1);
        setDisplay(next);

        if (next === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = currentWord.slice(0, display.length - 1);
        setDisplay(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [display, isDeleting, wordIndex]);

  return (
    <div className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Seeking a job
      </p>

      <div className="home-container reveal">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Kirubanithi</h1>

            <h4 className="typing">
              {display}
              <span className="cursor">|</span>
            </h4>

            <div className="info-p">
              <p>Aspiring Software Developer looking to apply strong technical
                 expertise and problem-solving skills.</p>
             
            </div>

            <div className="btnn">
              {/* <button className="btn-home1">
                <i className="fa-solid fa-arrow-right"></i> Hire Me
              </button> */}

              <button className="btn-home2">
                <i className="fa-solid fa-download"></i> Download CV
              </button>
            </div>

            <div className="hhr">
              <hr />
            </div>
          </div>
        </div>

        <img src={HomeImg} alt="kiruba" />
      </div>
    </div>
  );
}
