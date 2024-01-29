import React, {useEffect, useState} from "react";
import ProblemList from "./ProblemList";
import Profile from "./Profile";
import { fetchDataFromApi } from "../../utils/api";

const MenteeDefaultDash = ({ toggleConfetti,mentee,onMenteeUpdate }) => {
  const [teamData, setTeamData] = useState();
  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi( "get-team-mentee",mentee.id);
      setTeamData(data);
      
    } catch (error) {
      console.error("Error fetching team data:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="px-5 flex flex-col">
      <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pb-4 md:pb-1 md:px-2 font-semibold">
        Overview
      </h1>
      <div className="flex flex-col md:flex-row space-y-3 justify-center items-center">
        <div className="grid grid-cols-2 md:w-[50%]">
          <div className="flex flex-col rounded-lg p-4 m-2 bg-green-100 md:mr-2">
            <h1 className="md:text-lg font-semibold mb-2 text-black">Score</h1>
            <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
              {mentee.score}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2 bg-blue-100  md:mr-2">
            <h1 className="md:text-lg font-semibold mb-2 text-black ">Avg. time (mins)</h1>
            <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
              {`${(mentee.cumHour_diff / mentee.solvedQ).toFixed(2)}`}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2 bg-red-100 md:mr-2 mt-2">
            <h1 className="md:text-lg font-semibold mb-2 text-black ">
              Questions Solved
            </h1>
            <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
              {mentee.solvedQ}
            </h1>
          </div>
          <div className="flex flex-col rounded-lg p-4 m-2    bg-violet-100  md:mr-2">
            <h1 className="md:text-lg font-semibold mb-2 text-black ">Total Questions</h1>
            <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
              {mentee.total_q}
            </h1>
          </div>
        </div>
        <div className=" w-[100%] md:w-[50%] ">
        <Profile mode="mentee" teamData={teamData} />
        </div>
      </div>
      <div>
      <ProblemList
       mentee={mentee} 
       onMenteeUpdate={onMenteeUpdate} 
       teamData={teamData}
       setTeamData={setTeamData} />
      </div>
    </div>
  );
};

export default MenteeDefaultDash;
