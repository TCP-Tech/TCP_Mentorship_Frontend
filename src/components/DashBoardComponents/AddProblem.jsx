import React, { useState, useEffect } from "react";
import Select from "react-select";

const topicList = [
{ value: "Arrays", label: "Arrays" },
{ value: "Backtracking", label: "Backtracking" },
{ value: "Binary Trees", label: "Binary Trees" },
{ value: "Bit Manipulation", label: "Bit Manipulation" },
{ value: "BST", label: "BST" },
{ value: "Dynammic Programming", label: "Dynammic Programming" },
{ value: "Graphs", label: "Graphs" },
{ value: "Greedy", label: "Greedy" },
{ value: "Heap", label: "Heap" },
{ value: "Linked List", label: "Linked List" },
{ value: "Matrix", label: "Matrix" },
{ value: "Stacks & Queues", label: "Stacks & Queues" },
{ value: "String", label: "String" },
{ value: "Trie", label: "Trie" },
];

const difficultyList = [
  { value: "Easy", label: "Easy" },
  { value: "Medium", label: "Medium" },
  { value: "Hard", label: "Hard" },
];

const customStyles = {
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--primary-c)", // Set your desired background color here
    borderRadius: "4px",
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: "#fff", // Set the label text color
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    color: "#fff", // Set the remove button color
    ":hover": {
      backgroundColor: "#ccc", // Set the remove button background color on hover
      color: "#000",
    },
  }),
};

const AddProblem = () => {
  const [form, setForm] = useState({
    fullname: "",
    userid: "",
    username: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
    branch: "",
    sem: "",
    leetcode: "",
    codechef: "",
  });
  function handle(e) {
    const n = { ...form };
    n[e.target.name] = e.target.value;
    setForm(n);
  }

  function handleSelect(selectedOption, object) {
    const n = { ...form };
    n[object.name] = selectedOption.value;
    setForm(n);
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Add a Problem
      </h1>
      <form className="flex flex-col gap-4 ml-2">
        <div className="flex flex-col items-start mt-8  dark:text-white text-black">
          <p>Problem Title</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="title"
            required
            placeholder="Enter Problem Title"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-start w-[50%] dark:text-white text-black ">
            <p>Problem Topic</p>
            <Select
              options={topicList}
              onChange={handleSelect}
              // defaultValue={[topicList[0], topicList[1]]}
              placeholder="Select Topic"
              isMulti
              name="topic"
              className="w-full mt-2 dark:text-black text-black "
              style={customStyles}
              required
            />
          </div>
          <div className="flex flex-col items-start w-[50%] dark:text-white text-black">
            <p>Problem Difficulty</p>
            <Select
              options={difficultyList}
              onChange={handleSelect}
              // defaultValue={[difficultyList[0]]}
              placeholder="Select Difficulty"
              name="difficulty"
              className="w-full mt-2 text-black"
              required
            />
          </div>
        </div>
        <div className="flex flex-col items-start  dark:text-white text-black">
          <p>Problem Description</p>
          <textarea
            className="px-3 py-1.5 mt-2 h-[150px] rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="description"
            required
            placeholder="Enter Problem Description (Optional)"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="flex flex-col items-start dark:text-white text-black">
          <p>Problem URL</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="url"
            required
            placeholder="Enter Problem URL"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-[var(--primary-c)] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddProblem;
