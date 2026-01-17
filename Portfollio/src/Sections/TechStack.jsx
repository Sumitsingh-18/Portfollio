
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TitleHeader from "../Components/TitleHeader.jsx"
import "./Techstack.css";


const skills = {
  orbit1: [
  { name: "HTML", icon: "/images/html5-original.svg" },
  { name: "CSS", icon: "/images/css3-original.svg" },
  { name: "JavaScript", icon: "/images/javascript-original.svg" },
  ],

  orbit2: [
  { name: "MongoDB", icon: "/images/mongodb-original.svg" },
  { name: "Node.js", icon: "/images/nodejs-original.svg" },
  { name: "Express.js", icon: "/images/express-original.svg" },
  { name: "NPM", icon: "/images/npm-original-wordmark.svg" },
  
  ],

   orbit3: [
  { name: "GitHub", icon: "/images/github-original.svg" },
  { name: "Git", icon: "/images/git-original.svg" },
  { name: "Bootstrap", icon: "/images/bootstrap-plain.svg" },
  { name: "Vite", icon: "/images/vite-original.svg" },
  
   ],
};

const TechStack = () => {
  const [radii, setRadii] = useState({ orbit1: 150, orbit2: 240, orbit3: 330 });

  // Dynamically update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 600) {
        setRadii({ orbit1: 80, orbit2: 130, orbit3: 180 });
      } else if (w < 1024) {
        setRadii({ orbit1: 120, orbit2: 190, orbit3: 260 });
      } else {
        setRadii({ orbit1: 150, orbit2: 240, orbit3: 330 });
      }
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const getPositionStyle = (index, total, radius) => {
    const angle = (360 / total) * index;
    const transform = `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`;
    return { transform };
  };

  return (
   
    <section className="orbit-section bg-gradient-to-r from-black via-gray-900 to-black">

      <div className="head">
      <TitleHeader title="My Preferred Tech Stack"
         sub="🤝The Skills I bring to the table"
        />
        </div>
      
      

      <div className="orbit-container">
        {/* Center React icon */}
        <div className="center-icon">
          <img src="/images/react-original.svg" alt="React" />
          <span>React</span>
        </div>

        {/* Orbit 1 */}
        <div className="orbit orbit-1">
          {skills.orbit1.map((skill, i) => (
            <div
              key={skill.name}
              className="orbit-icon"
              style={getPositionStyle(i, skills.orbit1.length, radii.orbit1)}
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Orbit 2 */}
        <div className="orbit orbit-2">
          {skills.orbit2.map((skill, i) => (
            <div
              key={skill.name}
              className="orbit-icon"
              style={getPositionStyle(i, skills.orbit2.length, radii.orbit2)}
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Orbit 3 */}
        <div className="orbit orbit-3">
          {skills.orbit3.map((skill, i) => (
            <div
              key={skill.name}
              className="orbit-icon"
              style={getPositionStyle(i, skills.orbit3.length, radii.orbit3)}
            >
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default TechStack;
