import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id="back-to-top"
      style={{
        position: 'fixed',
        bottom: 40,
        right: 40,
        background: '#000',
        color: 'white',
        width: 50,
        height: 50,
        borderRadius: '50%',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 1000,
        transition: 'transform 0.3s ease'
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      aria-hidden={!visible}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-chevron-up"></i>
    </div>
  );
}
