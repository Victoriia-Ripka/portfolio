import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend dev",
    description: "I am keen on React and JS. Moreover, TypeScript and Redux are my good friends",
    imgURL: images.about01,
  },
  {
    title: "Backend dev",
    description: "I am good at Node.js and Express. Also MongoDB and MySQL are in my tech stack",
    imgURL: images.about04,
  },
  {
    title: "Web development",
    description: "I am good frontend developer",
    imgURL: images.about02,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Dev </span>
        means
        <span> good business</span>
      </h2>

      <div className="app__profile">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
