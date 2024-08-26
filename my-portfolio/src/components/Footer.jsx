import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

import Logo from "../assets/logo.png";

const sections = [
    {
        title: "Quick Links",
        items: ["Home", "About", "Skills", "Portfolio", "Contact"]
    },
    {
        title: "Contact",
        items: ["+63 938 332 6648", "leeangeles2@gmail.com", "Capinpin St., Morong", "Rizal 1960, Philippines"]
    }
];

const social = [
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://github.com/chamukoo"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/lee-anne-angeles-673124312/"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com/leeanneyangeles"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/liyaaaaaan_/"
    }
];

const Footer = () => {
    return (
        <footer className="bg-[#000300] text-white text-center mt-20 py-4">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 border-b-2 border-gray-600 pb-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4 mt-5"
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
                    <h6 className="font-bold uppercase text-lg mb-4 mt-5">Quick Links</h6>
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
                    <h6 className="font-bold uppercase text-lg mb-4 mt-5">Contact</h6>
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
            <p className="text-sm mt-4 pt-4">© 2021 Lee Anne Angeles. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
