import React, { useEffect, useState } from "react";
import ProblemList from "./ProblemList";
import Profile from "./Profile";
import { fetchDataFromApi } from "../../utils/api";
import MenteeCodingProfiles from "./MenteeCodingProfiles";

const MenteeDefaultDash = ({ mentee, onMenteeUpdate }) => {
  const [teamData, setTeamData] = useState();

  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi("get-team-mentor", mentee.mentor_id);
      if(data.status_code == 200){
        setTeamData(data);
      }
      else{
        setTeamData(null);
      }
      
    } catch (error) {
      console.error("Error fetching team data:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="px-5 flex flex-col">
      <div className="md:flex md:space-x-5">
        {/* Overview */}
        <div className="md:w-1/2">
          <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pb-4 md:pb-3 md:px-2 font-semibold">
            Overview
          </h1>
          <div className="grid grid-cols-2 md:w-full">
            <div className="flex flex-col rounded-lg p-4 m-2 bg-green-100 md:mr-2">
              <h1 className="md:text-lg font-semibold mb-2 text-black">Your Score</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
                {mentee.score}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2 bg-blue-100  md:mr-2">
              <h1 className="md:text-lg font-semibold mb-2 text-black ">Team Score</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-xl py-2 font-bold text-black">
                {/* {`${(mentee.cumHour_diff / mentee.solvedQ).toFixed(2)}`} */}
                {teamData && teamData.team_data.length>0 && teamData?.team_data[0].team_score}
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
        </div>
        {/* Mentee Coding Profiles */}
        <div className="md:w-1/2">
          {/* <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pb-4 md:pb-1 md:px-2 font-semibold">
            Mentee Coding Profile
          </h1> */}
            <MenteeCodingProfiles 
            mentee={mentee}
            onMenteeUpdate={onMenteeUpdate}
             />
        </div>
      </div>

      {/* Problem List */}
      <div>
        <ProblemList
          mentee={mentee}
          onMenteeUpdate={onMenteeUpdate}
          teamData={teamData}
          setTeamData={setTeamData}
        />
      </div>
    </div>
  );
};

export default MenteeDefaultDash;
