import Problem from "./Problem";
import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { FaSpinner } from 'react-icons/fa';

const ProblemList = ({addQuestion , teamData ,setTeamData , mentee , onMenteeUpdate }) => {
  const [questions, setQuestions] = useState([]);
  const mentor = JSON.parse(localStorage.getItem("Mentor"));
  const [loading, setLoading] = useState(true);

  // console.log("Team data",questions)
  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi("getQuestions", mentor?mentor.id:mentee.mentor_id);
      const sortedQuestions = data.data.sort((a, b) => {
        const timestampA = new Date(a.allotedTime).getTime();
        const timestampB = new Date(b.allotedTime).getTime();
        return timestampB - timestampA; 
      });
      setQuestions(sortedQuestions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error.message);
      setLoading(false);
    }
  };
  useEffect(() => { 
    fetchData();
  }, [addQuestion]);

  useEffect(()=>{
    if(mentee){
      const updatedMentee={
        ...mentee,
       total_q:questions.length
      }
      console.log(updatedMentee)
      onMenteeUpdate(updatedMentee)
    }
  },[questions])

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black text-center md:text-left dark:text-white pt-7 pb-5 md:ml-2 font-semibold">
       {mentor? "Problems Assigned":"Problems"}
      </h1>
      {loading ? (
        <div className="flex items-center justify-center text-black  dark:text-gray-400">
          <FaSpinner className="animate-spin text-4xl mr-2" />
          Loading...
        </div>
      ) : questions.length === 0 ? (
        <p className=" text-center text-black dark:text-gray-500 text-2xl">
          No questions assigned yet.
        </p>
      ) : (
        <div className="flex flex-col">
          {questions.map((question) => (
            <Problem
              key={question.id}
              Qstatus={question?.submitedMentees?.some((mentees)=>mentees.id === parseInt(mentee?.id))}
              id={question.id}
              description={question.description}
              title={question.Qname}
              topic={question.topic}
              level={question.Level}
              desc={question.desc}
              submitedMentees={question?.submitedMentees}
              url={question.problemLink}
              time={question.formated_allotedtime}
              user={mentee || mentor}
              onMenteeUpdate={onMenteeUpdate}
              teamData={teamData}
              setTeamData={setTeamData}
            />
            
          ))}
        </div>
      )}
    </div>
  );
};

export default ProblemList;
