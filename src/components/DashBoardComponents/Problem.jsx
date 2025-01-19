import React, { useEffect, useState } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FiExternalLink } from "react-icons/fi";
import "../../index.css";
import {
  checkLeetCodeProblemSolved,
  getLeetCodeUsername,
} from "../../utils/problemUtils";

const topicList = [
  { value: "Array", label: "Array" },
  { value: "Backtracking", label: "Backtracking" },
  { value: "BinaryTree", label: "Binary Tree" },
  { value: "BitManipulation", label: "Bit Manipulation" },
  { value: "BST", label: "Binary Search Tree" },
  { value: "DynamicProgramming", label: "Dynamic Programming" },
  { value: "Graph", label: "Graph" },
  { value: "Greedy", label: "Greedy" },
  { value: "Heap", label: "Heap" },
  { value: "LinkedList", label: "Linked List" },
  { value: "Matrix", label: "Matrix" },
  { value: "Stack", label: "Stack" },
  { value: "Queue", label: "Queue" },
  { value: "String", label: "String" },
  { value: "Trie", label: "Trie" },
  { value: "TwoPointers", label: "Two Pointers" },
  { value: "Sorting", label: "Sorting" },
  { value: "HashTable", label: "Hash Table" },
  { value: "Recursion", label: "Recursion" },
  { value: "Math", label: "Math" },
];
const Problem = ({
  id,
  title,
  desc,
  Qstatus,
  topic,
  level,
  submitedMentees,
  url,
  time,
  teamData,
  setTeamData,
  description,
  user,
  onMenteeUpdate,
}) => {
  const [isMarked, setIsMarked] = useState(Qstatus);
  const [showModal, setShowModal] = useState(false);
  const [scoreAnimationVisible, setScoreAnimationVisible] = useState(false);
  const [scoreAnimation, setScoreAnimation] = useState(null);
  const leetcodeUsername = getLeetCodeUsername(user.leetcodeID);

  const postSubmission = async () => {
    const bodyData = {
      menteeId: user.id,
      qId: id,
    };
    if (
      url.includes("leetcode.com") &&
      !(await checkLeetCodeProblemSolved(leetcodeUsername, title))
    ) {
      toast.error("Problem is not solved!!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return false;
    }

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
        solvedQ: parseInt(user.solvedQ) + 1,
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
      return true;
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
      setShowModal(true);
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

  const handleSubmit = async (confirmed) => {
    setShowModal(false);
    if (confirmed) {
      const res = await postSubmission();
      setIsMarked(res);
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
      <div className="flex flex-col items-center md:items-start p-4 space-y-2">
        <a
          href={url}
          target="_blank"
          className="flex items-center hover:underline w-fit"
        >
          <h1 className="mx-2 text-2xl flex w-fit dark:text-white text-black font-semibold ">
            {title} <FiExternalLink className="ml-1 text-primary" />
          </h1>
        </a>
        {description && (
          <h1 className="text-lg mx-2 dark:text-white text-black ">
            {description}
          </h1>
        )}
        <p className="ml-2 text-sm italic text-black  dark:text-white">
          Posted on <span>{time}</span>
        </p>
        <h3 className="m-4 text-md dark:text-white text-black">{desc}</h3>
        {submitedMentees && submitedMentees.length > 0 ? (
          <h3
            className={`${
              user.mentor_id ? "hidden" : ""
            } my-4 ml-2 text-sm md:text-md dark:text-white text-black`}
          >
            Submitted by:{" "}
            {submitedMentees.map((sMentee) => sMentee.name).join(",")}
          </h3>
        ) : (
          <h3 className="my-4 ml-2 text-sm md:text-md dark:text-white text-black">
            Submitted by: None
          </h3>
        )}
      </div>

      <div className="flex flex-col items-center md:items-end p-4">
        <button
          className={`${
            isMarked
              ? "text-black dark:text-white border-primary border"
              : "bg-[var(--primary-c)] text-white"
          } ${
            !user.mentor_id ? "hidden" : ""
          } md:w-fit w-48  rounded-lg dark:border dark:border-white p-3 m-1 md:my-3`}
          onClick={handleSubmission}
        >
          {isMarked ? "Done" : "Mark as Done"}
        </button>
        {scoreAnimation !== null && (
          <div
            className={`md:mt-4 translate-x-[-50%] absolute bg-green-400 text-black dark:text-white md:left-[80%] score-animation ${
              scoreAnimation !== null ? "active" : ""
            }`}
          >
            +{scoreAnimation} points
          </div>
        )}
        <div className="flex flex-col text-center md:text-left md:flex-row">
          {topic.split(" ").map((t) => {
            const matchedTopic = topicList.find((item) => item.value === t);
            return matchedTopic ? (
              <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm md:w-fit w-48 md:px-2 py-1 px-6 m-1">
                {matchedTopic.label}
              </p>
            ) : null;
          })}
          <p
            className={`border ${
              level == "Easy" ? "text-green-500 border-green-500" : ""
            } ${level == "Medium" ? "text-yellow-500 border-yellow-500" : ""} ${
              level == "Hard" ? "text-red-500 border-red-500" : ""
            } dark:bg-gray-800 rounded-lg text-sm p-1 m-1`}
          >
            {level}
          </p>
        </div>
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className="dark:bg-gray-800  bg-gray-100 p-8 rounded-xl"
          style={{
            overlay: {
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            content: {
              width: "80%",
              maxWidth: "400px",
              maxHeight: "200px",
            },
          }}
        >
          <div className="flex flex-col">
            <p className="dark:text-white text-black text-center">
              Are you sure you have solved this problem?
            </p>
            <div className="flex justify-evenly mt-6">
              <button
                onClick={() => handleSubmit(true)}
                className="md:px-10 px-6 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-700"
              >
                Yes
              </button>
              <button
                onClick={() => handleSubmit(false)}
                className="md:px-10 px-6 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-700"
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Problem;
