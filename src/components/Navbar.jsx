import React, { useEffect, useState } from "react";
import logo from "../assets/images/tcpLogo.png";
import logoDark from "../assets/images/tcp.png";
import ham from "../assets/images/hamburger.svg";
import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import "../index.css"

const Navbar = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : prefersDarkMode;
  });

  const handleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const prefersDarkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = (e) => {
      const newMode = e.matches;
      setDarkMode(newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };
  
    prefersDarkModeQuery.addListener(updateTheme);
    return () => {
      prefersDarkModeQuery.removeListener(updateTheme);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-md z-50">
      <nav className="bg-transparent w-full">
        <div className="flex flex-wrap items-center justify-between h-[80px] md:pl-7 md:pr-9 pr-3 pl-2 md:visible">
          <Link to={"/"} className="flex items-center">
            <img
              src={logoDark}
              className="md:h-[60px] h-[53px] hidden dark:block"
              alt="TCP Logo"
            />
            <img
              src={logo}
              className="md:h-[70px] h-[63px] dark:hidden p-2"
              alt="TCP Logo"
            />
          </Link>
          <div className="flex">
            <div className="md:flex items-center gap-8 font-medium text-md hidden dark:text-white">
              <a
              href="#home"
              className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Home
              </a>
              <a 
              href="#teamLeaderBoard"
              className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Team LeaderBoard
              </a>
              {/* <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Mentor
              </Link>
              <Link className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Mentee
              </Link> */}
              <a 
              href="#leaderBoard"
              className="p-2 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Leaderboard
              </a>
              {!isDarkMode ? (
                
                <FaMoon
                  fill="#000"
                  size={24}
                  onClick={handleDarkMode}
                  className="cursor-pointer"
                  // className={`cursor-pointer sun-moon-icon ${isDarkMode ? "animate-moonrise" : ""}`}
                />
              ) : (
                <MdWbSunny
                  fill="#f1c40f"
                  size={24}
                  onClick={handleDarkMode}
                  className="cursor-pointer"
                  // className={`cursor-pointer sun-moon-icon ${isDarkMode ? "" : "animate-sunset"}`}
                />
              )}
                {/* Button Start*/}
             <div className="flex gap-2">
              <Link
                to="/login"
                className="hidden md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-5 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
              >
               Login
              </Link>
              <Link
                to="/signup"
                className="hidden md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
              >
                Sign Up
              </Link>
                </div>
              {/* Button End*/}
            </div>
            <div className="flex items-center gap-2 md:hidden">
              {!isDarkMode ? (
                <FaMoon
                  fill="#000"
                  size={24}
                  onClick={handleDarkMode}
                  className="cursor-pointer"
                />
              ) : (
                <MdWbSunny
                  fill="#f1c40f"
                  size={24}
                  onClick={handleDarkMode}
                  className="cursor-pointer"
                />
              )}
              <button
                className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-gray-100 dark:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black m-2"
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
              <a  href="#teamLeaderBoard" className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                Team LeaderBoard
                <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />
              </a>
              <a href="#leaderBoard" className="p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white">
                LeaderBoard
                <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" />
              </a>
              <div className="flex px-4 gap-2">
              <Link
                to="/login"
                className="self-center md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 my-5 rounded-md py-3 w-[200px] text-center  dark:hover:bg-gray-300 dark:hover:text-gray-900"
              >
                Log In
                {/* <hr className="absolute left-2 right-2 border-gray-300 md:hidden my-2" /> */}
              </Link>
              <Link
                to="/signup"
                className="self-center md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 my-5 rounded-md py-3 w-[200px] text-center  dark:hover:bg-gray-300 dark:hover:text-gray-900"
              >
                Sign Up
              </Link>
              </div>
            </div>
          </div>
        )}
        <hr className="border-gray-300" />
      </nav>
    </header>
  );
};

export default Navbar;
