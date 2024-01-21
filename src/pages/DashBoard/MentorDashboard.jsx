import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../../components/DashBoardComponents/SideBar";
import AddProblem from "../../components/DashBoardComponents/AddProblem";
import LeaderBoard from "../../components/LeaderBoard/TeamLeaderBoard";
import MentorDefaultDash from "../../components/DashBoardComponents/MentorDefaultDash";
import MenteeLeaderBoard from "../../components/LeaderBoard/MenteeLeaderBoard";
import Profile from "../../components/DashBoardComponents/MentorProfile";
import ProblemList from "../../components/DashBoardComponents/ProblemList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaChevronUp,
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const options = [
  "Profile",
  "Dashboard",
  "Team Leaderboard",
  "Leaderboard",
  "Assign Problem",
];

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [dropVisible, setdropVisible] = useState(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    toast.success("Sign Out Successful!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    localStorage.removeItem("Mentor");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const handleMouseClick = () => {
    setdropVisible(!dropVisible);
  };
  const handleOptionSelect = (option) => {
    setdropVisible(!dropVisible);
    setSelectedOption(option);
  };
  const renderMainContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <MentorDefaultDash />;
      case "Leaderboard":
        return <MenteeLeaderBoard />;
      case "Team Leaderboard":
        return <LeaderBoard />;
      case "Profile":
        return <Profile />;
      case "Assign Problem":
        return (
          <>
            <AddProblem />
            <ProblemList user="mentor"/>
          </>
        );
      // case "Assigned Problems":
      //   return <ProblemList/>;
      default:
        return <MentorDefaultDash />;
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
      <div className="flex flex-col md:flex-row dark:bg-gray-900">
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
          className={`Right_part border dark:border-none w-full flex flex-col ${
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
            <div className="h-auto py-2 mr-auto pl-4">
              <p className="md:text-2xl text-sm text-black dark:text-white font-semibold md:block hidden">
                Welcome back {mentor.name} 👋
              </p>
              <p className="text-gray-500 md:text-lg text-xs md:block hidden">
                Ready to guide the energetic mentees in their coding and
                development journey?!
              </p>
            </div>
            <div className="flex items-center">
              <div className="cursor-pointer flex justify-center items-center">
                <img
                  className="object-cover md:w-10 md:h-10 w-7 h-7 rounded-full mr-2"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <p className="text-black dark:text-gray-500 md:text-lg text-sm">
                  Hi {mentor.name} !
                </p>
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
                      className="flex items-center px-4 py-3 hover:bg-[var(--primary-c)] dark:text-white hover:text-white dark:hover:text-black duration-200"
                      onClick={() => handleOptionSelect("Profile")}
                    >
                      <FaUserCircle className="mr-2" />
                      Your profile
                    </li>
                    <li
                      className="flex items-center px-4 py-3 hover:bg-[var(--primary-c)] dark:text-white hover:text-white dark:hover:text-black duration-200"
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
          <div className="flex flex-col mt-20 p-5">{renderMainContent()}</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
