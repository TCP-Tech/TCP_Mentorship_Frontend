import React,{useState} from "react";
import Profile from "./Profile";
const MentorDefaultDash = () => {

  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  return (
    <>
      <div>
        <h1 className="text-3xl pt-7 pb-5  text-black dark:text-white font-semibold">
          Overview
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex md:flex-row flex-col flex-wrap items-center justify-start w-[100%] md:w-[50%]">
            <div className="flex flex-col rounded-lg p-4 m-2 w-60 md:w-64 bg-red-100 md:mr-2 mt-2">
              <h1 className="text-lg font-semibold mb-2 text-black">
                Questions Assigned
              </h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
              {mentor.total_q}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-green-100  md:mr-2">
              <h1 className="text-lg font-semibold mb-2 text-black">
                Team Score
              </h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
              {mentor.score}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-blue-100  md:mr-2">
              <h1 className="text-lg font-semibold mb-2 text-black">
                Team Ranking
              </h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
                120
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2  w-60 md:w-64 bg-violet-100  md:mr-2">
              <h1 className="text-lg font-semibold mb-2 text-black">Streak</h1>
              <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
                0
              </h1>
            </div>
          </div>
          <div className=" w-[100%] md:w-[50%] flex justify-center items-center">
            <Profile mode="mentor" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl pt-7 pb-5  text-black dark:text-white font-semibold">
          Problem Stats
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg  text-black font-semibold mb-2">Easy</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-black text-2xl py-2 font-bold ">
              {mentor.Qlevel_count["Easy"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">Medium</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.Qlevel_count["Medium"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
              <h1 className="text-lg text-black font-semibold mb-2">Hard</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {mentor.Qlevel_count["Hard"] || 'N/A'}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-black  dark:text-white pt-7 pb-5 font-semibold">
          Topics covered
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
          <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg text-black font-semibold mb-2">Arrays</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Array"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">
              Backtracking
              </h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Backtracking"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
              <h1 className="text-lg text-black font-semibold mb-2">
              Binary Trees
              </h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["BinaryTrees"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg text-black font-semibold mb-2">Bit Manipulation</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["BitManipulation"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">BST</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["BST"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
              <h1 className="text-lg text-black font-semibold mb-2">Dynammic Programming</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["DynammicProgramming"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg text-black font-semibold mb-2">Graphs</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Graphs"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">Greedy</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Greedy"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
              <h1 className="text-lg text-black font-semibold mb-2">Heap</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Heap"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg text-black font-semibold mb-2">Linked List</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["LinkedList"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">Matrix</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Matrix"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
              <h1 className="text-lg text-black font-semibold mb-2">Stacks & Queues</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Stacks&Queues"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100">
              <h1 className="text-lg text-black font-semibold mb-2">Strings</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["String"] || 'N/A'}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
              <h1 className="text-lg text-black font-semibold mb-2">Trie</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {mentor.topic_count["Trie"] || 'N/A'}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDefaultDash;
