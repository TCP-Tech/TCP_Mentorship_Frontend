import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import tcpName from "../assets/images/tcpLogo.png";

const DashBoard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div
    className="text-black grid grid-cols-12 h-screen"
    > 
        <div 
        className="col-span-2 border border-black w-full ">
            <div className='flex flex-col items-center text-left'>
                <div>
                <img 
                src={tcpName} 
                className="md:w-28 md:h-28 w-28 h-28 " />
                </div>
                <div
                className="">
                  <ul
                   className="text-lg space-y-5 pt-8 font-semibold">
                    <li className="hover:bg-primary hover:text-white rounded-md px-4 py-2 cursor-pointer transition duration-300 ease-in-out">Dashboard</li>
                    <li className="hover:bg-primary hover:text-white rounded-md px-4 py-2 cursor-pointer transition duration-300 ease-in-out">LeaderBoard</li>
                    <li className="hover:bg-primary hover:text-white rounded-md px-4 py-2 cursor-pointer transition duration-300 ease-in-out">Team LeaderBoard</li>
                    <li className="hover:bg-primary hover:text-white rounded-md px-4 py-2 cursor-pointer transition duration-300 ease-in-out">Problems</li>
                  </ul>
                </div>
            </div>
        </div>
        <div className="col-span-7 border border-black px-8 py-6 w-full">
  <div className="flex flex-col ">
    <div>
      <p className="text-2xl font-semibold pb-2">Hello Mentee1 👋</p>
      <p className="text-gray-500">Let's learn something new today</p>
    </div>

    {/*###################### OVERVIEW ######################### */}
    <div>
      <h1 className="text-3xl pt-7 pb-5 font-semibold">Overview</h1>
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col rounded-lg p-4 w-60 bg-red-100 ">
          <h1 className="text-lg font-semibold mb-2">Questions Solved</h1>
          <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold ">522</h1>
        </div>
        <div className="flex flex-col rounded-lg p-4 w-60 bg-green-100">
          <h1 className="text-lg font-semibold mb-2">Score</h1>
          <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold">325</h1>
        </div>
        <div className="flex flex-col rounded-lg p-4 w-60 bg-blue-100">
          <h1 className="text-lg font-semibold mb-2">Rating</h1>
          <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold">120</h1>
        </div>
        <div className="flex flex-col rounded-lg p-4 w-60 bg-violet-100">
          <h1 className="text-lg font-semibold mb-2">Streak</h1>
          <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold">0</h1>
        </div>
      </div>
    </div>
  </div>
</div>

        <div 
        className="col-span-3 border border-black w-full py-7">
            <div
            className="flex flex-col space-y-4">
                <div
                className="flex flex-col items-center space-y-4">
               <h1 className="text-3xl font-semibold">Profile</h1>
               <div className="mentee-profile-pic border-2 border-primary rounded-full p-2">
                  <img
                   className="object-cover w-28 h-28 rounded-full"
                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                   alt='profile-pic'
                />
             </div>
             <div >
                  <h1 className="text-lg font-semibold">Mentee 1</h1>
                  <h1>@Mentee</h1>
             </div>
             </div>
             <div  className="flex px-5 space-x-1">
             <h1 className="font-semibold text-lg ">Assigned Mentor :</h1>
             <h1 className="font-normal text-lg">Mentor Name</h1>
             </div>
             <div  className="flex px-5 space-x-1">
             <h1 className="font-semibold text-lg ">Achievements :</h1>
             <h1 className="font-normal text-lg">No achievements yet!</h1>
             </div>
             <div>
      {/* <div className="bg-white rounded-lg p-4 shadow-lg"> */}
            <div className="w-full pl-9">
              <Calendar
                onChange={onChange}
                value={date}
                calendarType="US"
                minDetail="month"
                className="rounded-lg shadow-md "
              />
            </div>
          {/* </div> */}
    </div>
            
            </div>
        </div>
    </div>
  )
}

export default DashBoard