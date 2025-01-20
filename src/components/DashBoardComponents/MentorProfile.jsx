import React, { useState, useEffect } from "react";
import {toast} from "react-toastify";
import { FaEdit, FaPencilAlt } from "react-icons/fa";
import { fetchDataFromApiWithResponse } from "../../utils/api";

const Profile = ({mentor,onMentorUpdate}) => {
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [disabledForm, setDisabledForm] = useState(true);
  useEffect(() => {
    if(mentor){
      setForm({
      name: mentor.name || "",
      image: mentor.image || "",
      email: mentor.email || "",
      phone: mentor.phone_number || "",
      codechefID: mentor.codechefID || "",
      codeforcesID: mentor.codeforcesID || "",
      gfgID: mentor.gfgID || "",
      linkedinID: mentor.linkedinID || "",
      leetcodeID: mentor.leetcodeID || "",
      hackerrankID: mentor.hackerrankID || "",
      password: mentor.password || "",
    });
  }
  }, [mentor]);

  const handle=(e)=>{
    const n = { ...form };
    n[e.target.name] = e.target.value;
    setForm(n);
  }

  const handleDisabledForm=(e)=>{
    e.preventDefault();
    setDisabledForm((prev) => !prev);
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     fetchData();
  }
  const fetchData = async () => {
    const body = {
       name: form.name,
       image:form.image, 
       email:form.email, 
       phone_number : form.phone, 
       password: form.password ,
       codechefID: form.codechefID ,
       codeforcesID: form.codeforcesID ,
       gfgID: form.gfgID ,
       linkedinID: form.linkedinID ,
       leetcodeID: form.leetcodeID ,
       hackerrankID: form.hackerrankID ,
      };

    const data = await fetchDataFromApiWithResponse(body, "update_mentor");
    if (data.status_code == 200) {
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
      const updateMentor = {
        ...mentor,
        name: form.name,
        image:form.image, 
        email:form.email, 
        phone_number : form.phone, 
        password: form.password 
      };
      onMentorUpdate(updateMentor);
    }
    else{
      toast.error(data.status_message, {
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
                src={mentor.image} 
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-start mt-8">
            <p className="my-1 dark:text-white text-black">Name</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="name"
              value={form.name}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="my-1 dark:text-white text-black">Profile Picture</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="image"
              placeholder="Enter the drive url for your image"
              value={form.image}
              required
              onChange={(e) => handle(e)}
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="my-1 dark:text-white text-black">Email</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="email"
              value={form.email}
              required
              onChange={(e) => handle(e)}
              disabled={disabledForm}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-start w-[100%]">
              <p className="my-1 dark:text-white text-black">Phone</p>
              <input
                className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
                type="text"
                name="phone"
                value={form.phone}
                required
                onChange={(e) => handle(e)}
                disabled={disabledForm}
              />
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">LinkedIn</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="linkedinID"
              value={form.linkedinID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">CodeChef</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="codechefID"
              value={form.codechefID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">CodeForces</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="codeforcesID"
              value={form.codeforcesID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">Leetcode</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="leetcodeID"
              value={form.leetcodeID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">GFG</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="gfgID"
              value={form.gfgID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          <div className="flex flex-col items-start ">
            <p className="my-1 dark:text-white text-black">HackerRank</p>
            <input
              className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
              type="text"
              name="hackerrankID"
              value={form.hackerrankID}
              onChange={(e) => handle(e)}
              required
              disabled={disabledForm}
            />
          </div>
          
          
          <div className="relative">
            <div className="flex flex-col items-start">
              <p className="my-1 dark:text-white text-black">Password</p>
              <input
                className="px-3 bg-slate-100 text-black py-1.5 rounded-md border w-[100%]"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
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
              className="flex justify-center items-center w-[50%] my-8 bg-white border-[1px] rounded-md text-black py-2 hover:bg-gray-300 dark:hover:text-white duration-300"
            >
            {disabledForm?"Edit Profile" :"Editing Enabled" }
             { disabledForm&& <FaPencilAlt className="ml-2" />}
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
      </div>
    </div>
  );
};

export default Profile;
