import React, { useState } from 'react';
import tcpName from "../assets/images/tcpLogo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const SideBar = ({ toggleSidebar }) => {
    // const[activeMenu,setActiveMenu]=useState("Dash")
  return (
    <div className='flex flex-col text-left h-screen absolute md:w-fit w-screen bg-white text-black'>
      <div className="flex items-center justify-between px-5">
        <div>
          <img 
            src={tcpName} 
            className="md:w-14 md:h-w-14 w-14 h-w-14"
            alt="TCP Logo" // Don't forget alt for accessibility
          />
        </div>
        <div>
          <FaTimes className="text-2xl cursor-pointer text-black" onClick={toggleSidebar} />
        </div>
      </div>
      {/* Apply padding-left to the list container */}
      <div className="px-3 pt-8"> 
        <ul className="text-lg space-y-5 pt-2 font-semibold"> {/* Adjusted padding and removed unnecessary px-10 */}
          <li className="hover:bg-primary hover:text-white rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out">Dashboard</li>
          <li className="hover:bg-primary hover:text-white rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out">LeaderBoard</li>
          <li className="hover:bg-primary hover:text-white rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out">Team LeaderBoard</li>
          <li className="hover:bg-primary hover:text-white rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out">Problems</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
