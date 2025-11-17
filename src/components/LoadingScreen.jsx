import React, { useEffect } from 'react';

export default function LoadingScreen() {
  useEffect(() => {
    const showElement = (el, delay = 0) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove('hidden');
        el.classList.add('fall');
      }, delay);
    };

    const loadingText = document.getElementById('loading-text');
    const mainIcon = document.querySelector('.main-icon');
    const subIcons = document.querySelectorAll('.sub-icons i');
    const designerText = document.getElementById('designer-text');

    showElement(loadingText, 0);
    showElement(mainIcon, 800);
    subIcons.forEach((icon, idx) => showElement(icon, 1600 + idx * 400));
    showElement(designerText, 2800);
  }, []);

  return (
    <div id="loading-screen">
      <div className="loading-content">
        <i className="fa-solid fa-laptop-code fa-5x main-icon hidden"></i>
        <h1 id="loading-text" className="hidden">MY PROFILE</h1>
        <div className="sub-icons">
          <i className="fa-brands fa-github fa-2x hidden"></i>
          <i className="fa-solid fa-code fa-2x hidden"></i>
          <i className="fa-solid fa-user fa-2x hidden"></i>
        </div>
        <h2 id="designer-text" className="hidden">Designed by Amine</h2>
      </div>
    </div>
  );
}
