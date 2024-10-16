// For social media links
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import profile from "./assets/profile.png";
import education from "./assets/education.png";

// For Timeline in Education Page
import pup from "./assets/images/pup-logo.png"; 
import olfu from "./assets/images/olfu-logo.png";
import mnhs from "./assets/images/mnhs-logo.png";
import sja from "./assets/images/sja-logo.png";
import tcmes from "./assets/images/tcmes-logo.png";

// For Skills -- Tech Stakcs
import html from './assets/skills-images/html.png';
import css from './assets/skills-images/css.png';
import js from './assets/skills-images/js.png';
import ts from './assets/skills-images/ts.png';
import react from './assets/skills-images/reactjs.png';
import vite from './assets/skills-images/vite.png';
import php from './assets/skills-images/php.png';
import tailwindCSS from './assets/skills-images/tailwindCSS.png';
import python from './assets/skills-images/python.png';

// For Skills -- Tools
import git from './assets/skills-images/git.png';
import postman from './assets/skills-images/postman.png';
import npm from './assets/skills-images/npm.png';
import figma from './assets/skills-images/figma.png';
import wordpress from './assets/skills-images/wordpress.png';
import vscode from './assets/skills-images/vscode.png';
import kali from './assets/skills-images/kali.png';

// For Contacts in ABout page
import email from './assets/contact-images/email.png';
import linkedin from './assets/contact-images/linkedin.png';
import github from './assets/contact-images/github.png';

import cisco from './assets/cisco.png';
import meta from './assets/meta.png';
import google from './assets/google.png';

import certificate1 from './assets/certificates/certificate1.pdf';
import certificate2 from './assets/certificates/certificate2.pdf';
import certificate3 from './assets/certificates/certificate3.pdf';
import certificate4 from './assets/certificates/certificate4.pdf';
import certificate5 from './assets/certificates/certificate5.pdf';
import certificate6 from './assets/certificates/certificate6.pdf';


export const navLinks = [
    {
      name: "Home",
      path: "/Main"
    },
    {
      name: "About",
      path: "/About"
    },
    {
      name: "Education",
      path: "/Education"
    },
    {
      name: "Portfolio",
      path: "/Portfolio"
    },
];



export const introCard = [
    {
        title: "About",
        image: profile,
        subtitle: "Get To Know Me",
        intro: "Hello! 👋 I'm Lee Anne, a dedicated Computer Engineering student passionate about both web development and design. Throughout my college journey, I’ve gained proficiency in tools such as HTML, CSS, JavaScript, ReactJS, and Tailwind CSS, allowing me to create dynamic, responsive web applications. I also use Figma for wireframing and prototyping, turning design concepts into reality. In addition to web development, I have a strong interest in networking, which led me to choose network administration as my college elective. My enthusiasm deepened through hands-on experience in Cisco courses, where I found learning about networks both engaging and rewarding. Currently, I’m expanding my skill set by diving into React Native for mobile application development. With this growing expertise, I aim to bridge the gap between web and mobile technologies, contributing to innovative projects that seamlessly combine design and functionality.",
    },
    {
        title: "Education",
        image: education,
        subtitle: " Basic Qualification and Certifications",
        intro: "Welcome to my Education page! 🙋‍♀️ Here, you'll find a summary of my academic qualifications and the journey that has shaped my career. Education is central to my growth, and I’m dedicated to continuous learning and staying updated with the latest advancements in technology. This page showcases the key milestones of my educational journey and my commitment to lifelong learning.",
    },
];

export const aboutCard = [
    {
        profile: profile,
        greeting: "Hello there!👋",
        name: "Lee Anne",
        location: "Manila, Philippines",
    }
];

// For Timeline in Education Page
export const timelineElements = [
    {
        logo: pup,
        school: "Polytechnic University of the Philippines",
        level: "Bachelor of Science in Computer Engineering",
        location: "📍🗺️ Sta. Mesa, Manila",
        date: "⭐ S.Y. 2021 - Present",
    },
    {
        logo: olfu,
        school: "Our Lady of Fatima University",
        level: "Senior High School",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2019 - 2021",
    },
    {
        logo: mnhs,
        school: "Morong National High School",
        level: "Junior High School (Grade 10)",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2018 - 2019",
    },
    {
        logo: sja,
        school: "St. Jerome's Academy",
        level: "Junior High School (Grade 7 - 9)",
        location: "📍🗺️ 771 Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2015 - 2018",
    },
    {
        logo: tcmes,
        school: "Tomas Claudio Memorial Elementary School",
        level: "Primary School (Grade 1 - 6)",
        location: "📍🗺️ Tomas Claudio St., Morong, Rizal",
        date: "⭐ S.Y. 2009 - 2015",
    }
];

