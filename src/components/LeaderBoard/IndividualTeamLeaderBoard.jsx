import React from "react";
import MenteesCompo from "../MenteesCard";
import { fetchDataFromApi } from '../../utils/api';
import { mentees } from "../../data/MenteeData";
import pallete from "../../assets/images/starPallete.png";

const IndividualTeamLeaderBoard = ({ teamName }) => {

  const sortedMentees = mentees.sort((a, b) => {
    // Compare points
    if (b.pointsScored !== a.pointsScored) {
      return b.pointsScored - a.pointsScored;
    }
  
    // If points are equal, compare problemsSolved
    return b.problemsSolved - a.problemsSolved;
  });

  // fetchDataFromApi('/getTeams', '')
  // .then(data => {
  //   // Handle the data received from the API
  //   console.log(data);
  // })
  // .catch(error => {
  //   // Handle errors
  //   console.error('Error fetching data:', error);
  // });

  return (
    <div className="flex flex-col p-4 overflow-hidden">
      <div className="team-profile flex flex-col sm:flex-row items-center mb-4 space-x-6">
        <div className="relative mb-4 sm:mb-0">
          <div className="rounded-full overflow-hidden bg-gray-300 w-28 h-28">
            {/* Team DP */}
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
        {sortedMentees.map((mentee) => (
          <MenteesCompo
            key={mentee.id}
            name={mentee.name}
            problemsSolved={mentee.problemsSolved}
            points={mentee.pointsScored}
            id={mentee.id}
            // dp={}
          />
        ))}
      </div>
    </div>
  );
};

export default IndividualTeamLeaderBoard;
