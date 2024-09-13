import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements } from '../portfolio';

import education from "../assets/education.png";

const Education = () => {
  const lineColor = "#89CFF0"; 

  return (
    <div className="min-h-screen my-20 bg-[#000300]" id="education">
      {/* Main container for the two columns */}
      <div className="mx-auto h-auto flex flex-col md:flex-row items-center px-10 gap-5 mb-20">
        {/* Column 1: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start slide-in-left">
          <img
            src={education}
            alt="Education"
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:translate-x-0 hover:-translate-y-4"
          />
        </div>
        {/* Column 2: Text content */}
        <div className="w-full md:w-1/2 text-white text-center flex flex-col items-center px-5 slide-in-right">
          <h1 className="text-4xl font-bold mb-4">Education 💫</h1>
          <h2 className="text-2xl font-semibold mb-4 text-[#89CFF0]">
            Basic Qualification and Certifications
          </h2>
          <p className="text-md text-gray-400">
            Welcome to my Education page! Here, you'll find a summary of my academic qualifications and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. This page showcases the key milestones of my educational journey and my commitment to lifelong learning.
          </p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0]">Educational</span> Background
        </h2>
        <VerticalTimeline lineColor="#fff">
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span style={{ color: '#89CFF0', fontSize: '14px', textAlign: 'center', display: 'block' }}>{element.date}</span>}
              contentStyle={{
                boxShadow: `0px 0px 6px ${lineColor}`,
                backgroundColor: "transparent",
                border: `4px solid ${lineColor}`,
                borderRadius: "20px",
                textAlign: "center",
                color: "#fff", 
              }}
              contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
              iconStyle={{
                backgroundColor: "#f9fafb",
                borderRadius: "50%", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1px",
              }}
              icon={
                <img 
                  src={element.logo} 
                  alt={`${element.school} Logo`} 
                  className="w-10 h-10 hover:float-effect" // Add hover effect class
                />
              }
            >
              <h3 className="text-md font-semibold">{element.school}</h3>
              <h4 className="text-sm text-[#89CFF0]">{element.level}</h4>
              <h5 className="text-sm text-gray-300 mt-1">{element.location}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;