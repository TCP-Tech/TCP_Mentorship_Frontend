import React, { useState } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import { toast } from "react-toastify";

const Problem = ({id, title, desc,Qstatus, topic, level, url,time,toggleConfetti,description, user }) => {
  const [isMarked, setIsMarked] = useState(Qstatus);
  const postSubmission = async ()=>{
    const bodyData = {
      menteeId : user.id,
      qId:id
    }
    const data = await fetchDataFromApiWithResponse(bodyData,"submitQuestion");
    if(data.status_code == 200){
      toast.success(data.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else{
      toast.error("Some error occured while processing your request", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const handleSubmission = () => { 
    if(!isMarked){
      postSubmission();  
      setIsMarked(true);
    }
    else{
      toast.error("Question submitted already", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center dark:bg-gray-800 dark:border-white justify-between border border-gray-400 rounded-lg m-2">
      <a href={url} target="_blank" className="cursor-pointer">
        <div className="flex flex-col p-4 space-y-2">
          <h1 className="mx-2 text-2xl dark:text-white text-black font-semibold">
            {title}
          </h1>
         {description&& <h1 className="text-lg mx-2 dark:text-white text-black ">
            {description}
          </h1>}
          <p className="ml-2 text-sm italic text-black dark:text-white">Posted on <span>{time}</span></p>
          <h3 className="m-4 text-md dark:text-white text-black">{desc}</h3>
        </div>
      </a>
      <div className="flex flex-col items-end p-4">
        <button
          className={`${isMarked ? 'text-black dark:text-white border-primary border' : 'bg-[var(--primary-c)] text-white'} ${!user.mentor_id? 'hidden':''} w-fit  rounded-lg dark:border dark:border-white p-3 m-3`}
          onClick={handleSubmission}
        >
          {isMarked ? "Marked" : "Mark as Done"}
        </button>
        <div className="flex">
         {topic.split(" ").map((topic)=>(
                <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm p-1 m-1">
                 {topic}
                </p>
         ))}
          <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm p-1 m-1">
            {level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
