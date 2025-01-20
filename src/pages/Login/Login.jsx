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

  return (
    <div className="flex  h-screen flex-col justify-center">
      <div className="h-screen w-screen">
        <ToastContainer />
        <div className="h-screen w-full bg-white  md:flex-row shadow-lg flex">
          <div className="p-8 dark:bg-gray-900 flex justify-center flex-col w-full md:w-[50%]">
            {/* <Link
            to={"/"}
            className="w-[30%] max-w-[100px] text-center bg-[var(--primary-c)] rounded-md text-white py-2 hover:bg-[var(--tertiary-c)] duration-300"
          >
            Home
          </Link> */}
            <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
              <div className="text-center w-max">
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
                    className="sm:h-36 h-28 w-full object-contain rounded-full aspect-square"
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
                    className="sm:h-36 h-28 w-full object-contain rounded-full aspect-square"
                  />
                  <span className="text-black ">Mentor</span>
                </button>
              </div>
            </div>
            <h2 className="text-center font-bold text-4xl mt-8 text-[var(--primary-c)]">
              {`Login As ${usertype}`}
            </h2>
            <p className="text-center text-xl mt-4 dark:text-white text-black">
              Welcome back, you have been missed!
            </p>

            {usertype === "Mentee" ? <Menteeform /> : <Mentorform />}

            <div className=" mt-7 text-xs  flex justify-center items-center text-[var(--primary-c)]">
              {usertype === "Mentee" ? (
                <div className="flex flex-row items-center w-full justify-between">
                  <p className="text-right">Don't have an account?</p>
                  <Link to="/signup">
                    <div className="py-2 px-5 text-center bg-white border rounded-full hover:opacity-[0.7] duration-300">
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
