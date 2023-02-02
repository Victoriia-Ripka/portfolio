import React, { useState } from "react";
import "./NavBar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NavBar = () => {
  const menu = ["home", "about", "work", "skills", "contact"];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {menu.map((item) => {
          return (
            <li key={`link-${item}`} className="app__flex p-text">
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "ease" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menu.map((item) => {
                return (
                  <li key={`link-${item}`} className="app__flex p-text">
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
