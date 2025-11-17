import React from 'react';

import "./Services.css"

const services = [
  { img: '/images/web.svg', title: 'Web Development', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { img: '/images/app.svg', title: 'App Development', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { img: '/images/dm.svg', title: 'Digital Marketing', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { img: '/images/seo.svg', title: 'Email Marketing', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <p>SERVICES</p>
      <h1>Our Features & Services</h1>
      <hr />
      <div className="services-container reveal">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
