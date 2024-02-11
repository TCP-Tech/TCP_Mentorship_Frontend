import React from "react";
import CreateTeam from "./CreateTeam";
const Profile = ({ mode , teamData }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      {teamData && teamData.team_data ? (
        <div className="w-full px-6 py-4 bg-white rounded-md shadow-md">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-x-4">
            <div className="md:w-2/3 md:order-2">
            <div className="flex items-start space-x-1">
                <h1 className="font-semibold md:text-lg text-black">
                  Team Name :
                </h1>
                <p className="font-normal md:text-lg text-gray-400">
                {teamData?.team_data[0]?.team_name}
                </p>
              </div>
              <div className="flex items-start space-x-1 mt-2">
                <h1 className="font-semibold md:text-lg text-black ">
                  Assigned {mode === "mentee" ? "Mentor" : "Mentees"} :
                </h1>
                <p className="font-normal md:text-lg text-gray-400">
                    {mode === "mentee"
                      ? teamData?.mentor_data?.name
                      : teamData?.team_data[0]?.team_members.map((member) => member.name).join(", ")}
                  </p>
              </div>
              
              <div className="flex mt-6">
                <div className="mr-4 text-left">
                  <span className="text-xl font-bold text-black">
                    {teamData?.team_data[0]?.team_score}
                  </span>
                  <span className="block text-sm text-gray-400">Team Score</span>
                </div>
                <div className="mr-4 text-left">
                  <span className="text-xl font-bold text-black">--</span>
                  <span className="block text-sm text-gray-400">Team Rank</span>
                </div>
                <div className="text-left">
                  <span className="text-xl font-bold text-black">
                    --
                  </span>
                  <span className="block text-sm text-gray-400">Overall Rank</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ):(
        <div  className="border flex justify-center items-center">
          { mode=="mentee" ? <h1>
            No Teams Created yet wait  for your Mentor to create one!
           </h1>
           :
           <CreateTeam/>
           }
        </div>
      )}
    </div>
  );
};

export default Profile;
