import React, { useEffect, useState } from "react";
import "./ScrollReveal.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
    >
      ▲
    </button>
  );
}

export default ScrollToTop;
