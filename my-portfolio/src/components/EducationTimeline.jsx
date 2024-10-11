import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationTimeline = ({ timelineElements, lineColor }) => {
  return (
    <VerticalTimeline lineColor={lineColor}>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element"
          date={<span style={{ color: lineColor, fontSize: '14px', textAlign: 'center', display: 'block' }}>{element.date}</span>}
          contentStyle={{
            boxShadow: `0px 0px 6px ${lineColor}`,
            backgroundColor: 'transparent',
            border: `4px solid ${lineColor}`,
            borderRadius: '20px',
            textAlign: 'center',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: `16px solid ${lineColor}` }}
          iconStyle={{
            backgroundColor: '#f9fafb',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1px',
          }}
          icon={<img src={element.logo} alt={`${element.school} Logo`} className="w-10 h-10" />}
        >
          <h3 className="text-md font-semibold tracking-wide">{element.school}</h3>
          <h4 className="text-md text-[#89CFF0] tracking-wide">{element.level}</h4>
          <h5 className="text-sm text-gray-300 mt-1 tracking-wide">{element.location}</h5>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default EducationTimeline;