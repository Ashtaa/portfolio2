import React, { useEffect, useState } from "react";
import './skill.css';

const skills = [
  { name: "React", level: 60 },
  { name: "Firebase", level: 40 },
  { name: "MongoDB", level: 35 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
];

const circularSkills = [
  { name: "Node.js", level: 30 },
  { name: "Git", level: 30 },
  { name: "Docker", level: 25 },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    setTimeout(() => setLoaded(true), 100); // Delay to ensure elements are rendered
  }, []);

  return (
    <div className="skills-container">
      {/* Column 1: Horizontal Bar Skills */}
      <div className="skill-bar-container">
        <h2>My Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  width: loaded ? `${skill.level}%` : "0%", // Animate the width change
                }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
            
          </div>
        ))}
      </div>

      {/* Column 2: Circular Progress Bar Skills */}
      <div>
        <h3>Additional Technical Skills</h3>
        {circularSkills.map((skill, index) => (
         
          <div key={index} className={`circle-container ${loaded ? "active" : ""}`}>
             <div className="circle-skill-name">{skill.name}</div>
            <div className="circle-bar">
            
              <svg width="120" height="120">
              
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke={loaded ? "var(--circle-fill-color)" : "#ccc"}
                />
                
              </svg>
              <div className="circle-text">{skill.level}%</div>
              
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
