import React, { useEffect, useState } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import { toast } from "react-toastify";
import "../../index.css";

const Problem = ({ id, title, desc, Qstatus, topic, level, url, time, teamData ,setTeamData, description, user, onMenteeUpdate }) => {
  const [isMarked, setIsMarked] = useState(Qstatus);
  const [scoreAnimationVisible, setScoreAnimationVisible] = useState(false);
  const [scoreAnimation, setScoreAnimation] = useState(null);

  const postSubmission = async () => {
    const bodyData = {
      menteeId: user.id,
      qId: id
    };

    const data = await fetchDataFromApiWithResponse(bodyData, "submitQuestion");

    if (data.status_code === 200) {
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

      if (data.score) {
        setScoreAnimation(data.score);
      }
      const updatedMentee = {
        ...user,
        score: parseInt(user.score) + data.score,
        solvedQ: parseInt(user.solvedQ) + 1
      };
      const updatedTeamData = {
        ...teamData,
        team_data: [
          {
            ...teamData.team_data[0],
            team_score: parseInt(teamData.team_data[0].team_score) + data.score,
          },
        ],
      };
      setTeamData(updatedTeamData);
      onMenteeUpdate(updatedMentee);
      setScoreAnimationVisible(true);
    } else {
      toast.error("Some error occurred while processing your request", {
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

  const handleSubmission = () => {
    if (!isMarked) {
      postSubmission();
      setIsMarked(true);
    } else {
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

  useEffect(() => {
    const onAnimationEnd = () => {
      setScoreAnimation(null);
      const animationElement = document.querySelector(".score-animation");
      if (animationElement) {
        animationElement.classList.add("hidden");
      }
    };

    const animationElement = document.querySelector(".score-animation");
    if (animationElement) {
      animationElement.addEventListener("animationend", onAnimationEnd);
    }

    return () => {
      if (animationElement) {
        animationElement.removeEventListener("animationend", onAnimationEnd);
      }
    };
  }, [scoreAnimation]);

  return (
    <div className="flex flex-col sm:flex-row items-center dark:bg-gray-800 dark:border-white justify-between border border-gray-400 rounded-lg m-2 text-center md:text-left">
      <a href={url} target="_blank" className="cursor-pointer">
        <div className="flex flex-col  p-4 space-y-2">
          <h1 className="mx-2 text-2xl dark:text-white text-black font-semibold">
            {title}
          </h1>
          {description && <h1 className="text-lg mx-2 dark:text-white text-black ">
            {description}
          </h1>}
          <p className="ml-2 text-sm italic text-black dark:text-white">Posted on <span>{time}</span></p>
          <h3 className="m-4 text-md dark:text-white text-black">{desc}</h3>
        </div>
      </a>
      <div className="flex flex-col items-center md:items-end p-4">
        <button
          className={`${isMarked ? 'text-black dark:text-white border-primary border' : 'bg-[var(--primary-c)] text-white'} ${!user.mentor_id ? 'hidden' : ''} w-fit  rounded-lg dark:border dark:border-white p-3 m-1 md:m-3`}
          onClick={handleSubmission}
        >
          {isMarked ? "Marked" : "Mark as Done"}
        </button>
        {scoreAnimation !== null && (
          <div className={`md:mt-4 translate-x-[-50%] absolute bg-green-400 text-black dark:text-white md:left-[80%] score-animation ${scoreAnimation !== null ? 'active' : ''}`}>
            +{scoreAnimation} points
          </div>
        )}
        <div className="flex flex-col text-center md:text-left md:flex-row">
          {topic.split(" ").map((topic) => (
            <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm md:px-2 py-1 px-6  m-1">
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