// For Certifications in Education Page
export const certifications = [
    {
        cover: cisco,
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        date: "July 20, 2024",
        certificate: certificate1,
        link: "https://www.credly.com/badges/eaa9323e-80fe-48e6-8a85-48a5fd5bbc4b/public_url",
    },
    {
        cover: meta,
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "September 11, 2024",
        certificate: certificate2,
        link: "https://www.coursera.org/account/accomplishments/verify/7YW9CPR3EX42",
    },
    {
        cover: meta,
        title: "Programming with JavaScript",
        issuer: "Meta",
        date: "September 23, 2024",
        certificate: certificate3,
        link: "https://coursera.org/share/38424a84a4c6ed14eeaa39093ea7f3eb",
    },
    {
        cover: meta,
        title: "Version Control",
        issuer: "Meta",
        date: "September 26, 2024",
        certificate: certificate4,
        link: "https://www.coursera.org/account/accomplishments/verify/6N4U2DALR9YA",
    },
    {
        cover: meta,
        title: "HTML and CSS in depth",
        issuer: "Meta",
        date: "October 2, 2024",
        certificate: certificate5,
        link: "https://www.coursera.org/account/accomplishments/verify/OBTE35GZL2M7",
    },
    {
        cover: google,
        title: "Foundations of Cybersecurity",
        issuer: "Google",
        date: "October 3, 2024",
        certificate: certificate6,
        link: "https://www.coursera.org/account/accomplishments/verify/9UH11WBPQUXW",
    }
];

export const skills = [
    { 
        logo: html, 
        name: 'HTML', 
        type: 'tech stacks'
    },
    { 
        logo: css, 
        name: 'CSS', 
        type: 'tech stacks'
    },
    { 
        logo: js, 
        name: 'JavaScript', 
        type: 'tech stacks'
    },
    {
        logo: ts,
        name: 'TypeScript',
        type: 'tech stacks'
    },
    { 
        logo: react, 
        name: 'React', 
        type: 'tech stacks'
    },
    {
        logo: vite,
        name: 'Vite',
        type: 'tech stacks'
    },
    { 
        logo: tailwindCSS, 
        name: 'TailwindCSS', 
        type: 'tech stacks'
    },
    { 
        logo: python, 
        name: 'Python', 
        type: 'tech stacks'
    },
    { 
        logo: git, 
        name: 'Git', 
        type: 'tools'
    },
    { 
        logo: postman, 
        name: 'Postman', 
        type: 'tools'
    },
    { 
        logo: npm, 
        name: 'NPM', 
        type: 'tools'
    },
    { 
        logo: figma, 
        name: 'Figma', 
        type: 'tools'
    },
    { 
        logo: wordpress, 
        name: 'WordPress', 
        type: 'tools'
    },
    { 
        logo: vscode, 
        name: 'VS Code', 
        type: 'tools'
    },
    { 
        logo: kali, 
        name: 'Kali Linux', 
        type: 'tools'
    },
];

export const contacts = [
    {
        logo: email,
        title: "Message me on:",
        username: "leeangeles2@gmail.com",
        link: "mailto: leeangeles2@gmail.com",
    },
    {
        logo: linkedin,
        title: "My LinkedIn Profile:",
        username: "/in/leeanneangeles",
        link: "https://www.linkedin.com/in/leeanneangeles/",
    },
    {
        logo: github,
        title: "My GitHub Profile:",
        username: "/chamukoo",
        link: "https://github.com/chamukoo"
    },
];

export const footer = [
    {
        name: "Email",
        icon: <FaEnvelope />,
        link: "mailto: leeangeles2@gmail.com"
    },
    {
        name: "Github",
        icon: <FaGithub />,
        link: "https://github.com/chamukoo"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/leeanneangeles/"
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
    },
];