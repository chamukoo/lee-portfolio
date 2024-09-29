import React from "react";
import { skills, contacts } from "../portfolio"; // Import sections, social, and skills from portfolio
import profile from "../assets/profile.png";
import { LinearGradient } from 'react-text-gradients'

const About = () => {
  // Filter skills by type
  const techStacks = skills.filter((skill) => skill.type === 'tech stacks');
  const tools = skills.filter((skill) => skill.type === 'tools');

  return (
    <div id="about" className="min-h-screen max-w-[1100px] my-20 mx-auto bg-[#000300] text-white">
      {/* About Card Section */}
      <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 bg-[#1a1a1a] my-20 rounded-lg">
        <div className="flex mb-10 items-center mx-10 mb-10 pt-10">
          <LinearGradient gradient={['to left', '#ff68f0 , #89CFF0']} className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-bold text-[#89CFF0] text-center">
            About Me
          </LinearGradient>
          <hr className="flex border-t-5 border-[#89CFF0] ml-4 w-[200px]" />
        </div>
        <div className="flex flex-wrap justify-center mx-10">
          <div className="w-full p-5 md:w-1/3 flex justify-center items-center">
            <img src={profile} alt="Lee Anne Angeles" className="rounded-full border-4 border-[#89CFF0] mb-5 md:mb-0" />
          </div>
          <div className="w-full p-5 md:w-2/3 flex flex-col justify-center items-center md:items-start">
            <p className="text-white text-sm font-regular mb-2 md:text-md">
              Hello! 👋 I'm Lee Anne, a dedicated Computer Engineering student passionate about both web development and design. Throughout my college journey, I’ve gained proficiency in tools such as HTML, CSS, JavaScript, ReactJS, and Tailwind CSS, allowing me to create dynamic, responsive web applications. I also use Figma for wireframing and prototyping, turning design concepts into reality.
              <br /><br />
              In addition to web development, I have a strong interest in networking, which led me to choose network administration as my college elective. My enthusiasm deepened through hands-on experience in Cisco courses, where I found learning about networks both engaging and rewarding.
              <br /><br />
              Currently, I’m expanding my skill set by diving into React Native for mobile application development. With this growing expertise, I aim to bridge the gap between web and mobile technologies, contributing to innovative projects that seamlessly combine design and functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="pt-20 my-20 mx-auto max-w-[1100px] h-auto flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-semibold text-white mb-5 mx-10">
          <span className="text-[#89CFF0] text-2xl sm:text-3xl md:text-[25px] lg:text-[30px]">Professional </span>
          Skillset
        </h2>

        {/* Tech Stacks Section */}
        <div className="my-10 mx-auto w-full flex flex-col">
          <div className="flex mb-5 items-center mx-10">
            <hr className="flex border-t-5 border-[#89CFF0] mr-4 w-[100px]" />
            <h3 className="text-2xl font-medium">• Tech Stacks</h3>
          </div>
          <div className="flex justify-center flex-wrap">
            {techStacks.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center mx-4 my-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-[75px] h-[75px] transition-transform duration-300 hover:scale-110"
                />
                {/* Display skill name below the image */}
                <p className="mt-3 text-white text-md font-regular">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="my-10 mx-auto w-full flex flex-col">
          <div className="flex mb-5 items-center mx-10">
            <hr className="flex border-t-5 border-[#89CFF0] mr-4 w-[100px]" />
            <h3 className="text-2xl font-medium">• Tools</h3>
          </div>
          <div className="flex justify-center flex-wrap">
            {tools.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center mx-4 my-4">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-[75px] h-[75px] transition-transform duration-300 hover:scale-110"
                />
                {/* Display skill name below the image */}
                <p className="mt-3 text-white text-md font-regular tracking-wider">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 my-20 py-5 bg-[#1a1a1a] rounded-lg">
        <div className="flex items-center mx-10 py-5">
          <LinearGradient gradient={['to left', '#ff68f0 , #89CFF0']} className="text-2xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold text-[#89CFF0] text-center">
            Contact
          </LinearGradient>
          <hr className="flex border-t-5 border-[#89CFF0] ml-4 w-[200px]" />
        </div>
        <div className="flex justify-start flex-wrap px-10 md:justify-start md:px-5 lg:justify-center">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center mx-2 my-4 hover:bg-gradient-to-r from-[#ff68f0] to-[#89CFF0] p-2 rounded-lg transition-all duration-300">
              <div className="px-2">
                <img
                  src={contact.logo}
                  alt={contact.title}
                  className="w-[50px] h-[50px] mb-2"
                />
              </div>
              <div className="px-4">
                <h3 className="text-md font-regular">{contact.title}</h3>
                {/* Username with hyperlink */}
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold tracking-wide pt-2 text-white hover:text-[#000]"
                >
                  {contact.username}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;