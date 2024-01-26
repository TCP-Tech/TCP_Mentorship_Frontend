import React, { useEffect } from "react";
import MenteesCompo from "../MenteesCard";
import { fetchDataFromApi } from '../../utils/api';
import { mentees } from "../../data/MenteeData";
import pallete from "../../assets/images/starPallete.png";
import teamimage from "../../assets/images/team.jpg"

const IndividualTeamLeaderBoard = ({ teamName,menteeData}) => {

    useEffect(() => {
      
      menteeData.sort(function (mentee1, mentee2) {
       if(  mentee2.score == mentee1.score){
        return mentee2.cumHour_diff - mentee1.cumHour_diff;
       }
       else{
        return mentee2.score - mentee1.score;
       }
       });
       console.log(menteeData)
      
    }, [])
    

  return (
    <div className="flex flex-col p-4 overflow-hidden">
      <div className="team-profile flex flex-col sm:flex-row items-center mb-4 space-x-6">
        <div className="relative mb-4 sm:mb-0">
          <div className="rounded-full overflow-hidden bg-gray-300 w-28 h-28">
            {/* Team DP */}
            <img src={teamimage} alt="" />
          </div>
        </div>
        <div className="team-profile-name flex flex-col text-center ">
          <h1 className="font-bold text-3xl text-black ">{teamName}</h1>
          <div className="flex items-center">
            <img src={pallete} alt="Palette" className="w-52 h-28" />
            <h1 className="absolute ml-16 mb-3 text-xl ">Level 5</h1>
          </div>
          <h1 className="text-xl text-black relative bottom-7 ">⭐⭐⭐⭐</h1>
        </div>
      </div>
      <div className="team-profile-achievements mb-4">
        <h1 className="font-bold mb-2 text-black md:text-2xl text-xl">
          Achievements
        </h1>
        <div className="md:space-x-3 my-5">
          <button className="bg-blue-500 text-white md:px-4 md:py-1 my-2 rounded-full">
            Achievement1
          </button>
          <button className="bg-green-500 text-white md:px-4 md:py-1 my-2 rounded-full">
            Achievement2
          </button>
          <button className="bg-red-500 text-white md:px-4 md:py-1 my-2 rounded-full">
            Achievement3
          </button>
        </div>
      </div>
      <h1 className="font-bold mb-2 text-black md:text-2xl text-xl">
        Team Members
      </h1>
      <div className="team-profile-members overflow-y-scroll h-[70vh]">
        {menteeData.map((mentee) => (
          <MenteesCompo
            key={mentee.id}
            name={mentee.name}
            image={mentee.image}
            problemsSolved={mentee.solvedQ}
            points={mentee.score}
            id={mentee.id}
            // dp={}
          />
        ))}
      </div>
    </div>
  );
};

export default IndividualTeamLeaderBoard;
