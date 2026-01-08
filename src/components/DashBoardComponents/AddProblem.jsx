import React, { useState, useEffect, useRef } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ProblemList from "./ProblemList";

import {
  getPlatformAndProblem,
  fetchSingleProblemLeetCode,
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

const difficultyList = [
  { value: "1", label: "Easy" },
  { value: "2", label: "Medium" }, 
  { value: "3", label: "Hard" },
];

const customStyles = {
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "var(--primary-c)",
    borderRadius: "4px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#fff",
    ":hover": { color: "#000" },
  }),
};

const AddProblem = ({ onMentorUpdate }) => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const [addQuestion, setAddedQuestion] = useState();
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [scope, setScope] = useState("TEAM");

  const forminitialState = {
    Qname: "",
    topic: "",
    difficulty: "",
    description: "",
    problemLink: "",
    mentorId: mentor.id,
    platform: "",
  };

  const formRef = useRef(null);
  const selectRef = useRef(null);
  const [form, setForm] = useState(forminitialState);

  const fetchData = async () => {
    const body = {
      mentorId: parseInt(form.mentorId),
      Qname: form.Qname,
      topic: form.topic,
      Level: form.difficulty,
      description: form.description,
      problemLink: form.problemLink,
      scope: mentor.supermentor ? scope : "TEAM",
    };

    const data = await fetchDataFromApiWithResponse(body, "addQuestion");

    if (data.status_code === 200) {
      toast.success("Question Registered Successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      });

      setAddedQuestion(!addQuestion);

      const updatedMentor = {
        ...mentor,
        total_q: parseInt(mentor.total_q) + 1,
        Qlevel_count: {
          ...mentor.Qlevel_count,
          [form.difficulty]: (mentor.Qlevel_count[form.difficulty] || 0) + 1,
        },
        topic_count: { ...mentor.topic_count },
      };

      selectedTopics.forEach((t) => {
        updatedMentor.topic_count[t] =
          (mentor.topic_count[t] || 0) + 1;
      });

      onMentorUpdate(updatedMentor);

      setForm(forminitialState);
      setScope("TEAM");
      setSelectedTopics([]);
      formRef.current.reset();
      if (selectRef.current) selectRef.current.select.clearValue();
    } else {
      Object.values(data.user_data || {}).forEach((err) => {
        toast.error(err[0], {
          position: "bottom-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const resetForm = () => {
    setForm(forminitialState);
    setScope("TEAM");
    setSelectedTopics([]);
    formRef.current.reset();
    if (selectRef.current) selectRef.current.select.clearValue();
  };

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleURL = async (e) => {
    const url = e.target.value;
    const { platform, problemName } = await getPlatformAndProblem(url);

    setForm((prev) => ({
      ...prev,
      problemLink: url,
      Qname: problemName || prev.Qname,
      platform: platform || "Unknown",
    }));

    if (platform === "leetcode") {
      const problem = await fetchSingleProblemLeetCode(problemName);
      if (!problem?.error) {
        const topics = problem.topicTags
          .map((t) => topicList.find((x) => x.label === t.name)?.value)
          .filter(Boolean);

        // ✅ AUTO-SET: Topics and difficulty
        setSelectedTopics(topics);
        
        // ✅ MAP LeetCode difficulty to Django values ("1", "2", "3")
        const difficultyMap = {
          "Easy": "1",
          "Medium": "2", 
          "Hard": "3"
        };
        
        const mappedDifficulty = difficultyMap[problem.difficulty] || "2";

        setForm((prev) => ({
          ...prev,
          topic: topics.join(" "),
          difficulty: mappedDifficulty,  // Now "1", "2", or "3"
          description: problem.description,
        }));
      }
    }
  };

  function handleSelect(selectedOptions, object) {
    setForm({ ...form, [object.name]: selectedOptions.value });
  }

  function handleSelectmulti(selectedOptions, object) {
    const topics = selectedOptions.map((o) => o.value);
    setForm({
      ...form,
      [object.name]: topics.join(" "),
    });
    setSelectedTopics(topics);
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Add a Problem
      </h1>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 ml-2"
      >
        <div className="flex flex-col items-start mt-8 dark:text-white text-black">
          <p>
            Problem URL <span className="font-bold text-red-500">*</span>
          </p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-full dark:text-black bg-white"
            required
            placeholder="Enter Problem URL"
            onChange={handleURL}
          />
        </div>

        <div className="flex flex-col items-start dark:text-white text-black">
          <p>Platform</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-full dark:text-black bg-gray-200"
            value={form.platform}
            disabled
          />
        </div>

        <div className="flex flex-col items-start dark:text-white text-black">
          <p>
            Problem Title <span className="font-bold text-red-500">*</span>
          </p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-full dark:text-black bg-white"
            name="Qname"
            value={form.Qname}
            onChange={handle}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-[50%]">
            <Select
              options={topicList}
              onChange={handleSelectmulti}
              ref={selectRef}
              isMulti
              name="topic"
              value={selectedTopics.map(t => topicList.find(item => item.value === t))}
              styles={customStyles}
              className="w-full mt-2 dark:text-black"
            />
          </div>

          <div className="w-[50%]">
            <Select
              options={difficultyList}
              onChange={handleSelect}
              name="difficulty"
              value={difficultyList.find(item => item.value === form.difficulty) || null}
              className="w-full mt-2 text-black"
            />
          </div>
        </div>

        <div className="flex flex-col items-start dark:text-white text-black">
          <p>Problem Description</p>
          <textarea
            className="px-3 py-1.5 mt-2 h-[150px] rounded-md border w-full dark:text-black bg-white"
            name="description"
            value={form.description}
            onChange={handle}
          />
        </div>

        {mentor?.supermentor && (
          <div className="flex flex-col items-start dark:text-white text-black mt-4">
            <p>
              Assign Question To <span className="font-bold text-red-500">*</span>
            </p>
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="px-3 py-1.5 mt-2 rounded-md border w-[250px] dark:text-black bg-white"
            >
              <option value="TEAM">My Team</option>
              <option value="ALL">All Mentees</option>
            </select>
          </div>
        )}

        <div className="mt-6 flex items-center justify-start gap-x-3">
          <button
            type="submit"
            className="rounded-md bg-[var(--primary-c)] px-8 py-2 text-sm font-semibold text-white"
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md text-sm bg-gray-200 border px-5 py-2 text-black font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>

      <ProblemList addQuestion={addQuestion} />
      <ToastContainer />
    </div>
  );
};

export default AddProblem;
