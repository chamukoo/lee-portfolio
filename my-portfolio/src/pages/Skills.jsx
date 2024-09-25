import React, { useEffect, useRef } from 'react';
import { skills } from '../portfolio'; // Importing skills from portfolio.jsx
import '../global.css'; 

const Skills = () => {
  // Filter skills by type
  const techStacks = skills.filter(skill => skill.type === 'tech stacks');
  const tools = skills.filter(skill => skill.type === 'tools');

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
    <div className="mt-20 mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Professional Skillset 💡 </h2>

      {/* Tech Stacks Section */}
      <div className="my-20 mx-auto max-w-[1100px]">
        <div className="flex items-center mb-5 mx-10">
          <hr className="flex border-t-5 border-[#89CFF0] mr-4 w-[100px]" />
          <h3 className="text-2xl font-medium">• Tech Stacks</h3>
        </div>
        <div className="flex justify-center flex-wrap md:mx-20">
          {techStacks.map((skill) => (
            <div key={skill.alt} className="flex flex-col items-center mx-4 my-4">
              <img src={skill.logo} alt={skill.alt} className="w-[100px] h-[100px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="my-20 mx-auto max-w-[1100px]">
        <div className="flex items-center mb-5 mx-10">
          <hr className="flex border-t-5 border-[#89CFF0] mr-4 w-[100px]" />
          <h3 className="text-2xl font-medium">• Tools</h3>
        </div>
        <div className="flex justify-center flex-wrap md:mx-20">
          {tools.map((skill) => (
            <div key={skill.alt} className="flex flex-col items-center mx-4 my-4">
              <img src={skill.logo} alt={skill.alt} className="w-[100px] h-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;