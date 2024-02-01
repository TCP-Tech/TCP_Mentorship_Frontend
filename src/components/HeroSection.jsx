import React from "react";
import { useEffect } from "react";
// import "./HeroSection.css";
// import blob from "../../assets/images/blob.svg";
// import blob2 from "../../assets/images/blob2.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/images/heroAnimation.json";
import { fetchDataFromApiWithResponse } from "../utils/api";

const HeroSection = () => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const body = { username: "virajchandra51@gmail.com", password: "viraj123" };
  //   const data = await fetchDataFromApiWithResponse(body, "login");
  //   console.log(data.data.name);
  // };

  return (
    <div className="flex lg:justify-center lg:items-center md:my-16 my-12">
      <div className="flex flex-col card bg-transparent lg:flex-row">
        <div className="lg:w-[60%] flex flex-col justify-start pb-5">
          <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-bold mt-7 z-20">
            TCP PRESENTS
          </h3>
          <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--primary-c)] dark:from-blue-100 dark:to-blue-500 font-bold md:mt-8 mt-6 mr-0 sm:mr-10 lg:mr-0 md:text-left">
            MENTORSHIP
          </h1>
          <h1 className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--primary-c)] dark:from-blue-100 dark:to-blue-500 font-bold mr-0 sm:mr-10 lg:mr-0 pb-4 md:text-left">
            PROGRAM 2024
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-white md:mt-10 mt-6 m-0 sm:mr-10 lg:mr-0 font-bold ">
            Empower Your Coding Journey with Expert Mentorship.
          </p>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-white mt-5 m-0 sm:mr-10 lg:mr-0">
            Elevate your skills in competitive programming, data structures and
            algorithms, and software development with our personalized
            mentorship program.
          </p>
        </div>
        <div className="lg:w-[40%] flex justify-end items-end">
          <Player src={heroAnimation} className="player" loop autoplay />
        </div>
        {/* <img className="blob m-0 p-0" src={blob} /> */}
      </div>
      {/* <p className='text-2xl font-bold text-gray-900'> Visitor Count
    <img src="https://hitwebcounter.com/counter/counter.php?page=10496826&style=0027&nbdigits=9&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" />
    </p> */}
    </div>
  );
};

export default HeroSection;
