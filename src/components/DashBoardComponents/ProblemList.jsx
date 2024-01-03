import Problem from "./Problem";
import AddProblem from "./AddProblem";
import React, { useState, useEffect } from "react";

const ProblemList = ({toggleConfetti}) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">
        Problems Assigned
      </h1>
      <div className="flex flex-col">
        <Problem
          toggleConfetti={toggleConfetti}
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
          time={new Date().toLocaleString()}
        />
        <Problem
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
          time={new Date().toLocaleString()}
        />
        <Problem
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
          time={new Date().toLocaleString()}
        />
      </div>
    </div>
  );
};
export default ProblemList;
