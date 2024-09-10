import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/lee-logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#000300] text-white flex justify-between items-center px-10 z-50">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-[200px] h-auto md:w-[300px] lg:w-[400px] max-w-full" // Responsive classes for the logo
        />
      </div>

      <ul className="hidden md:flex">
        <li className="p-4 w-auto">Home</li>
        <li className="p-4 w-auto">About</li>
        <li className="p-4 w-auto">Skills</li>
        <li className="p-4 w-auto">Portfolio</li>
        <li className="p-4 w-auto border">Contact</li>
      </ul>
      <div onClick={toggleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "z-10 fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-[250px] h-auto py-8 pl-4 md:w-[300px] lg:w-[400px] max-w-full" // Responsive classes for the logo
        />
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4 border-b border-b-gray-600">Skills</li>
          <li className="p-4 border-b border-b-gray-600">Portfolio</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;