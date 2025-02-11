import React, { useEffect, useState } from "react";
import './skill.css';

const skills = [
  { name: "React", level: 80 },
  { name: "Firebase", level: 40 },
  { name: "MongoDB", level: 35 },
  { name: "HTML", level: 95 },
  
];
const right =[
  { name: "CSS", level: 85 },
  { name: "Communication", level: 80 },
  { name: "Teamwork", level: 80 },
  { name: "Speaking", level: 85 },
]

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="skills-container">
      <h2 className="skill-header">My Skills</h2>
      <div className="bar-container">
      <div className="skill-bar-container">
        
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: loaded ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
      <div>
     {
      right.map((skill,index)=>(
        <div key={index} className="skill">
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: loaded ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
        </div>
      ))
     }
      </div>
      </div>
    </div>
  );
};

export default Skills;
