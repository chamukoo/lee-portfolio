import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/lee-logo.png"; // Adjust the path to your logo
import { navLinks } from "../portfolio"; // Import navLinks from portfolio.jsx

const Header = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-[#000300] text-white mx-15">
      <img src={Logo} alt="Logo" className="w-[200px] md:w-[240px] lg:w-[280px] h-auto" />

      <ul className="hidden md:flex">
        {navLinks.map((link, index) => (
          <li key={index} className="p-4 w-auto flex items-center">
            <Link to={link.path} className="flex items-center hover:text-[#89CFF0] hover:float-effect">
              <span className="ml-2 px-1 text-lg">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          src={Logo}
          alt="Logo"
          className="w-[250px] h-auto py-8 pl-4 md:w-[300px] lg:w-[400px] max-w-full"
        />
        <ul className="uppercase p-4">
          {navLinks.map((link, index) => (
            <li key={index} className="p-4 border-b border-b-gray-600 flex items-center">
              <Link to={link.path} className="flex items-center hover:text-[#89CFF0] hover:float-effect">
                <span className="ml-2 text-lg">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;