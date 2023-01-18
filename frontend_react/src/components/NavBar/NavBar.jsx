import React from "react";
import "./NavBar.scss";
import { images } from "../../constants";

const NavBar = () => {
  const menu = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menu.map((item) => {
          return (
            <li key={`link-${item}`} className="app__flex p-text">
              <div>
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
