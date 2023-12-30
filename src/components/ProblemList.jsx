import Problem from "./Problem";
import AddProblem from "./AddProblem";
import React, { useState, useEffect } from "react";

const ProblemList = () => {
  return (
    <div className="flex flex-col  space-x-8">
      <h1 className="text-3xl text-black pt-7 pb-5 font-semibold">
        Problems Assigned
      </h1>
      <div className="flex flex-col">
        <Problem
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
        />
        <Problem
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
        />
        <Problem
          title="Subset Sum"
          topic="Recursion"
          level="Easy"
          desc="Lorem ipsum"
          url="https://leetcode.com/problems/partition-equal-subset-sum/"
        />
      </div>
    </div>
  );
};
export default ProblemList;
