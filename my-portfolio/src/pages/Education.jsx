import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineElements, certifications } from '../portfolio';
import education from "../assets/education.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LinearGradient } from 'react-text-gradients'

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
    <div className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
      <div className="mx-4 md:mx-6 sm:mx-8 lg:mx-10 bg-[#1a1a1a] my-20 rounded-lg">

        <div className="flex items-center mx-10 pt-10">
          <LinearGradient gradient={['to left', '#ff68f0 , #89CFF0']} className="text-xl sm:text-2xl md:text-[20px] lg:text-[25px] font-bold text-[#89CFF0] text-center">
            Education
          </LinearGradient>
          <hr className="flex border-t-5 border-[#89CFF0] ml-4 w-[150px] md:w-[200px]" />
        </div>

        <div className="flex flex-wrap justify-center mx-10">
          <div className="w-full p-5 md:w-1/3 flex justify-center items-center slide-in-left">
            <img
              ref={imageRef}
              src={education}
              alt="Education Overview"
              className="w-full h-auto transform transition-transform duration-300 ease-in-out"
            />
          </div>

          <div className="w-full p-5 md:w-2/3 flex flex-col justify-center items-center md:items-start slide-in-right">
            <h2 className="mb-4 text-[#89CFF0] text-lg sm:text-xl md:text-2xl font-semibold">
              Basic Qualification and Certifications
            </h2>
            <p className="text-gray-400 text-sm md:text-md lg:text-lg font-regular mb-2">
              Welcome to my Education page! 🙋‍♀️ Here, you'll find a summary of my academic qualifications and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. This page showcases the key milestones of my educational journey and my commitment to lifelong learning.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-1000px mx-auto mt-20" ref={timelineRef}>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0]">Educational </span> Background 👩‍🏫
        </h2>
        <VerticalTimeline lineColor={lineColor}>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={<span style={{ color: lineColor, fontSize: '12px', textAlign: 'center', display: 'block' }}>{element.date}</span>}
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
                  className="w-8 h-8 md:w-10 md:h-10 hover:float-effect"
                />
              }
            >
              <h3 className="text-sm sm:text-md font-semibold">{element.school}</h3>
              <h4 className="text-xs sm:text-sm text-[#89CFF0]">{element.level}</h4>
              <h5 className="text-xs sm:text-sm text-gray-300 mt-1">{element.location}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        
        <div className="mx-auto mt-20" ref={certificationsRef}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-white mb-8">
            Certifications 🎖️
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="certification-item bg-[#1a1a1a] rounded-lg shadow-lg transition-transform duration-300 group hover:scale-105 hover:border-[#89CFF0] hover:border-4"
              >
                <div className="relative">
                  <img
                    src={cert.cover}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-md sm:text-lg font-medium text-[#89CFF0] mb-2">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-white font-regular mb-2">ᯓ★ Issued by {cert.issuer} on {cert.date}</p>
                  <div className="flex justify-center space-x-5 text-sm text-white font-semibold tracking-wide">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                    </a>
                    <a
                      href={cert.certificate}
                      className="flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
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