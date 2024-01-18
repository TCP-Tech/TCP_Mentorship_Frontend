import React, { useState } from "react";
import { FaEdit, FaPencilAlt } from "react-icons/fa";
import Select from "react-select";
import { fetchDataFromApiWithResponse } from "../../utils/api";

const branchList = [
  {
    label: "CSE",
    value: "CSE",
  },
  {
    label: "IT",
    value: "IT",
  },
  {
    label: "ECE",
    value: "ECE",
  },
  {
    label: "EE",
    value: "EE",
  },
  {
    label: "MECH",
    value: "MECH",
  },
  {
    label: "CIVIL",
    value: "CIVIL",
  },
  {
    label: "CHEM",
    value: "CHEM",
  },
  {
    label: "META",
    value: "META",
  },
  {
    label: "MIN",
    value: "MIN",
  },
  {
    label: "BIOTECH",
    value: "BIOTECH",
  },
  {
    label: "BIOMED",
    value: "BIOMED",
  },
  {
    label: "MCA",
    value: "MCA",
  },
];

const Profile = () => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const [form, setForm] = useState({
    name: "",
    email: "",
    branch: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [disabledForm, setDisabledForm] = useState(true);

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

  function handleDisabledForm(e) {
    e.preventDefault();
    setDisabledForm((prev) => !prev);
  }
  const fetchData = async () => {
    const body = { username: form.userid, password: form.password };

    const data = await fetchDataFromApiWithResponse(body, "update_mentor");
    if (data.user_data) {
      toast.success("Updated Successfully!", {
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
    console.log("User", data.user_data);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full py-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Your Profile
        </h1>
        <form
          action=""
          className="flex flex-col gap-4 w-4/5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col space-y-4 w-full px-6">
            <div className="flex justify-center">
              <img
                className="object-cover w-28 h-28 rounded-full border-2 border-[var(--primary-c)] p-1"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
              {!disabledForm && (
                <div className="absolute ml-28 mt-1 mr-1">
                  <FaEdit className="text-black dark:text-white cursor-pointer" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start mt-8">
            <p className="my-1">Name</p>
            <input
              className="px-3 py-1.5 rounded-md border w-[100%]"
              type="text"
              name="name"
              placeholder={mentor.name}
              required
              onChange={(e) => handle(e)}
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="my-1">Email</p>
            <input
              className="px-3 py-1.5 rounded-md border w-[100%]"
              type="text"
              name="emailid"
              placeholder={mentor.username}
              required
              onChange={(e) => handle(e)}
              disabled={disabledForm}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-start w-[100%]">
              <p className="my-1">Phone</p>
              <input
                className="px-3 py-1.5 rounded-md border w-[100%]"
                type="text"
                name="mobileno"
                placeholder={mentor.phone_number}
                required
                onChange={(e) => handle(e)}
                disabled={disabledForm}
              />
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-start">
              <p className="my-1">Password</p>
              <input
                className="px-3 py-1.5 rounded-md border w-[100%]"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={mentor.password}
                onChange={(e) => handle(e)}
                disabled={disabledForm}
              />
            </div>
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                viewbox="0 0 24 24"
                className="absolute cursor-pointer top-[38px] right-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <path
                  d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                  stroke="#aaa"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#aaa"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="24"
                height="24"
                viewbox="0 0 24 24"
                className="absolute cursor-pointer top-[38px] right-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <path
                  d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
                  stroke="#aaa"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="flex flex-row justify-center gap-4">
            <button
              onClick={(e) => handleDisabledForm(e)}
              name="notaction"
              className="flex justify-center items-center w-[50%] my-8 bg-white border-[1px] rounded-md text-black py-2 hover:bg-gray-300 hover:text-white duration-300"
            >
              Edit Profile
              <FaPencilAlt className="ml-2" />
            </button>
            <button
              disabled={disabledForm}
              name="action"
              className="w-[50%] my-8 bg-[var(--primary-c)] rounded-md text-white py-2 hover:bg-[var(--tertiary-c)] duration-300"
            >
              Update Profile
            </button>
          </div>
        </form>
        {/* <div className="flex space-x-2 w-full px-6">
          <button
            className="text-white w-full bg-blue-500 py-2 px-8 mt-4 rounded"
            onClick={handleProfileEdit}
            disabled={editingEnable}
          >
            Edit Profile
          </button>
          <button className="text-white w-full bg-blue-500 py-2 px-8 mt-4 rounded">
            Update
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
