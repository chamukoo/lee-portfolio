import React, { useEffect, useRef } from "react";
import { timelineElements, certifications, introCard } from '../portfolio';
import education from "../assets/education.png";
import CertificationCard from '../components/CertificationCard';
import EducationTimeline from '../components/EducationTimeline';
import IntroCard from "../components/IntroCard"; // Import the new IntroCard component

const Education = () => {
  const lineColor = "#89CFF0";
  const certificationsRef = useRef(null);
  const timelineRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        } else {
          entry.target.classList.remove("slide-up");
        }
      });
    }, { threshold: 0.1 });

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen max-w-[1200px] my-20 mx-auto bg-[#000300] text-white">
      {/* Reuse IntroCard */}
      <IntroCard
        title={introCard[1].title}
        image={education}
        subtitle={introCard[1].subtitle}
        intro={introCard[1].intro}
      />

      {/* Timeline section */}
      <div className="max-w-1000px mx-auto mt-20" ref={timelineRef}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0]">Educational </span> Background 👩‍🏫
        </h2>
        <EducationTimeline timelineElements={timelineElements} lineColor={lineColor} />
      </div>

      {/* Certifications section */}
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
  );
};

export default Education;