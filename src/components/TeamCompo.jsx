import React from "react";

const TeamCompo = ({ teamName, teamLeaderName, teamPoints, id, teamDp }) => {
  return (
    <div className="flex items-center justify-between  py-3 ">
      <div className="flex items-center">
        <h1 className="mr-4">{id}</h1>
        <div className="rounded-full overflow-hidden bg-gray-300 w-12 h-12 mr-2"></div>
        <div className="cursor-pointer">
          <h1 className="font-semibold">{teamName}</h1>
          <h2 className="text-gray-500 text-sm">{teamLeaderName}</h2>
        </div>
      </div>
      <h1 className="font-semibold">{teamPoints} Points</h1>
    </div>
  );
};

export default TeamCompo;
