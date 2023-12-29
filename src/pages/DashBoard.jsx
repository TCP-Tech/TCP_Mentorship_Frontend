import React, { useEffect, useState } from 'react';
import tcpName from "../assets/images/tcpLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import SideBar from '../components/SideBar';
import TaskTable from '../components/TaskTable';
import Chart from '../components/Chart';

const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
      <div className="flex flex-col  space-x-3 md:flex-row">
      
        {isSidebarOpen && (
          <div>
            <SideBar toggleSidebar={toggleSidebar} />
          </div>
        )}

        {/* Second part */}
        <div className={`${!isSidebarOpen ? 'pl-4' : ''} flex flex-col space-y-2 `}>
          {/* Kinda Navbar */}
          <div className="flex items-center mt-4">
            {!isSidebarOpen && (
              
              <FaBars className="text-2xl cursor-pointer text-black" onClick={toggleSidebar} />
            )}
          </div>

          {/* Main Dash */}
          <div className={`${!isSidebarOpen && 'md:space-x-10  p-7  w-screen'} flex flex-col   md:flex-row justify-between `}>
          <div className="flex flex-col ">
            <div>
              <p className="text-2xl text-black font-semibold pb-2">Hello Mentee1 👋</p>
              <p className="text-gray-500">Let's learn something new today</p>
            </div>

            {/* Overview */}
            <div >
              <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">Overview</h1>
              <div className="flex md:flex-row  flex-col  flex-wrap  md:space-y-2 space-y-3">
              <div className="flex flex-col rounded-lg p-4 w-60 bg-red-100 md:mr-2 mt-2">
                   <h1 className="text-lg font-semibold mb-2 text-black">Questions Solved</h1>
                   <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">522</h1>
              </div>
             <div className="flex flex-col rounded-lg p-4 w-60 bg-green-100  md:mr-2 ">
                 <h1 className="text-lg font-semibold mb-2 text-black">Score</h1>
                 <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">325</h1>
             </div>
            <div className="flex flex-col rounded-lg p-4 w-60 bg-blue-100  md:mr-2 ">
                   <h1 className="text-lg font-semibold mb-2 text-black">Rating</h1>
                  <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">120</h1>
             </div>
            <div className="flex flex-col rounded-lg p-4 w-60 bg-violet-100">
                    <h1 className="text-lg font-semibold mb-2 text-black">Streak</h1>
                    <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">0</h1>
            </div>
              </div>
            </div>
     {/* ################################## Task Table And graph #######################################3*/}
            <div className="flex flex-col md:flex-row  mt-9 border mr-6">
              <TaskTable/>
            </div>
          </div>
 {/* ################################### Profile ############################################### */}
          <div  className=" w-full py-7 border">
         <div className="flex flex-col justify-center items-center space-y-4">
          <div
          className="flex flex-col items-center justify-center space-y-4">
         <h1 className="md:text-3xl text-2xl font-semibold text-black">Profile</h1>
         <div className="mentee-profile-pic border-2 border-primary rounded-full p-2">
            <img
             className="object-cover md:w-28 md:h-28 order-1 w-12 h-12 rounded-full"
             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
             alt='profile-pic'
          />
       </div>
       <div >
            <h1 className="md:text-lg font-semibold text-black">Mentee 1</h1>
            <h1 className="text-gray-400 md:text-lg text-sm">@Mentee</h1>
       </div>
       </div>
       <div  className="flex items-center text-center justify-center px-5 space-x-1 mr-10">
          <h1 className="font-semibold md:text-lg text-sm text-black">Assigned Mentor :</h1>
          <h1 className="font-normal md:text-lg text-sm text-gray-400">Mentor Name</h1>
       </div>
       <div  className="flex items-center justify-center text-center px-5 space-x-1">
          <h1 className="font-semibold md:text-lg text-sm text-black">Achievements :</h1>
          <h1 className="font-normal md:text-lg text-sm text-gray-400">No achievements yet!</h1>
       </div>
       <div className='w-fit h-fit pt-6'>
       <Chart/>
       </div>
      </div>
      </div>
        </div>
       </div>
       </div>
    </>
  );
};

export default DashBoard;
