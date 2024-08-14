import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between items-center h-20 max-w-full mx-auto px-10 text-white">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2"
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
        <h1 className="w-full text-3xl font-bold text-[#89CFF0] m-6">Logo</h1>
        <ul className="uppercase p-4 ">
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
