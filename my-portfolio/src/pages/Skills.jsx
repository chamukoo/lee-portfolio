import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../portfolio'; // Importing skills from portfolio.jsx
import '../global.css'; 

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visibleSkills, setVisibleSkills] = useState([]);

  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prevSkills) => [...prevSkills, entry.target]);
            observer.unobserve(entry.target); // Stop observing once it’s visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => {
      if (skillsRef.current) {
        skillsRef.current.forEach((skill) => observer.unobserve(skill));
      }
    };
  }, []);

  return (
    <div className="min-h-screen my-20 mx-12 py-20 px-4 bg-[#000300]" id="skills">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Professional <span className="text-[#89CFF0]">Skillset</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              ref={(el) => (skillsRef.current[index] = el)}
              key={index}
              className={`relative flex items-center bg-transparent border-2 border-[#89CFF0] rounded-lg p-6 shadow-[0_0px_10px_0_rgba(137,207,240,0.7)] group 
              transition-transform duration-1000 delay-200 ease-in-out transform ${
                hoveredSkill === index ? 'scale-110' : 'scale-100'
              } ${visibleSkills.includes(skillsRef.current[index]) ? 'float-in' : ''}`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img
                src={skill.logo}
                alt={skill.alt}
                className="w-8 h-8"
              />
              <div className="ml-4">
                <p className="text-xl font-medium text-white">{skill.name}</p>
                {hoveredSkill === index && (
                  <p className="text-sm font-medium text-[#89CFF0] text-opacity-60 tracking-wider">{skill.level}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;