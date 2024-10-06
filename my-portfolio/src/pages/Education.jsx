import React, { useEffect, useRef } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { timelineElements, certifications } from '../portfolio';
import { LinearGradient } from 'react-text-gradients';
import "react-vertical-timeline-component/style.min.css";
import education from "../assets/education.png";
import CertificationCard from '../components/CertificationCard'; 

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
          <LinearGradient gradient={['to left', '#ff68f0 , #89CFF0']} className="text-2xl sm:text-3xl md:text-[25px] lg:text-[30px] font-bold text-[#89CFF0] text-center">
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

          <div className="w-full p-5 md:w-2/3 flex flex-col justify-center md:items-start slide-in-right">
            <h2 className="mb-4 text-[#89CFF0] text-xl font-semibold tracking-wide">
              Basic Qualification and Certifications
            </h2>
            <p className="text-gray-400 text-md font-regular mb-2">
              Welcome to my Education page! 🙋‍♀️ Here, you'll find a summary of my academic qualifications and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. This page showcases the key milestones of my educational journey and my commitment to lifelong learning.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-1000px mx-auto mt-20" ref={timelineRef}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0]">Educational </span> Background 👩‍🏫
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
                  className="w-10 h-10"
                />
              }
            >
              <h3 className="text-md font-semibold tracking-wide">{element.school}</h3>
              <h4 className="text-md text-[#89CFF0] tracking-wide">{element.level}</h4>
              <h5 className="text-sm text-gray-300 mt-1 tracking-wide">{element.location}</h5>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <div className="mx-auto mt-20" ref={certificationsRef}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-white mb-8">
            Certifications 🎖️
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;