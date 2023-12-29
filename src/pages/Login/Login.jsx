import React, { useEffect, useState } from "react";
import Mentorimg from "../../assets/images/Mentorimg.jpg";
import Menteeimg from "../../assets/images/Menteeimg.jpg";
import MenteeLog from "./MenteeLog";
import Mentorlog from "./Mentorlog";

const Login = () => {
  const [usertype, setusertype] = useState("Mentee");

  const mentorlogin = () => {
    setusertype("Mentor");
  
  };

  const Menteelogin = () => {
    setusertype("Mentee");
  
  };

  return (
    <div className="flex h-screen flex-col justify-center">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className=" text-center">
          <button
            type="button"
            id="mentee"
            className={`rounded-full mx-1 my-1 p-2 ${
              usertype === "Mentee" ? "border-4" : " "
            } border-blue-600`}
            onClick={Menteelogin}
          >
            <img src={Menteeimg} alt="" className="h-36 w-36 rounded-full" />
            <span className="text-black">Mentee</span>
          </button>
          <button
            type="button"
            id="mentor"
            className={`rounded-full p-2 ${
              usertype === "Mentor" ? "border-4" : " "
            } border-blue-600`}
            onClick={mentorlogin}
          >
            <img src={Mentorimg} alt="" className="h-36 w-36 rounded-full" />
            <span className="text-black">Mentor</span>
          </button>
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your {usertype} account
        </h2>
      </div> */}

      {usertype == "Mentee" ? <MenteeLog /> : <Mentorlog />}
    </div>
  );
};

export default Login;
