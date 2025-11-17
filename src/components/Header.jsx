import React, { useEffect, useState } from 'react';

import  "./Header.css"

const navItems = [
  { id: 'home', label: 'Home', icon: 'fa-regular fa-house' },
  { id: 'about', label: 'About', icon: 'fa-regular fa-address-card' },
  { id: 'skills', label: 'Skills', icon: 'fa-solid fa-code' },
  { id: 'project', label: 'Projects', icon: 'fa-regular fa-folder-open' },
  { id: 'contact', label: 'Contact', icon: 'fa-regular fa-envelope' },
];

export default function Header() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(e, id) {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
    setActive(id);
  }

  return (
    <header className="header-list" role="navigation">
      
      <div className="div-list">
        <ul className="ul-list" aria-label="Main navigation">
          {navItems.map(item => (
            <li key={item.id} className={active === item.id ? 'active' : ''}>
              <i className={item.icon} aria-hidden="true"></i>
              <a href={`#${item.id}`} onClick={e => handleClick(e, item.id)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}







