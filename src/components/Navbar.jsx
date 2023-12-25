import React, { useState } from 'react';
import LogoLight from '../assets/images/tcpLogo.png';
import ham from '../assets/images/hamburger.svg';
function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <nav className="bg-transparent w-[100vw]">
        <div className="flex flex-wrap items-center justify-between md:px-4">
          <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={LogoLight} className="h-[9vh]" alt="TCP Logo" />
          </a>
  
          <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse sm:gap-4 gap-2">
            <button
              type="button"
              className="hidden md:block text-white bg-gray-700 hover:bg-gray-600 font-medium rounded-lg sm:text-sm text-xs sm:px-4 sm:py-2 px-2 text-center"
            >
              Login
            </button>
            <button
              type="button"
              className="hidden md:block text-white bg-[--primary-c] hover:bg-[--secondary-c] font-medium rounded-lg sm:text-sm text-xs sm:px-4 px-2 text-center"
            >
              Sign Up
            </button>
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
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 bg-transparent ${isDropdownOpen ? 'block' : 'hidden'}`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium  md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:mb-0 mb-4 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded md:bg-transparent md:text-[--primary-c] hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300 "
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300 "
                >
                  Mentors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300 "
                >
                  Problems
                </a>
              </li>
              <li>
              <a href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300 md:hidden "
                >
                  Login
                  </a>
              </li>
              <li>
              <a href="#"
                  className="block py-2 px-2 md:p-0 text-gray-900 rounded  md:hover:bg-transparent hover:text-[--secondary-c] hover:border-b-2 md:border-none border-gray-300 md:hidden "
                >
                  Sign Up
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300" />
      </nav>
    );
}

export default Navbar;
