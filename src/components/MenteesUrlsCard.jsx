import React from "react";

const MenteesCompo = ({ image, name, codechefID, codeforcesID, leetcodeID, gfgID, hackerrankID, points , solvedQ}) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-shrink-0 mr-4">
            <img className="h-12 object-cover w-12 rounded-full" src={image} alt={`${name}-dp`} />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h1>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Points: {points}</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Ques. Solved: {solvedQ}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="link-container">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-400">CodeChef:</h2>
            <a href={codechefID} className="link truncate hover:underline text-blue-600 text-sm">{codechefID}</a>
          </div>
          <div className="link-container">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-400">CodeForces:</h2>
            <a href={codeforcesID} className="link truncate hover:underline text-blue-600 text-sm">{codeforcesID}</a>
          </div>
          <div className="link-container">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-400">LeetCode:</h2>
            <a href={leetcodeID} className="link truncate hover:underline text-blue-600 text-sm">{leetcodeID}</a>
          </div>
          <div className="link-container">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-400">GeeksForGeeks:</h2>
            <a href={gfgID} className="link truncate hover:underline text-blue-600 text-sm">{gfgID}</a>
          </div>
          <div className="link-container">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-400">HackerRank:</h2>
            <a href={hackerrankID} className="link truncate hover:underline text-blue-600 text-sm">{hackerrankID}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteesCompo;
