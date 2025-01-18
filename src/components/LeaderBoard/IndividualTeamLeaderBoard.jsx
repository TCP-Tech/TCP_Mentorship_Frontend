import React, { useEffect } from "react";
import MenteesCompo from "../MenteesCard";
import { fetchDataFromApi } from '../../utils/api';
import { mentees } from "../../data/MenteeData";
import pallete from "../../assets/images/starPallete.png";
import teamimage from "../../assets/images/team.jpg"


const IndividualTeamLeaderBoard = ({ teamName,menteeData,teamPoints}) => {

    useEffect(() => {
      
      menteeData?.sort(function (mentee1, mentee2) {
      //   if(  mentee2?.score === mentee1?.score){
      //     if(mentee2?.solvedQ === mentee1?.solvedQ){
      //       return mentee1?.cumHour_diff - mentee2?.cumHour_diff
      //     }
      //     else{
      //       return mentee2?.solvedQ - mentee1?.solvedQ;
      //     }
      //   }
      //   else{
      //     return mentee2?.score - mentee1?.score;
      //   }
      return mentee1?.Mentee_rank - mentee2?.Mentee_rank;
       });
      //  console.log(menteeData)
      
    }, [])
    

  return (
    <div className="flex flex-col p-4 overflow-hidden dark:bg-gray-800 bg-gray-100 ">
      <div className="team-profile flex flex-col sm:flex-row items-center mb-4 space-x-6">
        <div className="relative mb-4 sm:mb-0">
          <div className="rounded-full overflow-hidden bg-gray-300 w-28 h-28">
            {/* Team DP */}
            <img 
            src={teamimage} 
            className="object-cover w-28 h-28"
            alt={`${teamName}-dp`} />
          </div>
        </div>
        <div className="team-profile-name flex flex-col md:items-start items-center">
          <div>
          <h1 className="font-bold md:text-3xl text-sm text-black dark:text-white md:pr-8">{teamName}</h1>
          </div>
          <div>
          <h1 className=" md:text-xl text-black dark:text-white pr-12 pt-2">Score : {teamPoints}</h1>
          </div>
        </div>
      </div>
      <h1 className="font-bold mb-2 md:text-left text-center text-black md:text-2xl text-xl dark:text-white mt-8">
        Team Members
      </h1>
      <div className="team-profile-members overflow-y-scroll h-[35vh]">
        {menteeData.map((mentee , index) => (
          <MenteesCompo
            key={mentee.id}
            name={mentee.name}
            image={mentee.image}
            problemsSolved={mentee.solvedQ}
            points={mentee.score}
            id={index+1}
            // dp={}
          />
        ))}
      </div>
    </div>
  );
};

export default IndividualTeamLeaderBoard;
