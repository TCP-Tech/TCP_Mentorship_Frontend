import React from "react";

const MenteesCompo = ({ name,image, problemsSolved, points, id, DP }) => {
  return (
    <>
     <div className="flex items-center justify-between   py-3">
      <div className="flex items-center">
        <h1 className="mr-2">{id}</h1>
        <div className="rounded-full overflow-hidden bg-gray-300 sm:w-12 sm:h-12 h-8 w-8 mr-2">
          <img
           className="object-cover sm:w-12 sm:h-12 h-8 w-8"
           src={image}
           alt={`${name}-dp`} />
        </div>
        <div className="ml-4">
          <h1 className="font-semibold text-black dark:text-white text-xs sm:text-lg">{name}</h1>
          <h1 className="text-gray-500 text-xs sm:text-lg">Problems Solved: {problemsSolved}</h1>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">Points</h1>
        <h1 className="text-black dark:text-gray-500 text-xs sm:text-lg">{points}</h1>
      </div>
    
    </div>
    <hr className="border-gray-500 border-[1px]"/>
    </>
   
  );
};

export default MenteesCompo;
