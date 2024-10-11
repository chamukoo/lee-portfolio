import React from "react";
import { skills, contacts } from "../portfolio"; 
import profile from "../assets/profile.png";
import { LinearGradient } from 'react-text-gradients';
import SkillsCard from "../components/SkillsCard"; 
import ContactCard from "../components/ContactCard";  // Import the new ContactCard component

const About = () => {
  const techStacks = skills.filter((skill) => skill.type === 'tech stacks');
  const tools = skills.filter((skill) => skill.type === 'tools');

  return (
    <div id="about" className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
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
      <div className="pt-20 my-20 mx-auto flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-semibold text-white mb-5 mx-10">
          <span className="text-[#89CFF0] text-2xl sm:text-3xl md:text-[25px] lg:text-[30px]">Professional </span>
          Skillset
        </h2>

        {/* Tech Stacks Section */}
        <SkillsCard skills={techStacks} title="Tech Stacks" />

        {/* Tools Section */}
        <SkillsCard skills={tools} title="Tools" />
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
            <ContactCard key={index} contact={contact} /> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;