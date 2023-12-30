import React, { useState } from 'react';
import tcpName from "../assets/images/tcpLogo.png";
import { FaTimes } from 'react-icons/fa';

const MentorSidebar = ({ toggleSidebar, setSelectedOption , options }) => {
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option in the parent component
  };

  return (
    <div className='flex flex-col border text-left h-screen md:relative absolute md:w-fit w-screen bg-white text-black'>
<div className="flex items-center justify-between px-5">
        <div>
          <img 
            src={tcpName} 
            className="md:w-14 md:h-w-14 w-14 h-w-14"
            alt="TCP Logo" 
          />
        </div>
        <div>
          <FaTimes className="text-2xl cursor-pointer text-black" onClick={toggleSidebar} />
        </div>
      </div>
      <div className="px-3 pt-8"> 
        <ul className="text-lg space-y-5 pt-2 font-semibold">
          {
            options.map((option)=>(
              <li 
              className="hover:bg-primary hover:text-white rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out"
              onClick={()=>handleOptionClick(option)}
              >{option}</li>)
            )
          }
       
    
          {/* Add similar onClick handlers for other list items */}
        </ul>
      </div>
    </div>
  );
};

export default MentorSidebar;
