import React from 'react';
import tcpName from "../../assets/images/tcpName.svg";
import tcpNameDark from "../../assets/images/tcpNameDark.svg"
import { FaTimes } from 'react-icons/fa';

const MentorSidebar = ({ toggleSidebar, setSelectedOption , selectedOption , options , isSidebarOpen }) => {
  
  const handleOptionClick = (option) => {
    setSelectedOption(option); 
  };

  return (
    <div className='flex flex-col border dark:border-gray-700 text-left h-screen md:relative fixed md:w-72 w-screen bg-transparent backdrop-blur-md text-black'>
      <div className="flex items-center justify-between px-5 py-3">
        <div>
          <img 
            src={tcpName} 
            className="w-44 h-w-28 dark:hidden"
            alt="TCP Logo" 
          />
          <img 
            src={tcpNameDark} 
            className="w-44 h-w-28 dark:block hidden"
            alt="TCP Logo" 
          />
        </div>
     { isSidebarOpen && <div className='rounded-md'>
          <FaTimes className="text-2xl cursor-pointer dark:text-white" onClick={toggleSidebar} />
      </div>}
    </div>
      <div className="px-3 pt-8"> 
        <ul className="text-lg space-y-2 pt-2 font-semibold">
          {
            options.map((option)=>(
              <li 
              className={`hover:bg-primary dark:text-white hover:text-white dark:hover:text-black  ${isSidebarOpen && selectedOption === option ? 'bg-primary text-white dark:text-black' : ''} rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out`}
              onClick={()=>handleOptionClick(option)}
              >{option}</li>)
            )
          }
        </ul>
      </div>
    </div>
  );
};

export default MentorSidebar;
