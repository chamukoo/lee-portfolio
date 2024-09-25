import React from "react";
import { social, skills, aboutCard } from "../portfolio"; // Import sections, social, and skills from portfolio
import { TextAnim } from "text-animations-react";

const About = () => {
  // Filter skills by type
  const techStacks = skills.filter((skill) => skill.type === 'tech stacks');
  const tools = skills.filter((skill) => skill.type === 'tools');

  return (
    <div id="about" className="min-h-screen my-20 bg-[#000300] text-white">
      {/* About Card Section */}
      <div className="max-w-[1100px] mx-auto mt-40">
        <div className="flex flex-wrap justify-center">
          {aboutCard.map((aboutCard, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] w-full rounded-lg shadow-lg flex flex-col sm:flex-row mx-10 my-5"
            >
              <div className="relative flex-shrink-0 sm:w-[40%]">
                <img
                  src={aboutCard.profile}
                  alt={aboutCard.name}
                  className="w-full h-50 sm:h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-[#89CFF0] bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <a
                    href={aboutCard.link}
                    className="text-black text-lg font-semibold hover:text-blue-700 flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left sm:pl-5 mt-4 sm:mt-0 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#89CFF0] mb-2">
                  {aboutCard.greeting}
                </h3>
                <h4 className="text-sm sm:text-base md:text-lg text-white font-regular mb-2">
                  I'm {aboutCard.name}, based in {aboutCard.location}.
                </h4>
                <br />
                <p className="text-white text-sm mb-2">Follow me on:</p>
                <div className="flex justify-center sm:justify-start gap-3 mt-2">
                  {social.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#89CFF0] text-4xl hover:text-white transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Me Content */}
      <div className="mt-40 mx-auto max-w-[1100px] h-[100vh] flex flex-col justify-center">
        <div className="mb-2 px-10 font-bold">
          <TextAnim
            name="Get To Know Me!"
            size={3}
            type="swing"
            color="#89CFF0"
            count="infinite"
            duration={2}
          />
        </div>

        <p className="text-1xl font-normal tracking-wider py-10 px-10">
          I’m currently a <span className="font-bold">4th-year Computer Engineering student</span> at the <span className="font-bold">Polytechnic University of the Philippines</span>,
          and my journey in the <span className="font-bold"> world of technology</span> has been a thrilling adventure filled with learning and growth.
          <br />
          <br />
          To be honest, I didn’t have any background in coding when I first started. It wasn’t until I chose to pursue <span className="font-bold">Computer Engineering</span> that I discovered my passion for programming. My journey began in my freshman year when I was introduced to <span className="font-bold">Python</span> through subjects like <span className="font-bold">Programming Logic and Design</span> and <span className="font-bold">Object-Oriented Programming</span>.
          That’s where my love for coding took root. As I progressed, my understanding deepened during my second year with subjects like <span className="font-bold">Data Structures and Algorithms</span>, where I continued to strengthen my Python skills.
          <br />
          <br />
          Around the same time, I was also introduced to <span className="font-bold">HTML, CSS</span>, and <span className="font-bold">JavaScript</span>, which opened the doors to web development. Creating simple websites and seeing them come to life on the screen was a fulfilling experience, and it sparked my interest in pursuing web development more seriously.
          Along with coding, I’ve gained proficiency in <span className="font-bold">UI design and wireframing</span> using <span className="font-bold">Figma</span>, where I get to explore my creative side while focusing on crafting intuitive user interfaces.
          <br />
          <br />
          Now, I’m expanding my skill set further by diving into <span className="font-bold">React Native</span> for mobile app development. This exciting new venture allows me to merge my web development expertise with mobile technologies, empowering me to create seamless and engaging user experiences across platforms.
          Building responsive and cross-platform mobile applications has become a new passion of mine, and I’m constantly learning to enhance my capabilities.
          <br />
          <br />
          Aside from my technical pursuits, I love problem-solving and collaborating with others. I’ve been involved in various projects, including team-based app development and individual work, where I’ve developed not only my coding skills but also my leadership and communication abilities. I find joy in learning new technologies and challenging myself to keep improving.
          <br />
          <br />
          I look forward to continuing my journey in the tech world, learning more each day, and creating impactful solutions through code.
        </p>
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
              <div key={skill.alt} className="flex flex-col items-center mx-4 my-4">
                <img
                  src={skill.logo}
                  alt={skill.alt}
                  className="w-[75px] h-[75px] transition-transform duration-300 hover:scale-110"
                />
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
              <div key={skill.alt} className="flex flex-col items-center mx-4 my-4">
                <img
                  src={skill.logo}
                  alt={skill.alt}
                  className="w-[75px] h-[75px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies & Interests Section */}
      <div className="my-20 mx-auto max-w-[1100px] h-auto flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-semibold text-[#89CFF0] mb-5 mx-10">
          <span className="text-white text-2xl sm:text-3xl md:text-[25px] lg:text-[30px]">Hobbies & </span>
          Interests
        </h2>
      </div>

      <div className="my-20 mx-auto max-w-[1100px] h-auto flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-semibold text-[#89CFF0] mb-5 mx-10">
          <span className="text-white text-2xl sm:text-3xl md:text-[25px] lg:text-[30px]">Personal </span>
          Projects
        </h2>
      </div>
    </div>
  );
};

export default About;