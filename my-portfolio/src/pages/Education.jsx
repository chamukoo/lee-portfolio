import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements, certifications } from '../portfolio';
import education from "../assets/education.png";
import { FaExternalLinkAlt } from "react-icons/fa";

// Utility function to debounce the observer callback
const debounce = (func, wait = 20) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const Education = () => {
  const lineColor = "#89CFF0"; 
  const certificationsRef = useRef(null);
  const timelineRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleIntersection = debounce((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        } else {
          entry.target.classList.remove("slide-up");
        }
      });
    }, 50);

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    const imageElement = imageRef.current;
    const timelineElements = timelineRef.current?.querySelectorAll(".vertical-timeline-element");
    const certificationElements = certificationsRef.current?.querySelectorAll(".certification-item");

    if (imageElement) observer.observe(imageElement);
    if (timelineElements) {
      timelineElements.forEach((element) => observer.observe(element));
    }
    if (certificationElements) {
      certificationElements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (imageElement) observer.unobserve(imageElement);
      if (timelineElements) {
        timelineElements.forEach((element) => observer.unobserve(element));
      }
      if (certificationElements) {
        certificationElements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <div className="min-h-screen my-20 bg-[#000300]" id="education">
      <div className="max-w-[1200px] mx-auto h-auto flex flex-col sm:flex-col md:flex-row items-center px-10 gap-5 mb-20">
        <div className="w-full sm:flex-col md:flex-col justify-center md:justify-start slide-in-left">
          <img
            ref={imageRef}
            src={education}
            alt="Education Overview"
            className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:translate-x-0 hover:-translate-y-4"
          />
        </div>
        <div className="w-full md:flex-col text-white text-center flex flex-col items-center px-5 slide-in-right">
          <h1 className="text-4xl md:text-[30px] lg:text-[38px] font-bold mb-4">Education 💫</h1>
          <h2 className="text-2xl md:text-[22px] lg:text-[26px] font-semibold mb-4 text-[#89CFF0]">
            Basic Qualification and Certifications
          </h2>
          <p className="text-1xl md:text-[14px] lg:text-[18px] text-gray-400">
            Welcome to my Education page! 🙋‍♀️ Here, you'll find a summary of my academic qualifications and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. This page showcases the key milestones of my educational journey and my commitment to lifelong learning.
          </p>
        </div>
      </div>

      <div className="max-w-900px] mx-auto mt-40" ref={timelineRef}>
        <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[38px] font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0] text-2xl sm:text-3xl md:text-[30px] lg:text-[38px]">Educational </span> 
          Background 👩‍🏫
        </h2>
        <VerticalTimeline lineColor={lineColor}>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={<span style={{ color: lineColor, fontSize: '14px', textAlign: 'center', display: 'block' }}>{element.date}</span>}
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
                  className="w-10 h-10 hover:float-effect"
                />
              }
            >
              <h3 className="text-md font-semibold">{element.school}</h3>
              <h4 className="text-sm text-[#89CFF0]">{element.level}</h4>
              <h5 className="text-sm text-gray-300 mt-1">{element.location}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        
        <div className="max-w-[1000px] mx-auto mt-40" ref={certificationsRef}>
          <h2 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[38px] font-semibold text-center text-white mb-8">
            Certifications 🎖️
          </h2>
          <div className="flex flex-wrap justify-center gap-5 m-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="certification-item bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col sm:flex-row sm:max-w-[600px] lg:max-w-[1000px] w-full px-3 py-5 transition-transform duration-300 group hover:scale-105"
              >
                <div className="relative flex-shrink-0 sm:w-[40%]">
                  <img
                    src={cert.cover}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-50 sm:h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-[#89CFF0] bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <a
                      href={cert.certificate}
                      className="text-black text-lg font-semibold hover:text-blue-700 flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </div>
                <div className="text-center sm:text-left sm:pl-5 mt-4 sm:mt-0 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-[#89CFF0] mb-2">{cert.title}</h3>
                  <p className="text-white text-sm font-regular mb-2">ᯓ★ Issued by {cert.issuer} on {cert.date}</p>
                  <a
                    href={cert.link}
                    className="text-[#89CFF0] text-sm font-semibold mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify 🡥
                  </a>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-5">
                    {cert.skillsGained.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-sm text-[#89CFF0] border border-[#89CFF0] rounded-full px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;