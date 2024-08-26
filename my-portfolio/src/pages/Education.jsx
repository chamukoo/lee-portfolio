import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import pup from "../assets/images/pup-logo.png"; // Adjust the path as necessary
import olfu from "../assets/images/olfu-logo.png";
import mnhs from "../assets/images/mnhs-logo.png";
import sja from "../assets/images/sja-logo.png";
import tcmes from "../assets/images/tcmes-logo.png";

const Education = () => {
  const lineColor = "#89CFF0"; // Static color since dark mode is removed

  return (
    <div className="min-h-screen my-20 bg-[#000300]" id="education">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl font-semibold text-center text-white mb-8">
          <span className="text-[#89CFF0]">Educational</span> Background
        </h2>
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement
            date={"S.Y. 2021-2024"}
            contentStyle={{
              boxShadow: `0px 0px 6px ${lineColor}`,
              backgroundColor: "transparent", // No background color
              border: `4px solid ${lineColor}`,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff", // White text
            }}
            contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
            iconStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "50%", // Circular icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
            }}
            icon={<img src={pup} alt="Polytechnic University of the Philippines Logo" className="w-10 h-10" />}
          >
            <h3 className="text-md font-semibold">Polytechnic University of the Philippines</h3>
            <h4 className="text-sm text-[#89CFF0]">Bachelor of Science in Computer Engineering</h4>
            <h5 className="text-sm text-gray-300 mt-1">Sta. Mesa, Manila</h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"S.Y. 2019-2021"}
            contentStyle={{
              boxShadow: `0px 0px 6px ${lineColor}`,
              backgroundColor: "transparent", // No background color
              border: `4px solid ${lineColor}`,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff", // White text
            }}
            contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
            iconStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "50%", // Circular icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
            }}
            icon={<img src={olfu} alt="Our Lady of Fatima University Logo" className="w-10 h-10" />}
          >
            <h3 className="text-md font-semibold">Our Lady of Fatima University</h3>
            <h4 className="text-sm text-[#89CFF0]">Senior High School</h4>
            <h5 className="text-sm text-gray-300 mt-1">Km. 23 Sumulong Hwy, Antipolo City</h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"S.Y. 2018-2019"}
            contentStyle={{
              boxShadow: `0px 0px 6px ${lineColor}`,
              backgroundColor: "transparent", // No background color
              border: `4px solid ${lineColor}`,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff", // White text
            }}
            contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
            iconStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "50%", // Circular icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
            }}
            icon={<img src={mnhs} alt="Morong National High School Logo" className="w-10 h-10" />}
          >
            <h3 className="text-md font-semibold">Morong National High School</h3>
            <h4 className="text-sm text-[#89CFF0]">Junior High School (Grade 10)</h4>
            <h5 className="text-sm text-gray-300 mt-1">Tomas Claudio St., Morong, Rizal</h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"S.Y. 2015-2018"}
            contentStyle={{
              boxShadow: `0px 0px 6px ${lineColor}`,
              backgroundColor: "transparent", 
              border: `4px solid ${lineColor}`,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff", // White text
            }}
            contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
            iconStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "50%", // Circular icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
            }}
            icon={<img src={sja} alt="St. Jerome's Academy Logo" className="w-10 h-10" />}
          >
            <h3 className="text-md font-semibold">St. Jerome's Academy</h3>
            <h4 className="text-sm text-[#89CFF0]">Junior High School (Grade 7 - 9)</h4>
            <h5 className="text-sm text-gray-300 mt-1">771 Tomas Claudio St., Morong, Rizal</h5>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date={"S.Y. 2009-2015"}
            contentStyle={{
              boxShadow: `0px 0px 6px ${lineColor}`,
              backgroundColor: "transparent", // No background color
              border: `4px solid ${lineColor}`,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff", // White text
            }}
            contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
            iconStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: "50%", // Circular icon
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1px",
            }}
            icon={<img src={tcmes} alt="Tomas Claudio Memorial Elementary School Logo" className="w-10 h-10" />}
          >
            <h3 className="text-md font-semibold">Tomas Claudio Memorial Elementary School</h3>
            <h4 className="text-sm text-[#89CFF0]">Primary School (Grade 1 - 6)</h4>
            <h5 className="text-sm text-gray-300 mt-1">Tomas Claudio St., Morong, Rizal</h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;