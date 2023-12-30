import React, { useEffect, useState } from "react";

import Chart from "../components/Chart";

const Profile = () => {
  return (
    <>
      <div className=" w-full py-7 border">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="md:text-3xl text-2xl font-semibold text-black">
              Profile
            </h1>
            <div className="mentee-profile-pic border-2 border-primary rounded-full p-2">
              <img
                className="object-cover md:w-28 md:h-28 order-1 w-12 h-12 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="profile-pic"
              />
            </div>
            <div>
              <h1 className="md:text-lg font-semibold text-center text-black">
                Mentee 1
              </h1>
              <h1 className="text-gray-400 md:text-lg text-sm">
                mentee1@email.com
              </h1>
            </div>
          </div>
          <div className="flex items-center text-center justify-center px-5 space-x-1 mr-10">
            <h1 className="font-semibold md:text-lg text-sm text-black">
              Assigned Mentor :
            </h1>
            <h1 className="font-normal md:text-lg text-sm text-gray-400">
              Mentor Name
            </h1>
          </div>
          <div className="flex items-center justify-center text-center px-5 space-x-1">
            <h1 className="font-semibold md:text-lg text-sm text-black">
              Achievements :
            </h1>
            <h1 className="font-normal md:text-lg text-sm text-gray-400">
              No achievements yet!
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl text-black font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-gray-400">Points</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl text-black font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-gray-400">Team Rank</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-black text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-gray-400">Overall Rank</span>
                </div>
              </div>
            </div>
            <div className="w-fit h-fit pt-6">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
