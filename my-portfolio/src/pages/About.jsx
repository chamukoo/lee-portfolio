import React from "react";
import ProfilePic from "../assets/about-pic.jpg";

const About = () => {
    return (
        <div className="w-full bg-[#000300] py-16 text-white flex items-center justify-center ease-in-out duration 500">
            <div className="bg-[#28282B] max-w-[1000px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 flex flex-col md:flex-row p-10 rounded-md">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                    <img src={ProfilePic} alt="My Profile Picture" className="w-[300px] p-5 rounded-full m-auto" />
                </div>
                <div className="flex-1 text-center p-5 md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold">Get to know me!</h1>
                    <p className="text-sm font-normal py-4">
                        Hello!👋 I am an incoming 4th-year Computer Engineering student at the Polytechnic University of the Philippines.
                        My journey in the 🌐 world of technology has been an exciting one, filled with learning and growth.<br /><br />
                        
                        I have hands-on experience in web development, particularly in front-end technologies such as HTML, CSS, and JavaScript.
                        In addition to coding, I am knowledgeable in wireframing and designing user interfaces using Figma.
                        Crafting intuitive and visually appealing websites is something I thoroughly enjoy.<br /><br />
                        
                        Currently, I am expanding my skill set by learning React Native for mobile development.
                        This new venture allows me to bring my web development expertise into the realm of mobile apps,
                        creating seamless and engaging user experiences across different platforms.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
