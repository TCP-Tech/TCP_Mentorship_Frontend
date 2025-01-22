import React,{useEffect, useState} from "react";
import MenteeCodingProfiles from "./MenteeCodingProfiles";
const MentorDefaultDash = ({onMentorUpdate}) => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const Level=(mentor.Qlevel_count);
  const Topic=(mentor.topic_count);
  return (
    <>
      <div className="flex flex-col md:flex-row md:-mt-4">
  {/* Overview */}
  <div className="flex flex-col md:w-1/2 p-4">
    <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pb-5 md:px-2  font-semibold">
      Overview
    </h1>
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col rounded-lg p-4 bg-red-100">
        <h1 className="text-lg font-semibold mb-2 text-black">Questions Assigned</h1>
        <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
          {mentor?.total_q}
        </h1>
      </div>
      <div className="flex flex-col rounded-lg p-4 bg-green-100">
        <h1 className="text-lg font-semibold mb-2 text-black">Team Score</h1>
        <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
          { mentor?.score }
        </h1>
      </div>
      <div className="flex flex-col rounded-lg p-4 bg-blue-100">
        <h1 className="text-lg font-semibold mb-2 text-black">Team Ranking</h1>
        <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
          {mentor?.Mentorteam?.team_rank}
        </h1>
      </div>
      <div className="flex flex-col rounded-lg p-4 bg-violet-100">
        <h1 className="text-lg font-semibold mb-2 text-black">Total Mentees</h1>
        <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
          {mentor?.Mentorteam?.team_members && mentor?.Mentorteam?.team_members.length}
        </h1>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 p-4">
          <MenteeCodingProfiles 
          mentor={mentor}
          onMentorUpdate={onMentorUpdate}/>
    </div>
 </div>

      <div>
      <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pt-10 pb-5 md:px-2  font-semibold">
          Problem Stats
        </h1>
        <div className="flex flex-col">
        <div className="md:flex md:flex-wrap grid grid-cols-2  ">
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg  text-black font-semibold mb-2">Easy</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-black text-2xl py-2 font-bold ">
              {Level['Easy'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Medium</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {Level['Medium'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Hard</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {Level['Hard'] || 0}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pt-12 pb-5 md:px-2  font-semibold">
          Topics covered
        </h1>
        <div className="flex flex-col">
          <div className=" md:flex md:flex-wrap grid grid-cols-2  ">
          <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Arrays</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {Topic['Array'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">
              Backtracking
              </h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Backtracking'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">
              Binary Trees
              </h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BinaryTrees'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Bit Manipulation</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BitManipulation'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">BST</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BST'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">DP</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['DynamicProgramming'] || 0}

              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Graphs</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Graphs'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Greedy</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Greedy'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Heap</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
            
              {Topic['Heap'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Linked List</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
             
              {Topic['LinkedList'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Matrix</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Matrix'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Stack</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Stack'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Queue</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Queue'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Strings</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
             
              {Topic['String'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Trie</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
             
              {Topic['Trie'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Hash Table</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['HashTable'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Recursion</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
             
              {Topic['Recursion'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Math</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
             
              {Topic['Math'] || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDefaultDash;
