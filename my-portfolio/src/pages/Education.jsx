import React from 'react';

const Education = () => {
  return (
    <section className="education py-16 px-4 bg-gray-100">
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
        <span className="text-blue-600">Educational</span> Background
      </h2>
      <p className="text-center text-lg font-light max-w-3xl mx-auto mb-12">
        My educational background shows my commitment to lifelong learning and personal development. It attests to my unwavering pursuit of information and skill development in order to achieve in my chosen field.
      </p>
      <div className="relative max-w-5xl mx-auto">
        {[
          {
            logo: 'images/pup-logo.png',
            alt: 'Polytechnic University of the Philippines Logo',
            title: 'Polytechnic University of the Philippines',
            degree: 'Bachelor of Science in Computer Engineering',
            year: 'S.Y. 2021-2024',
            location: 'Sta. Mesa, Manila',
            side: 'left'
          },
          {
            logo: 'images/olfu-logo.png',
            alt: 'Our Lady of Fatima University Logo',
            title: 'Our Lady of Fatima University',
            degree: 'Senior High School',
            year: 'S.Y. 2019-2021',
            location: 'Km. 23 Sumulong Hwy, Antipolo City',
            side: 'right'
          },
          {
            logo: 'images/mnhs-logo.png',
            alt: 'Morong National High School Logo',
            title: 'Morong National High School',
            degree: 'Junior High School (Grade 10)',
            year: 'S.Y. 2018-2019',
            location: 'Tomas Claudio St., Morong, Rizal',
            side: 'left'
          },
          {
            logo: 'images/sja-logo.png',
            alt: 'St. Jerome\'s Academy Logo',
            title: 'St. Jerome\'s Academy',
            degree: 'Junior High School (Grade 7 - 9)',
            year: 'S.Y. 2015-2018',
            location: '771 Tomas Claudio St., Morong, Rizal',
            side: 'right'
          },
          {
            logo: 'images/tcmes-logo.png',
            alt: 'Tomas Claudio Memorial Elementary School Logo',
            title: 'Tomas Claudio Memorial Elementary School',
            degree: 'Primary School (Grade 1 - 6)',
            year: 'S.Y. 2009-2015',
            location: 'Tomas Claudio St., Morong, Rizal',
            side: 'left'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`relative flex ${item.side === 'left' ? 'justify-start' : 'justify-end'} mb-16`}
          >
            <img
              src={item.logo}
              alt={item.alt}
              className="absolute w-12 h-12 border-4 border-blue-600 rounded-full shadow-lg"
              style={{ [item.side === 'left' ? 'right' : 'left']: '-3rem' }}
            />
            <div className={`bg-white border-2 border-blue-600 rounded-xl p-6 shadow-lg ${item.side === 'left' ? 'ml-16' : 'mr-16'} w-3/4`}>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <h4 className="text-lg font-medium italic text-gray-600">{item.degree}</h4>
              <h5 className="text-base font-normal text-gray-500">{item.year}</h5>
              <h6 className="text-base font-normal text-gray-400">{item.location}</h6>
            </div>
            {item.side === 'left' ? (
              <span className="absolute top-6 right-0 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-blue-600"></span>
            ) : (
              <span className="absolute top-6 left-0 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-blue-600"></span>
            )}
          </div>
        ))}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-blue-600"></div>
      </div>
    </section>
  );
};

export default Education;
