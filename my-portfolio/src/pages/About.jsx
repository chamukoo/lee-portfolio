import React from "react";
import profile from "../assets/profile.png";
import SkillsCard from "../components/SkillsCard"; 
import ContactCard from "../components/ContactCard";
import IntroCard from "../components/IntroCard";  // Import the new IntroCard component
import { skills, contacts, introCard } from "../portfolio";
import { LinearGradient } from "react-text-gradients";

const About = () => {
  const techStacks = skills.filter((skill) => skill.type === 'tech stacks');
  const tools = skills.filter((skill) => skill.type === 'tools');

  return (
    <div id="about" className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
      {/* Reuse IntroCard */}
      <IntroCard
        title={introCard[0].title}
        image={profile}
        subtitle={introCard[0].subtitle}
        intro={introCard[0].intro}
      />

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
          <LinearGradient gradient={['to left', '#05E8BA, #087EE1']}  className="text-2xl sm:text-2xl md:text-[24px] lg:text-[28px] font-bold text-[#89CFF0] text-center">
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