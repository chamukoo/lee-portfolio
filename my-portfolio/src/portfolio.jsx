// For social media links
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import profile from "./assets/profile.png";
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
        certificate: 'https://drive.google.com/file/d/1f-BaCIcczPmhlIIPp62HRoo73ZbyOndr/view?usp=drive_link',
        link: "https://www.credly.com/badges/eaa9323e-80fe-48e6-8a85-48a5fd5bbc4b/public_url",
        skillsGained: [
            "Routing",
            "Switching Protocols",
            "Network Fundamentals",
            "IP Services",
        ]
    },
    {
        cover: meta,
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "September 11, 2024",
        certificate: 'https://drive.google.com/file/d/1NJcoxoNGW420ZdqV6X-KQf-LdGKKvmHK/view?usp=drive_link',
        link: "https://www.coursera.org/account/accomplishments/verify/7YW9CPR3EX42",
        skillsGained: [
            "HTML",
            "CSS",
            "Web Development",
        ]
    },
    {
        cover: meta,
        title: "Programming with JavaScript",
        issuer: "Meta",
        date: "September 23, 2024",
        certificate: 'https://drive.google.com/file/d/1FRgh2tSqtLK9d1s6FR9-JvmDxrj_SYT9/view?usp=drive_link',
        link: "https://coursera.org/share/38424a84a4c6ed14eeaa39093ea7f3eb",
        skillsGained: [
            "Javascript",
            "Unit Testing with Jest",
            "Object-Oriented Programming",
        ]
    },
    {
        cover: meta,
        title: "Version Control",
        issuer: "Meta",
        date: "September 26, 2024",
        certificate: 'https://drive.google.com/file/d/1BvRhyfthVSnJZaan-IiYOPeWEpcPLaAt/view?usp=drive_link',
        link: "https://www.coursera.org/account/accomplishments/verify/6N4U2DALR9YA",
        skillsGained: [
            "Git",
            "GitHub",
            "Bash Commands",
        ]
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
        logo: php, 
        name: 'PHP', 
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