import React from 'react'

const MentorDefaultDash = () => {
  return (
    <>
    <div>
    <h1 className="text-3xl pt-7 pb-5  text-black font-semibold">Overview</h1>
    <div className="flex flex-wrap space-x-8">
      <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100 ">
        <h1 className="text-lg font-semibold  text-black mb-2">Questions Assigned</h1>
        <h1 className="border-b-4 w-1/2 border-red-500  text-black text-2xl py-2 font-bold ">522</h1>
      </div>
      <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
        <h1 className="text-lg font-semibold  text-black mb-2">Team Score</h1>
        <h1 className="border-b-4 w-1/2 border-green-500  text-black text-2xl py-2 font-bold">325</h1>
      </div>
      <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
        <h1 className="text-lg font-semibold  text-black mb-2">Team Ranking</h1>
        <h1 className="border-b-4 w-1/2 border-blue-500  text-black text-2xl py-2 font-bold">7</h1>
      </div>
      <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-violet-100">
        <h1 className="text-lg font-semibold  text-black mb-2">Streak</h1>
        <h1 className="border-b-4 w-1/2 border-violet-500  text-black text-2xl py-2 font-bold">0</h1>
      </div>
    </div>
  </div>
<div>
    <h1 className="text-3xl pt-7 pb-5  text-black font-semibold">Problem Stats</h1>
    <div className="flex flex-col">
      <div className="flex flex-wrap space-x-8">
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100 ">
          <h1 className="text-lg  text-black font-semibold mb-2">Easy</h1>
          <h1 className="border-b-4 w-1/2 border-red-500 text-black text-2xl py-2 font-bold ">222</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
          <h1 className="text-lg text-black font-semibold mb-2">Medium</h1>
          <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">175</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
          <h1 className="text-lg text-black font-semibold mb-2">Hard</h1>
          <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">125</h1>
        </div>
      </div>
    </div>
    <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">Topics covered</h1>
    <div className="flex flex-col">
      <div className="flex flex-wrap space-x-8">
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100 ">
          <h1 className="text-lg text-black font-semibold mb-2">Arrays & strings</h1>
          <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold ">101</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
          <h1 className="text-lg text-black font-semibold mb-2">Linked list</h1>
          <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">175</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
          <h1 className="text-lg text-black font-semibold mb-2">Recursion & Backtracking</h1>
          <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">125</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-red-100 ">
          <h1 className="text-lg text-black font-semibold mb-2">DP</h1>
          <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold ">101</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-green-100">
          <h1 className="text-lg text-black font-semibold mb-2">Trees</h1>
          <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">175</h1>
        </div>
        <div className="flex flex-col rounded-lg m-2 p-4 w-60 bg-blue-100">
          <h1 className="text-lg text-black font-semibold mb-2">Graphs</h1>
          <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">125</h1>
        </div>
      </div>
      </div>
      </div>
      </>
  )
}

export default MentorDefaultDash