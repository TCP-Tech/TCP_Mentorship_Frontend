import React, { useState, useEffect,useRef } from "react";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ProblemList from "./ProblemList";

const topicList = [
{ value: "Array", label: "Array" },
{ value: "Backtracking", label: "Backtracking" },
{ value: "BinaryTrees", label: "Binary Trees" },
{ value: "BitManipulation", label: "Bit Manipulation" },
{ value: "BST", label: "BST" },
{ value: "DynamicProgramming", label: "Dynamic Programming" },
{ value: "Graphs", label: "Graphs" },
{ value: "Greedy", label: "Greedy" },
{ value: "Heap", label: "Heap" },
{ value: "LinkedList", label: "Linked List" },
{ value: "Matrix", label: "Matrix" },
{ value: "Stacks&Queues", label: "Stacks & Queues" },
{ value: "Strings", label: "Strings" },
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
      color: "#000",
    },
  }),
};

const AddProblem = ({onMentorUpdate}) => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const [addQuestion,setAddedQuestion] = useState();
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const forminitialState={
    Qname: "",
    topic: "",
    difficulty: "",
    description: "",
    problemLink: "",
    mentorId: mentor.id,
  }
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const [form, setForm] = useState(forminitialState);
  console.log(form)
  const fetchData = async () => {
    const body={
      mentorId :String(form.mentorId),
      Qname:form.Qname , 
      topic : form.topic , 
      Level : form.difficulty , 
      description : form.description , 
      problemLink:form.problemLink 
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
      setAddedQuestion(!addQuestion);
      const updatedMentor = {
        ...mentor,
        total_q: parseInt(mentor.total_q) + 1,
        Qlevel_count: {
          ...mentor.Qlevel_count,
          [form.difficulty]: (mentor.Qlevel_count[form.difficulty] || 0) + 1,
        },
        topic_count: {
          ...mentor.topic_count,
        },
      };
      selectedTopics.forEach((selectedTopic) => {
        updatedMentor.topic_count[selectedTopic] = (mentor.topic_count[selectedTopic] || 0) + 1;
      });
      console.log(selectedTopics)
      console.log("Updated Mentor", updatedMentor);
      onMentorUpdate(updatedMentor);
      setForm(forminitialState);
      formRef.current.reset();
      if (selectRef.current) {
        selectRef.current.select.clearValue();
      }
    }
    else {
      let errorMessage = "";
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
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      fetchData();
  };

  const resetForm = () => {
    setForm(forminitialState);
    formRef.current.reset();
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
    n[object.name] = selectedOptions.map((option) => option.value).join(' ');
    setForm(n);
    setSelectedTopics(selectedOptions.map((option) => option.value));
  }
  
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-black dark:text-white pt-7 pb-5 font-semibold">
        Add a Problem
      </h1>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4 ml-2">
        <div className="flex flex-col items-start mt-8  dark:text-white text-black">
          <p>Problem Title <span className="font-bold text-red-500">*</span></p>
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
            <p>Problem Topic <span className="font-bold text-red-500">*</span></p>
            <Select
                options={topicList}
                onChange={handleSelectmulti}
                ref={selectRef}
                value={topicList.filter(option => form.topic.includes(option.value))}
                placeholder="Select Topic"
                isMulti
                name="topic"
                className="w-full mt-2 dark:text-black text-black"
                styles={customStyles}  // Use styles instead of style
                required
              />
          </div>
          <div className="flex flex-col items-start w-[50%] dark:text-white text-black">
            <p>Problem Difficulty <span className="font-bold text-red-500">*</span></p>
            <Select
              options={difficultyList}
              onChange={handleSelect}
              ref={selectRef}
              value={difficultyList.filter(option => form.difficulty.includes(option.value))}
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
          <p>Problem URL <span className="font-bold text-red-500">*</span></p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="problemLink"
            required
            placeholder="Enter Problem URL"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="mt-6 flex items-center justify-start gap-x-3">
          <button
            type="submit"
            className="rounded-md bg-[var(--primary-c)] px-8 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetForm}
            className=" rounded-md text-sm bg-gray-200 border px-5 py-2 text-black font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
      <ProblemList addQuestion={addQuestion} />
    </div>
  );
};
export default AddProblem;
