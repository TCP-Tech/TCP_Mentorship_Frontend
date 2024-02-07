import React from "react";

const MenteesCompo = ({  image, name ,codechefID ,codeforcesID ,leetcodeID ,gfgID ,hackerrankID ,points }) => {
  return (
    <>
     <div className="flex flex-col items-center justify-between   py-5">
      <div className="flex items-center mb-2">
        <div className="rounded-full overflow-hidden bg-gray-300 sm:w-12 sm:h-12 h-8 w-8 mr-2">
          <img
           className="object-cover sm:w-12 sm:h-12 h-8 w-8"
           src={image}
           alt={`${name}-dp`} />
        </div>
        <div className="ml-4">
          <h1 className="font-semibold text-black dark:text-white text-xs sm:text-lg">{name}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        
      <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">Points</h1>
        <h1 className="text-black mb-2 dark:text-gray-500 text-xs sm:text-lg">{points}</h1>
      <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">CodeChef :</h1>
        <a href={codechefID}><h1 className="mb-2 text-black dark:text-gray-500 text-xs sm:text-lg">{codechefID}</h1></a>
        <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">CodeForces: </h1>
        <a href={codeforcesID}><h1 className="mb-2 text-black dark:text-gray-500 text-xs sm:text-lg">{codeforcesID}</h1></a>
        <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">LeetCode: </h1>
        <a href={leetcodeID}><h1 className="mb-2 text-black dark:text-gray-500 text-xs sm:text-lg">{leetcodeID}</h1></a>
        <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">GeeksForGeeks: </h1>
        <a href={gfgID}><h1 className="mb-2 text-black dark:text-gray-500 text-xs sm:text-lg">{gfgID}</h1></a>
        <h1 className="font-semibold mb-1 text-black dark:text-white text-xs sm:text-lg">Hackerrank: </h1>
        <a href={hackerrankID}><h1 className="mb-2 text-black dark:text-gray-500 text-xs sm:text-lg">{hackerrankID}</h1></a>
      </div>
    
    </div>
    <hr className="border-gray-500 border-[1px]"/>
    </>
   
  );
};

export default MenteesCompo;
