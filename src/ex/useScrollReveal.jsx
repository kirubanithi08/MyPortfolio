import { useEffect } from "react";
import "./useScrollReveal.css"

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
          el.classList.add("active-reveal");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // On load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
