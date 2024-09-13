import React from "react";
import Logo from "../assets/lee-logo.png";
import { sections, social } from "../portfolio"; // Importing sections and social from portfolio.jsx

const Footer = () => {
    return (
        <footer className="bg-[#000300] text-white text-center mt-20 py-4">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 border-gray-600 pb-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-[250px] h-auto md:w-[300px] lg:w-[400px] max-w-full" // Responsive classes for the logo
                    />
                    <p className="p-2 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="social-icons flex justify-center p-3">
                        {social.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-3xl hover:text-[#89CFF0]"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h6 className="font-bold uppercase text-lg mb-4 mt-5">{sections[0].title}</h6>
                    <ul>
                        {sections[0].items.map((item, i) => (
                            <li
                                key={i}
                                className="py-1 text-gray-500 hover:text-[#89CFF0] cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h6 className="font-bold uppercase text-lg mb-4 mt-5">{sections[1].title}</h6>
                    <ul>
                        {sections[1].items.map((item, i) => (
                            <li
                                key={i}
                                className="py-1 text-gray-500 hover:text-[#89CFF0] cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="text-sm pt-4 text-center tracking-wider text-gray-300">
                Made with 💙 by Lee Anne Angeles
            </p>
        </footer>
    );
};

export default Footer;