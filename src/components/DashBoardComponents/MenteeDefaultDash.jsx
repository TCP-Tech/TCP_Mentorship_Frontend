import React, {useState} from "react";
import ProblemList from "./ProblemList";
import Profile from "./Profile";

const MenteeDefaultDash = ({ toggleConfetti }) => {

  const [mentee] = useState(JSON.parse(localStorage.getItem("Mentee")));

  return (
    <div className="p-5 ">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex md:flex-row flex-col flex-wrap items-center justify-start w-[100%] md:w-[50%]">
          <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-green-100  md:mr-2">
            <h1 className="text-lg font-semibold mb-2 text-black">Score</h1>
            <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
              {mentee.score}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-blue-100  md:mr-2">
            <h1 className="text-lg font-semibold mb-2 text-black ">Avg time (mins)</h1>
            <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
              {`${(mentee.cumHour_diff / mentee.solvedQ).toFixed(2)}`}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2 w-60 md:w-64 bg-red-100 md:mr-2 mt-2">
            <h1 className="text-lg font-semibold mb-2 text-black ">
              Questions Solved
            </h1>
            <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
              {mentee.solvedQ}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-violet-100  md:mr-2">
            <h1 className="text-lg font-semibold mb-2 text-black ">Total Questions</h1>
            <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
              {mentee.total_q}
            </h1>
          </div>
        </div>
        <div className=" w-[100%] md:w-[50%] ">
          <Profile mode="mentee" />
        </div>
      </div>
      <div>
      <ProblemList toggleConfetti={toggleConfetti} />
      </div>
    </div>
  );
};

export default MenteeDefaultDash;
