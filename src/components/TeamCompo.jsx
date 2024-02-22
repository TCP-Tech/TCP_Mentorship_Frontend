import React from "react";

const TeamCompo = ({ teamName, teamLeaderName, teamPoints, id, teamDp }) => {
  return (
    <div className="flex items-center justify-between py-3 ">
      <div className="flex items-center">
        <h1 className="mr-4 dark:text-gray-400 text-gray-600 ">{id}</h1>
        <div className="rounded-full overflow-hidden dark:bg-gray-800 w-12 h-12 mr-2"></div>
        <div className="cursor-pointer">
          <h1 className="md:font-semibold text-black dark:text-white md:text-lg max-w-[100px] truncate">
            {teamName}
          </h1>
          <h2 className="dark:text-gray-400 text-gray-600 text-sm">
            {teamLeaderName}
          </h2>
        </div>
      </div>
      <h1 className="md:font-semibold text-black dark:text-white text-sm md:text-lg">
        {teamPoints} Points
      </h1>
    </div>
  );
};

export default TeamCompo;
