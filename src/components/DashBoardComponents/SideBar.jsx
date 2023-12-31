import React from 'react';
import tcpName from "../../assets/images/tcpName.svg";
import { FaTimes } from 'react-icons/fa';

const MentorSidebar = ({ toggleSidebar, setSelectedOption , selectedOption , options , isSidebarOpen }) => {
  
  const handleOptionClick = (option) => {
    setSelectedOption(option); 
  };

  return (
    <div className='flex flex-col border text-left h-screen md:relative absolute md:w-72 w-screen bg-white text-black'>
      <div className="flex items-center justify-between px-5 py-3">
        <div>
          <img 
            src={tcpName} 
            className="w-36 h-w-28"
            alt="TCP Logo" 
          />
        </div>
     { isSidebarOpen && <div className='border-2 border-black p-3 rounded-md'>
          <FaTimes className="text-2xl cursor-pointer text-primary " onClick={toggleSidebar} />
      </div>}
    </div>
      <div className="px-3 pt-8"> 
        <ul className="text-lg space-y-5 pt-2 font-semibold">
          {
            options.map((option)=>(
              <li 
              className={`hover:bg-primary hover:text-white ${isSidebarOpen && selectedOption === option ? 'bg-primary text-white' : ''} rounded-md px-5 py-2 cursor-pointer transition duration-300 ease-in-out`}
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
