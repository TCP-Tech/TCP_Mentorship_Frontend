import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideBar from "../components/MenteeSideBar";
import ProblemList from "../components/ProblemList";

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
        <div
          className={`${!isSidebarOpen ? "pl-4" : ""} flex flex-col space-y-2 `}
        >
          {/* Kinda Navbar */}
          <div className="flex items-center mt-4">
            {!isSidebarOpen && (
              <FaBars
                className="text-2xl cursor-pointer text-black"
                onClick={toggleSidebar}
              />
            )}
          </div>

          {/* Main Dash */}
          <div
            className={`${
              !isSidebarOpen && "md:space-x-10  p-7  w-screen"
            } flex flex-col   md:flex-row justify-between `}
          >
            <div className="flex flex-col ">
              <div>
                <p className="text-2xl text-black font-semibold pb-2">
                  Hello Mentee1 👋
                </p>
                <p className="text-gray-500">Let's learn something new today</p>
              </div>

              {/* Overview */}
              <div>
                <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">
                  Overview
                </h1>
                <div className="flex md:flex-row  flex-col  flex-wrap  md:space-y-2 space-y-3">
                  <div className="flex flex-col rounded-lg p-4 w-60 bg-red-100 md:mr-2 mt-2">
                    <h1 className="text-lg font-semibold mb-2 text-black">
                      Questions Solved
                    </h1>
                    <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
                      522
                    </h1>
                  </div>
                  <div className="flex flex-col rounded-lg p-4 w-60 bg-green-100  md:mr-2 ">
                    <h1 className="text-lg font-semibold mb-2 text-black">
                      Score
                    </h1>
                    <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
                      325
                    </h1>
                  </div>
                  <div className="flex flex-col rounded-lg p-4 w-60 bg-blue-100  md:mr-2 ">
                    <h1 className="text-lg font-semibold mb-2 text-black">
                      Rating
                    </h1>
                    <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
                      120
                    </h1>
                  </div>
                  <div className="flex flex-col rounded-lg p-4 w-60 bg-violet-100">
                    <h1 className="text-lg font-semibold mb-2 text-black">
                      Streak
                    </h1>
                    <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
                      0
                    </h1>
                  </div>
                </div>
              </div>
              <ProblemList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
