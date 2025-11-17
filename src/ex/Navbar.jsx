import React, { useState } from "react";
import { NavItems } from "./NavItems";
import "./Navbar.css";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="header-list">

      <div className="div-list">

        <ul className="ul-list">
          {NavItems.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <i className={item.icon}></i>
              <a href={item.url}>{item.nav}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
