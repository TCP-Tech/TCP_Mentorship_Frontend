import React, { useState } from "react";
// import { fetchDataFromApi } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Mentorimg from "../../assets/images/Mentorimg.jpg";
import Menteeimg from "../../assets/images/Menteeimg.jpg";
import Menteeform from "./Menteeform";
import Mentorform from "./Mentorform";
import { useNavigate } from "react-router-dom";
// import bgImage from "../assets/bgImage.jpg";
import { useLayoutEffect } from "react";

const Login = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [usertype, setusertype] = useState("Mentee");

  const mentorlogin = () => {
    setusertype("Mentor");
  };
  const Menteelogin = () => {
    setusertype("Mentee");
  };

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Sign In Successful", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const [form, setForm] = useState({
    userid: "",
    password: "",
  });

  function handle(e) {
    const n = { ...form };
    n[e.target.name] = e.target.value;
    setForm(n);
  }

  const handleForgotPassword = async (e) => {
    toast.error("OK", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex  h-screen flex-col justify-center">
      <div className="h-screen w-screen">
        <ToastContainer />
        <div className="h-screen w-full bg-white flex-col md:flex-row shadow-lg flex">
          <div className="p-8 dark:bg-gray-900 flex justify-center flex-col w-full md:w-[50%]">
            {/* <Link
            to={"/"}
            className="w-[30%] max-w-[100px] text-center bg-[var(--primary-c)] rounded-md text-white py-2 hover:bg-[var(--tertiary-c)] duration-300"
          >
            Home
          </Link> */}
            <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
              <div className=" text-center w-max">
                <button
                  type="button"
                  id="mentee"
                  className={`rounded-full mx-2 ml-0 sm:mr-6  my-1 p-3 h-40 w-40 sm:h-48 sm:w-48 dark:bg-white ${
                    usertype === "Mentee" ? "border-4" : " "
                  } border-blue-600`}
                  onClick={Menteelogin}
                >
                  <img
                    src={Menteeimg}
                    alt=""
                    className="sm:h-36 sm:w-36 h-28 w-28 rounded-full"
                  />
                  <span className="text-black ">Mentee</span>
                </button>
                <button
                  type="button"
                  id="mentor"
                  className={`rounded-full sm:ml-0 p-3 h-40 w-40 sm:h-48 sm:w-48  dark:bg-white ${
                    usertype === "Mentor" ? "border-4" : " "
                  } border-blue-600`}
                  onClick={mentorlogin}
                >
                  <img
                    src={Mentorimg}
                    alt=""
                    className="sm:h-36 sm:w-36 h-28 w-28 rounded-full"
                  />
                  <span className="text-black ">Mentor</span>
                </button>
              </div>
            </div>
            <h2 className="font-bold text-4xl mt-8 text-[var(--primary-c)]">
              {`Login As ${usertype}`}
            </h2>
            <p className="text-xl mt-4 dark:text-white text-black">
              Welcome back, you have been missed!
            </p>

            {usertype === "Mentee" ? <Menteeform /> : <Mentorform />}

            {/* <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col items-start mt-8 text-black">
              <p>Email or Mobile No.</p>
              <input
                className="px-3 py-1.5 mt-2 rounded-md border w-[100%] bg-white"
                type="text"
                name="userid"
                required
                placeholder="Email or Mobile No."
                onChange={(e) => handle(e)}
              />
            </div>
            <div className="relative">
              <div className="flex flex-col items-start text-black">
                <p>Password</p>
                <input
                  className="px-3 py-1.5 mt-2 rounded-md border w-[100%] bg-white"
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
              Login
            </button>
          </form> */}

            {/* <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full rounded-full mt-5 flex justify-center items-center text-sm hover:opacity-[0.7] duration-300 text-[var(--primary-c)]">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button> */}

            <div className=" mt-10 text-xs gap-4 flex justify-between items-center text-[var(--primary-c)]">
              <p
                onClick={handleForgotPassword}
                className="cursor-pointer underline"
              >
                Forgot Password
              </p>
              {usertype === "Mentee" ? (
                <div className="flex flex-row items-center gap-2">
                  <p className="text-right">Don't have an account?</p>
                  <Link to="/signup">
                    <div className="py-2 px-5 bg-white border rounded-full hover:opacity-[0.7] duration-300">
                      Register
                    </div>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center relative justify-center bg-[var(--primary-c)] w-[70%] text-center">
            {/* <img
            src={bgImage}
            className="absolute object-cover top-0 right-0 z-0 h-full opacity-50"
          /> */}
            <div className="text-white px-8 text-3xl font-extrabold z-10">
              TCP Mentorship Program 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
