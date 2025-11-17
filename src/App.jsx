

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

export default function App() {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3200);

    
    const removeTimer = setTimeout(() => {
      setLoadingDone(true);
    }, 3900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {!loadingDone && <LoadingScreen fadeOut={fadeOut} />}
      
      <div
        id="main-page"
        className={loadingDone ? 'visible' : ''}
        aria-hidden={!loadingDone}
      >
        <Header />
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="project"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <BackToTop />
      </div>
    </>
  );
}

