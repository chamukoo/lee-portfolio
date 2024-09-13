// About.jsx
import React from "react";
import ProfilePic from "../assets/about-pic.jpg";
import { social } from "../portfolio"; // Import sections and social from portfolio

const About = () => {
    return (
        <div id="about" className="min-h-screen my-20 bg-[#000300] text-white">
            <div className="mx-auto h-auto flex flex-col md:flex-row items-center px-10 gap-5">
                {/* Profile Picture */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 flex justify-center">
                    <img 
                        src={ProfilePic} 
                        alt="My Profile Picture" 
                        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full object-cover"
                    />
                </div>

                {/* About Me Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Get to know me!</h1>
                    <p className="text-sm font-normal py-3 px-3">
                        Hello!👋 I am an incoming 4th-year Computer Engineering student at the Polytechnic University of the Philippines.
                        My journey in the 🌐 world of technology has been an exciting one, filled with learning and growth.<br /><br />
                        
                        I have hands-on experience in web development, particularly in front-end technologies such as HTML, CSS, and JavaScript.
                        In addition to coding, I am knowledgeable in wireframing and designing user interfaces using Figma.
                        Crafting intuitive and visually appealing websites is something I thoroughly enjoy.<br /><br />
                        
                        Currently, I am expanding my skill set by learning React Native for mobile development.
                        This new venture allows me to bring my web development expertise into the realm of mobile apps,
                        creating seamless and engaging user experiences across different platforms.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start gap-4">
                        {/* See My Resume Button */}
                        <a 
                            href="https://drive.google.com/file/d/14209rNqlwvQQNU4jbqT17mLrZMs1HxZz/view?usp=drive_link" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-sm text-[#000300] bg-[#00FFFF] px-4 py-2 rounded-full font-semibold hover:bg-[#0000FF] transition duration-300 ease-in-out">
                            See My Resume
                        </a>
                        {/* Social Media Icons */}
                        {social.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-4xl text-[#00FFFF] hover:text-[#FFFFFF]">
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;