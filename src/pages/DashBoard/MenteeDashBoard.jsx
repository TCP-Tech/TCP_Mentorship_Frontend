import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "../../components/DashBoardComponents/SideBar";
import AddProblem from "../../components/DashBoardComponents/AddProblem";
import LeaderBoard from "../../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../../components/LeaderBoard/MenteeLeaderBoard";
import MenteeDefaultDash from "../../components/DashBoardComponents/MenteeDefaultDash";
import MenteeProfile from "../../components/DashBoardComponents/MenteeProfile";
import { FaChevronUp, FaChevronDown, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
    
const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Dashboard"); 
  const [dropVisible,setdropVisible] = useState(false);
  const options =["Profile", "Dashboard" , "Team LeaderBoard" , "LeaderBoard"];
  const navigate= useNavigate();
  
  const handleSignOut=()=>{
    navigate("/login")
  }
  const handleMouseEnter = () => {
    setdropVisible(true);
  };
  
  const handleMouseLeave = () => {
    setdropVisible(false);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const renderMainContent = () => {
    switch (selectedOption) {
      case "Dashboard" : 
      return <MenteeDefaultDash/>
      case "LeaderBoard":
        return <MenteeLeaderBoard />;
      case "Assign Problem":
        return <AddProblem />;
      case "Team LeaderBoard":
        return <LeaderBoard />;
      case "Profile" : 
        return <MenteeProfile/>
      default:
        return null;
    }
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); // Update state to hide sidebar for smaller screens
      } else {
        setIsSidebarOpen(true); // Show sidebar for larger screens
      }
    }
    // Initial check on load
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Second part */}
       { isSidebarOpen && <div className="Sidebar z-[999] md:relative absolute">
             <SideBar 
                options={options}
                selectedOption={selectedOption}
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar} 
                setSelectedOption={setSelectedOption} 
             />
        </div>}
        <div className="Right_part border w-full flex flex-col">
        <nav className="w-full flex items-center justify-between shadow-md py-2 px-5">
            {!isSidebarOpen && (
              <FaBars
                className="text-2xl cursor-pointer text-black"
                onClick={toggleSidebar}
              />
            )}
              <div>
                <p className="md:text-2xl text-sm text-black font-semibold pb-2 md:block hidden">
                  Hello Mentee👋
                </p>
                <p className="text-gray-500 md:text-lg text-xs md:block hidden">Let's learn something new today</p>
              </div>
              <div className="flex items-center "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
              <div className="cursor-pointer flex justify-center items-center gap-2">
                <img
                  className="object-cover md:w-10 md:h-10 w-7 h-7 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <p className="text-black md:text-lg text-sm">Hi! Mentee</p>
                <div className="text-black w-8 h-8 flex justify-center items-center ">
                  {dropVisible ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {dropVisible && (
                <div
                  className="absolute right-0 z-30 mt-12 bg-white dark:bg-gray-800 text-white rounded-md shadow-xl cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white dark:bg-gray-800 text-white rounded-md shadow-xl cursor-pointer">
                <li className="flex items-center px-4 py-3 hover:bg-gray-700" onClick={() => handleOptionSelect("Profile")}>
                  <FaUserCircle className="mr-2" />
                  Your profile
                </li>
                <li className="flex items-center px-4 py-3 hover:bg-gray-700" onClick={handleSignOut}>
                  <FaSignOutAlt className="mr-2" />
                  Sign Out
                </li>
              </div>
              </div>
            )}
          </div>
        </nav>
        {/* Main section starts */}
        <div className="flex flex-col ">
          {renderMainContent()}
          </div>
       </div>
       </div>
    </>
  );
};

export default DashBoard;
