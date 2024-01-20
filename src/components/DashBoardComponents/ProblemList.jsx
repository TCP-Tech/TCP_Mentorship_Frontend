import Problem from "./Problem";
import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { FaSpinner } from 'react-icons/fa';

const ProblemList = ({ toggleConfetti }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi("getQuestions", "");
      setQuestions(data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Problems Assigned
      </h1>
      {loading ? (
        <div className="flex items-center justify-center  text-gray-400">
          <FaSpinner className="animate-spin text-4xl mr-2" />
          Loading...
        </div>
      ) : questions.length === 0 ? (
        <p className=" text-center text-gray-500 text-2xl">
          No questions assigned yet.
        </p>
      ) : (
        <div className="flex flex-col">
          {questions.map((question) => (
            <Problem
              key={question.id}  
              toggleConfetti={toggleConfetti}
              title={question.title}
              topic={question.topic}
              level={question.level}
              desc={question.desc}
              url={question.url}
              time={question.time}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProblemList;
