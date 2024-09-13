import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import pup from "./assets/images/pup-logo.png"; 
import olfu from "./assets/images/olfu-logo.png";
import mnhs from "./assets/images/mnhs-logo.png";
import sja from "./assets/images/sja-logo.png";
import tcmes from "./assets/images/tcmes-logo.png";

import html from './assets/skills-images/html.png';
import css from './assets/skills-images/css.png';
import js from './assets/skills-images/js.png';
import react from './assets/skills-images/reactjs.png';
import php from './assets/skills-images/php.png';
import python from './assets/skills-images/python.png';
import wordpress from './assets/skills-images/wordpress.png';
import tailwindCSS from './assets/skills-images/tailwindCSS.png';
import figma from './assets/skills-images/figma.png';
import git from './assets/skills-images/git.png';
import vscode from './assets/skills-images/vscode.png';
import kali from './assets/skills-images/kali.png';

export const timelineElements = [
    {
        logo: pup,
        school: "Polytechnic University of the Philippines",
        level: "Bachelor of Science in Computer Engineering",
        location: "Sta. Mesa, Manila",
        date: "S.Y. 2021 - Present",
    },
    {
        logo: olfu,
        school: "Our Lady of Fatima University",
        level: "Senior High School",
        location: "Tomas Claudio St., Morong, Rizal",
        date: "S.Y. 2019 - 2021",
    },
    {
        logo: mnhs,
        school: "Morong National High School",
        level: "Junior High School (Grade 10)",
        location: "Tomas Claudio St., Morong, Rizal",
        date: "S.Y. 2018 - 2019",
    },
    {
        logo: sja,
        school: "St. Jerome's Academy",
        level: "Junior High School (Grade 7 - 9)",
        location: "771 Tomas Claudio St., Morong, Rizal",
        date: "S.Y. 2015 - 2018",
    },
    {
        logo: tcmes,
        school: "Tomas Claudio Memorial Elementary School",
        level: "Primary School (Grade 1 - 6)",
        location: "Tomas Claudio St., Morong, Rizal",
        date: "S.Y. 2009 - 2015",
    }
];

export const skills = [
    { 
        logo: html, 
        alt: 'HTML Logo', 
        name: 'HTML', 
        level: 'Intermediate' 
    },
    { 
        logo: css, 
        alt: 'CSS Logo', 
        name: 'CSS', 
        level: 'Intermediate' 
    },
    { 
        logo: js, 
        alt: 'JavaScript Logo', 
        name: 'JavaScript', 
        level: 'Advanced' 
    },
    { 
        logo: react, 
        alt: 'ReactJS Logo', 
        name: 'React', 
        level: 'Intermediate' 
    },
    { 
        logo: tailwindCSS, 
        alt: 'TailwindCSS Logo', 
        name: 'TailwindCSS', 
        level: 'Intermediate' 
    },
    { 
        logo: python, 
        alt: 'Python Logo', 
        name: 'Python', 
        level: 'Advanced' 
    },
    { 
        logo: php, 
        alt: 'PHP Logo', 
        name: 'PHP', 
        level: 'Intermediate' 
    },
    { 
        logo: wordpress, 
        alt: 'WordPress Logo', 
        name: 'WordPress', 
        level: 'Intermediate' 
    },
    { 
        logo: figma, 
        alt: 'Figma Logo', 
        name: 'Figma', 
        level: 'Beginner' 
    },
    { 
        logo: git, 
        alt: 'Git Logo', 
        name: 'Git', 
        level: 'Intermediate' 
    },
    { 
        logo: vscode, 
        alt: 'Visual Studio Code Logo', 
        name: 'VS Code', 
        level: 'Advanced' 
    },
    { 
        logo: kali, 
        alt: 'Kali Linux Logo', 
        name: 'Kali Linux', 
        level: 'Beginner' 
    }
];

export const sections = [
    {
        title: "Quick Links",
        items: ["Home", "About", "Skills", "Portfolio", "Contact"]
    },
    {
        title: "Contact",
        items: ["+63 938 332 6648", "leeangeles2@gmail.com", "Capinpin St., Morong", "Rizal 1960, Philippines"]
    }
];

export const social = [
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