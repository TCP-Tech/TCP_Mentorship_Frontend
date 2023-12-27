import React, { useState } from "react";
import logo from "../assets/images/tcpLogo.png";
import logoDark from "../assets/images/tcp.png"
import ham from "../assets/images/hamburger.svg";
import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);   
  };

  return (
    <header className="sticky top-0 backdrop-blur-md">
      <nav className="bg-transparent w-full">
        <div className="flex flex-wrap items-center justify-between h-[80px] md:pl-7 md:pr-9 pr-3 pl-2 md:visible">
          <Link to={"/"} className="flex items-center">
            <img src={logoDark} className="md:h-[60px] h-[53px] hidden dark:block" alt="TCP Logo"/>
            <img src={logo} className="md:h-[70px] h-[63px] hidden dark:hidden" alt="TCP Logo"/>
          </Link>
          <div className="flex">
          <div className="md:flex items-center gap-5 font-medium text-md hidden dark:text-white">
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Home
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              About
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Mentor
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Mentee
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Leaderboard
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Log In
            </Link>
            {!isDarkMode ? (
              <MdWbSunny
                fill="#f1c40f"
                size={24}
                onClick={handleDarkMode}
                className="cursor-pointer"
              />
            ) : (
              <FaMoon
                fill="#111"
                size={24}
                onClick={handleDarkMode}
                className="cursor-pointer"
              />
            )}
            {/* Button Start*/}
            <Link to="/signup" className="hidden md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900">
              Sign Up
            </Link>
            {/* Button End*/}
          
          </div>
        <div className="flex items-center gap-2 md:hidden">
          {!isDarkMode ? (
            <MdWbSunny
              fill="#f1c40f"
              size={24}
              onClick={handleDarkMode}
              className="cursor-pointer"
            />
          ) : (
            <FaMoon
              fill="#111"
              size={24}
              onClick={handleDarkMode}
              className="cursor-pointer"
            />
          )}
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black m-2"
            onClick={handleDropdownToggle}
          >
            <img src={ham} alt="Hamburger icon" />
          </button>
        </div>
        </div>
        </div>
        {isDropdownOpen && (
          <div className="md:hidden">
           <div className="flex flex-col h-[100vh]">
        <Link className="p-3  pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Home
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden  my-2" />

            </Link>

            <Link className="p-3 pl-4 py-3  md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              About
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />

            </Link>

            <Link className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Mentor
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />

            </Link>
            <Link className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Mentee
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />

            </Link>
            <Link className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Leaderboard
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />

            </Link>
            <Link className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
              Log In
            <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />

            </Link>
            <Link to="/signup" className="self-center md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 my-5 rounded-md py-3 w-[200px] text-center  dark:hover:bg-gray-300 dark:hover:text-gray-900">
              Sign Up
            </Link>
        </div>
          </div>
        )}
         <hr className="border-gray-300" />
      </nav>
    </header>
  );
};

export default Navbar;
