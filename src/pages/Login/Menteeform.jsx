import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { fetchDataFromApiWithResponse } from "../../utils/api";
import { FaSpinner } from "react-icons/fa";

const Menteeform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const[mentee,setMentee]=useState(JSON.parse(localStorage.getItem("Mentee")) || null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading,setIsloading]=useState(false)
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userid: "",
    password: "",
  });
  useEffect(() => {
    if (loggedIn && mentee) {
      setTimeout(() => {
        navigate("/mentee/" + mentee.name);
        console.log("Data", mentee);
      }, 1000);
    } else if (checkLoggedIn()) {
      setLoggedIn(true);
    }
  }, [loggedIn, navigate, mentee]);
  const fetchData = async () => {
    const body = { email: form.userid, password: form.password };
    setIsloading(true);
    try {
      const data = await fetchDataFromApiWithResponse(body, "mentee_login");
      if (data.status_code == 200) {
        toast.success("Sign In Successful!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem("Mentee", JSON.stringify(data.user_data));
        setMentee(data.user_data)
        setLoggedIn(true);
        // setTimeout(() => {
        //   navigate("/mentee/"+mentee?.name);
        // }, 2000);
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
    } catch (error) {
        toast.error("Something went wrong",{
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }finally{
      setIsloading(false);
    }
    
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };


  const checkLoggedIn = () => {
    const mentorData = localStorage.getItem("Mentee");
    return mentorData !== null;
  };

  function handle(e) {
    const n = { ...form };
    n[e.target.name] = e.target.value;
    setForm(n);
  }

  return (
    <>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-start mt-8 dark:text-white text-black">
          <p>Email</p>
          <input
            className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
            type="text"
            name="userid"
            required
            placeholder="Enter your registered email"
            onChange={(e) => handle(e)}
          />
        </div>
        <div className="relative">
          <div className="flex flex-col items-start dark:text-white text-black">
            <p>Password</p>
            <input
              className="px-3 py-1.5 mt-2 rounded-md border w-[100%] dark:text-black bg-white"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              onChange={(e) => handle(e)}
            />
          </div>
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute cursor-pointer top-[39px] right-2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <path
                d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                stroke="#aaa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#aaa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute cursor-pointer top-[39px] right-2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <path
                d="M20 14.8335C21.3082 13.3317 22 12 22 12C22 12 18.3636 5 12 5C11.6588 5 11.3254 5.02013 11 5.05822C10.6578 5.09828 10.3244 5.15822 10 5.23552M12 9C12.3506 9 12.6872 9.06015 13 9.17071C13.8524 9.47199 14.528 10.1476 14.8293 11C14.9398 11.3128 15 11.6494 15 12M3 3L21 21M12 15C11.6494 15 11.3128 14.9398 11 14.8293C10.1476 14.528 9.47198 13.8524 9.1707 13C9.11386 12.8392 9.07034 12.6721 9.04147 12.5M4.14701 9C3.83877 9.34451 3.56234 9.68241 3.31864 10C2.45286 11.1282 2 12 2 12C2 12 5.63636 19 12 19C12.3412 19 12.6746 18.9799 13 18.9418"
                stroke="#aaa"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <button className="bg-[var(--primary-c)] rounded-md text-white py-2 mt-8 hover:bg-[var(--tertiary-c)] duration-300">
         {isLoading ?
          <div className="flex items-center justify-center text-black  dark:text-gray-400">
                  <FaSpinner className="animate-spin text-4xl mr-2" />
                </div>
            
          : 
          "Login"}
        </button>
      </form>
    </>
  );
};

export default Menteeform;
