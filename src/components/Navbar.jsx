import React, { useState, useEffect } from "react";
import logo from "../assets/images/tcpLogo.png";
import ham from "../assets/images/hamburger.svg";
import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <header className="sticky top-0 backdrop-blur-md">
      <nav className="bg-transparent w-full">
        <div className="flex flex-wrap items-center justify-between md:px-8 h-[80px]">
          <Link to={"/"} className="flex items-center">
            <img src={logo} className="h-[70px]" alt="TCP Logo" />
          </Link>
          <div className="flex items-center gap-5 font-medium text-md">
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
              Home
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
              About
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
              Mentor
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
              Mentee
            </Link>
            <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
              Leaderboard
            </Link>
            <Link to='/login' className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200">
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
            <Link to="/signup" className="hidden md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center">
              Sign Up
            </Link>
            {/* Button End*/}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              onClick={toggleDropdown}
              className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black m-2"
              aria-controls="navbar-cta"
              aria-expanded={isDropdownOpen}
            >
              <img src={ham} alt="Hamburger icon" />
            </button>
          </div>

          {/* <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 bg-transparent ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium  md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:mb-0 ">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--secondary-c]`}
                  aria-current="page"
                >
                  Home
                </a>
                
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c]`}
                >
                  Leaderboard
                </a>
                
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c]`}
                >
                  Mentors
                </a>
                
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] `}
                >
                  Problems
                </a>
                
              </li>
              <li className="md:hidden">
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded md:hover:bg-transparent hover:text-[--secondary-c]"
                >
                  Login
                </a>
                
              </li>
              <li className="md:hidden">
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded md:hover:bg-transparent hover:text-[--secondary-c]"
                >
                  Sign Up
                </a>
                
              </li>
            </ul>
          </div> */}

        </div>
        <hr className="border-gray-300" />
      </nav>
    </header>
  );
};

export default Navbar;
