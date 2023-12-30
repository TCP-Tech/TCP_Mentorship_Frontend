import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "Arrays & Strings", label: "Arrays & Strings" },
  { value: "Linked List", label: "Linked List" },
  { value: "Recursion & Backtracking", label: "Recursion & Backtracking" },
  { value: "DP", label: "DP" },
  { value: "Trees", label: "Trees" },
  { value: "Graphs", label: "Graphs" },
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
  return (
    <div className="flex flex-col  space-x-8">
      <h1 className="text-3xl text-black pt-7 pb-5 ml-8 font-semibold">
        Add a Problem
      </h1>
      <form>
        <div className="space-y-12 m-5">
          <div className="border-b border-gray-900/10">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Problem Title
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="title"
                    name="title"
                    type="text"
                    className="block p-2 w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Problem Topic
                </label>
                <div className="mt-2">
                  <Select
                    required
                    styles={customStyles}
                    defaultValue={[options[0], options[1]]}
                    isMulti
                    name="topics"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="level"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Problem Difficulty
                </label>
                <div className="mt-2">
                  <select
                    required
                    id="level"
                    name="level"
                    className="block bg-white p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="desc"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="desc"
                    name="desc"
                    rows={3}
                    className="block p-2 w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the problem. (optional)
                </p>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Problem URL
                </label>
                <div className="mt-2">
                  <input
                    required
                    id="url"
                    name="url"
                    type="url"
                    autoComplete="url"
                    className="block p-2 w-full bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddProblem;
