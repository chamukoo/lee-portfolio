import React, { useState } from 'react';
import html from '../assets/skills-images/html.png';
import css from '../assets/skills-images/css.png';
import js from '../assets/skills-images/js.png';
import react from '../assets/skills-images/reactjs.png';
import php from '../assets/skills-images/php.png';
import python from '../assets/skills-images/python.png';
import wordpress from '../assets/skills-images/wordpress.png';
import tailwindCSS from '../assets/skills-images/tailwindCSS.png';
import figma from '../assets/skills-images/figma.png';
import git from '../assets/skills-images/git.png';
import vscode from '../assets/skills-images/vscode.png';
import kali from '../assets/skills-images/kali.png';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { imgSrc: html, alt: 'HTML Logo', name: 'HTML', level: 'Intermediate' },
    { imgSrc: css, alt: 'CSS Logo', name: 'CSS', level: 'Intermediate' },
    { imgSrc: js, alt: 'JavaScript Logo', name: 'JavaScript', level: 'Advanced' },
    { imgSrc: react, alt: 'ReactJS Logo', name: 'React', level: 'Intermediate' },
    { imgSrc: tailwindCSS, alt: 'TailwindCSS Logo', name: 'TailwindCSS', level: 'Intermediate' },
    { imgSrc: python, alt: 'Python Logo', name: 'Python', level: 'Advanced' },
    { imgSrc: php, alt: 'PHP Logo', name: 'PHP', level: 'Intermediate' },
    { imgSrc: wordpress, alt: 'WordPress Logo', name: 'WordPress', level: 'Intermediate' },
    { imgSrc: figma, alt: 'Figma Logo', name: 'Figma', level: 'Beginner' },
    { imgSrc: git, alt: 'Git Logo', name: 'Git', level: 'Intermediate' },
    { imgSrc: vscode, alt: 'Visual Studio Code Logo', name: 'VS Code', level: 'Advanced' },
    { imgSrc: kali, alt: 'Kali Linux Logo', name: 'Kali Linux', level: 'Beginner' }
  ];

  return (
    <div className="min-h-screen my-20 mx-12 py-20 px-4 bg-[#000300]" id="skills">
        <div className="max-w-[1000px] mx-auto" >
            <h2 className="text-2xl font-semibold text-center text-white mb-8">
                Professional Skillset
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative flex items-center bg-transparent border-2 border-blue-600 rounded-lg p-6 shadow-lg group"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                >
                    <img
                    src={skill.imgSrc}
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
