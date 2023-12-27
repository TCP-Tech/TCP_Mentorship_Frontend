import React from "react";

const MenteesCompo = ({ name, problemsSolved, points, id, DP }) => {
  return (
    <div className="flex items-center justify-between   py-3">
      <div className="flex items-center">
        <h1 className="mr-4">{id}</h1>
        <div className="rounded-full overflow-hidden bg-gray-300 w-12 h-12 mr-2"></div>
        <div className="ml-4">
          <h1 className="font-semibold text-black">{name}</h1>
          <h1 className="text-gray-500">Problems Solved: {problemsSolved}</h1>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="font-semibold mb-1 text-black">Points</h1>
        <h1 className="text-black">{points} Points</h1>
      </div>
    </div>
  );
};

export default MenteesCompo;
