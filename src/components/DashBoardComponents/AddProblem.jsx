import React, { useState, useEffect,useRef } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const topicList = [
{ value: "Arrays", label: "Arrays" },
{ value: "Backtracking", label: "Backtracking" },
{ value: "BinaryTrees", label: "Binary Trees" },
{ value: "BitManipulation", label: "Bit Manipulation" },
{ value: "BST", label: "BST" },
{ value: "DynammicProgramming", label: "Dynammic Programming" },
{ value: "Graphs", label: "Graphs" },
{ value: "Greedy", label: "Greedy" },
{ value: "Heap", label: "Heap" },
{ value: "LinkedList", label: "Linked List" },
{ value: "Matrix", label: "Matrix" },
{ value: "Stacks&Queues", label: "Stacks & Queues" },
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
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const navigate = useNavigate();
  const forminitialState={
    Qname: "",
    topic: "",
    difficulty: "",
    description: "",
    codeforcesLink: "",
    codechefLink: "",
    leetcodeLink: "",
    gfgLink: "",
    hackerrankLink: "",
    mentorId: mentor.id,
  }
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const [form, setForm] = useState(forminitialState);
  console.log(form)
  const fetchData = async () => {
    const body={
      mentorId : form.mentorId ,
      Qname:form.Qname , 
      topic : form.topic , 
      Level : form.difficulty , 
      description : form.description , 
      leetcodeLink:form.leetcodeLink ,
      gfgLink : form.gfgLink ,
      codechefLink : form.codechefLink,
      codeforcesLink : form.codeforcesLink,
      hackerrankLink : form.hackerrankLink 
    }
    const data = await fetchDataFromApiWithResponse(body, "addQuestion");
    if (data.status_code == 200) {
      toast.success("Question Registered Successfully!", {
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
    else {
      let errorMessage = "";
  
      if (data.user_data) {
        Object.entries(data.user_data).forEach(([key, value]) => {
          if (value && Array.isArray(value) && value.length > 0) {
          errorMessage = value[0] + " ";
          toast.error(errorMessage, {
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
        });
      }
   
    }
    // console.log("User", data.user_data.phone_number[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      fetchData();
      setForm(forminitialState)
      formRef.current.reset();
      // if (selectRef.current) {
      //   selectRef.current.select.setValue(null);
      // }
      
   
    
  };





  function handle(e) {
    const n = { ...form };
    n[e.target.name] = e.target.value;
    setForm(n);
  }

  function handleSelect(selectedOptions, object) {
    const n = { ...form };
    n[object.name] = selectedOptions.value;
    setForm(n);
  }
  function handleSelectmulti(selectedOptions, object) {
    const n = { ...form };
    n[object.name] = selectedOptions.map(option => option.value).join(' ');
    setForm(n);
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Add a Problem
      </h1>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 ml-2">
        <div className="flex flex-col items-start mt-8  dark:text-white text-black">
          <p>Problem Title</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="Qname"
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
              onChange={handleSelectmulti}
              ref={selectRef}
              // defaultValue={form.topic}
              // value={form.topic}
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
              ref={selectRef}
              // defaultValue={form.difficulty}
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
            
            placeholder="Enter Problem Description (Optional)"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="flex flex-col items-start dark:text-white text-black">
          <p>Leetcode Link</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="leetcodeLink"
            required
            placeholder="Enter Problem URL"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="flex flex-col items-start dark:text-white text-black">
          <p>Codeforces Link</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="codeforcesLink"
            
            placeholder="Enter Problem URL"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="flex flex-col items-start dark:text-white text-black">
          <p>GFG Link</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="gfgLink"
            
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
