import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import './Skill.css';

const frontend = [
  { name: "HTML", icon: <FaHtml5 style={{ color: '#E44D26', fontSize: '3.2rem' }} /> },
  { name: "CSS", icon: <FaCss3Alt style={{ color: '#264de4', fontSize: '3.2rem' }} /> },
  { name: "JavaScript", icon: <FaJs style={{ color: '#F0DB4F', fontSize: '3.2rem' }} /> },
  { name: "React", icon: <FaReact style={{ color: '#61DBFB', fontSize: '3.2rem' }} /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs style={{ color: '#68A063', fontSize: '3.2rem' }} /> },
  { name: "SQL", icon: <FaDatabase style={{ color: '#336791', fontSize: '3.2rem' }} /> }, // SQL styled
  { name: "Git", icon: <FaGitAlt style={{ color: '#F1502F', fontSize: '3.2rem' }} /> },
  { name: ".NET", icon: <SiDotnet style={{ color: '#512BD4', fontSize: '3.2rem' }} /> },
];

const Skill = () => {
  return (
    <section id="skill" className="skill-section">
      <h2 className="skill-heading">Skills</h2>

      <div className="skills-wrapper">
        {/* Frontend */}
        <div className="skill-group">
          <h3 className="skill-subheading">Frontend Technologies</h3>
          <div className="icon-grid">
            {frontend.map((tech, index) => (
              <div className="icon-box" key={index}>
                <div className="icon">{tech.icon}</div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skill-group">
          <h3 className="skill-subheading">Backend Technologies</h3>
          <div className="icon-grid">
            {backend.map((tech, index) => (
              <div className="icon-box" key={index}>
                <div className="icon">{tech.icon}</div>
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
