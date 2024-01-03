import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../../components/DashBoardComponents/SideBar";
import AddProblem from "../../components/DashBoardComponents/AddProblem";
import LeaderBoard from "../../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../../components/LeaderBoard/MenteeLeaderBoard";
import MenteeDefaultDash from "../../components/DashBoardComponents/MenteeDefaultDash";
import MenteeProfile from "../../components/DashBoardComponents/MenteeProfile";
import {
  FaChevronUp,
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Confetti from "../../utils/Confetti";

const options = ["Profile", "Dashboard", "Team Leaderboard", "Leaderboard"];

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [dropVisible, setdropVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };
  const handleMouseClick = () => {
    setdropVisible(!dropVisible);
  };
  const handleOptionSelect = (option) => {
    setdropVisible(!dropVisible);
    setSelectedOption(option);
  };
  const toggleConfetti = () => {
    setShowConfetti(true);
  };
  const renderMainContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <MenteeDefaultDash toggleConfetti={toggleConfetti} />;
      case "Leaderboard":
        return <MenteeLeaderBoard />;
      case "Assign Problem":
        return <AddProblem />;
      case "Team Leaderboard":
        return <LeaderBoard />;
      case "Profile":
        return <MenteeProfile />;
      default:
        return null;
    }
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); 
      } else {
        setIsSidebarOpen(true); 
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg:white dark:bg-gray-900">
         {showConfetti && <Confetti  onComplete={() => setShowConfetti(false)}/>}
        {/* Second part */}
        {isSidebarOpen && (
          <div className="Sidebar z-[9999] md:fixed absolute">
            <SideBar
              options={options}
              selectedOption={selectedOption}
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              setSelectedOption={setSelectedOption}
            />
          </div>
        )}
        <div
          className={`Right_part  w-full flex flex-col ${
            isSidebarOpen && "md:ml-72"
          }`}
        >
          <nav
            className={`w-full z-[999] flex fixed items-center justify-between shadow-md py-2 px-5  ${
              isSidebarOpen && "pr-80"
            } bg-transparent backdrop-blur-md`}
          >
            {!isSidebarOpen && (
              <FaBars
                className="text-2xl cursor-pointer text-black dark:text-white"
                onClick={toggleSidebar}
              />
            )}
            <div className="h-auto py-2 mr-auto pl-4 ">
              <p className="md:text-2xl text-sm  font-semibold md:block hidden text-black dark:text-white">
                Welcome Back!👋
              </p>
              <p className="text-gray-500 md:text-lg text-xs md:block hidden">
                Let's learn something new today.
              </p>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer flex justify-center items-center">
                <img
                  className="object-cover md:w-10 md:h-10 w-7 h-7 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <p className="text-black dark:text-gray-500 md:text-lg text-sm">Hi Rishabh!</p>
                <div
                  onClick={handleMouseClick}
                  className="text-black dark:text-gray-500 w-8 h-8 flex justify-center items-center "
                >
                  {dropVisible ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {dropVisible && (
                <div className="absolute right-0 z-[500] mt-8 bg-white  dark:bg-gray-800 text-black rounded-md shadow-xl cursor-pointer duration-200">
                  <div
                    className={`absolute  ${
                      isSidebarOpen ? "right-80" : "right-2"
                    } z-20 w-48 mt-2 origin-top-right bg-white dark:bg-gray-800 text-black rounded-md duration-100 shadow-xl cursor-pointer`}
                  >
                    <li
                      className="flex items-center px-4 py-3 hover:bg-[var(--primary-c)] hover:text-white duration-200"
                      onClick={() => handleOptionSelect("Profile")}
                    >
                      <FaUserCircle className="mr-2" />
                      Your profile
                    </li>
                    <li
                      className="flex items-center px-4 py-3 hover:bg-[var(--primary-c)] hover:text-white duration-200"
                      onClick={handleSignOut}
                    >
                      <FaSignOutAlt className="mr-2" />
                      Sign Out
                    </li>
                  </div>
                </div>
              )}
            </div>
          </nav>
          {/* Main section starts */}
          <div className="flex flex-col mt-20">{renderMainContent()}</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
