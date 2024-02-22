import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import logoDark from "../assets/images/tcp.png";
import tcplight from "../assets/images/tcpLogo.png";
import ham from "../assets/images/hamburger.svg";

const TeamNav = () => {
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
  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 backdrop-blur-md z-50 md:px-60">
      <nav className="bg-transparent w-full">
        <div className="flex items-center justify-between h-[80px] md:pl-7 md:pr-9 pr-3 pl-2 md:visible">
          <Link to={"/"} className="flex items-center">
          <img
              src={logoDark}
              className="md:h-[60px] h-[53px] hidden dark:block"
              alt="TCP Logo"
            />
            <img
              src={tcplight}
              className="md:h-[70px] h-[63px] dark:hidden p-2"
              alt="TCP Logo"
            />
          </Link>
          <div className="flex-grow ml-5 md:ml-28 flex items-center justify-center text-gray-900 text-md hover:text-[--primary-c] duration-200 dark:text-gray-500">
            <Link to="/">
              Back to Main Page
            </Link>
          </div>
          <div className="flex items-center gap-2 md:hidden">
             {!isDarkMode ? (
               <FaMoon
                 fill="#fff"
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
          <div className="hidden md:flex items-center gap-3">
            {!isDarkMode ? (
               <FaMoon
               fill="#000"
               size={24}
               onClick={handleDarkMode}
               className="cursor-pointer mr-2"
             />
          ) : (
            <MdWbSunny
              fill="#f1c40f"
              size={24}
              onClick={handleDarkMode}
              className="cursor-pointer mr-2"
            />
            )}
            <Link
              to="/login"
              className="text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 rounded-md sm:text-sm sm:py-3 sm:px-4 px-2 text-center dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      {isDropdownOpen && (
        <div className="md:hidden flex gap-2 justify-center items-center px-2">
          {/* <Link
            to="/"
            className="block p-3 pl-4 py-3 md:p-0 text-gray-900 rounded md:bg-transparent hover:text-[--primary-c] duration-200 dark:text-white"
            onClick={handleDropdownClose}
          >
            Back to Main Page
          </Link> */}
          
           <Link
            to="/login"
            className="self-center px-4 md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 my-5 rounded-md py-3 w-[200px] text-center  dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
            Log In
         </Link>
          <Link
            to="/signup"
            className="self-center px-4 md:block text-white bg-[--primary-c] hover:bg-[--tertiary-c] duration-200 my-5 rounded-md py-3 w-[200px] text-center  dark:hover:bg-gray-300 dark:hover:text-gray-900"
            >
            Sign Up
         </Link>
        </div>
      )}
    </header>
  );
};

export default TeamNav;
