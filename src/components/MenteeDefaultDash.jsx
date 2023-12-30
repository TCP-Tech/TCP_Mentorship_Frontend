import React from 'react'
import ProblemList from './ProblemList'

const MenteeDefaultDash = () => {
  return (
    <div >
    <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">Overview</h1>
    <div className="flex md:flex-row  flex-col  flex-wrap  md:space-y-2 space-y-3">
    <div className="flex flex-col rounded-lg p-4 w-60 bg-red-100 md:mr-2 mt-2">
         <h1 className="text-lg font-semibold mb-2 text-black">Questions Solved</h1>
         <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">522</h1>
    </div>
   <div className="flex flex-col rounded-lg p-4 w-60 bg-green-100  md:mr-2 ">
       <h1 className="text-lg font-semibold mb-2 text-black">Score</h1>
       <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">325</h1>
   </div>
  <div className="flex flex-col rounded-lg p-4 w-60 bg-blue-100  md:mr-2 ">
         <h1 className="text-lg font-semibold mb-2 text-black">Rating</h1>
        <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">120</h1>
   </div>
  <div className="flex flex-col rounded-lg p-4 w-60 bg-violet-100">
          <h1 className="text-lg font-semibold mb-2 text-black">Streak</h1>
          <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">0</h1>
  </div>
    </div>
    <ProblemList/>
  </div>
  )
}

export default MenteeDefaultDash