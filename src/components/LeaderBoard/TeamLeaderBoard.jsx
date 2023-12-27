import React, { useEffect, useState } from "react";
import fb from "../../assets/images/facebook.svg";
import { teams } from "../../data/TeamData";
import TeamCompo from "../TeamCompo";
import IndividualTeamLeaderBoard from "./IndividualTeamLeaderBoard";
import close from "../../assets//images/cross.png";
import Modal from "react-modal";

const LeaderBoard = () => {
  const [teamName, setTeamName] = useState("Team A");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setShowModal(false); // Hide the modal on small screens initially
      } else {
        setShowModal(true); // Show the individual leaderboard by default on larger screens
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (teamName) => {
    setTeamName(teamName);
    if (window.innerWidth <= 768) {
      setShowModal(true); // Show the modal when clicking on a team on small screens
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-12 gap-4 bg-white">
      {/* LeaderBoard Heading */}
      <div className="col-span-12 text-center">
        <h1 className="md:text-5xl text-3xl p-8 font-bold text-black">
          Team LeaderBoard
        </h1>
      </div>

      {/* Team LeaderBoard */}
      <div className="col-span-12 md:col-span-6 md:pl-5 md:p-0 p-3">
        <div className="text-black flex flex-col text-center">
          <div className="bg-[#004AAD]  overflow-hidden py-6 md:h-[50vh] h-[50%] rounded-md">
            {/* Team data placeholders */}
            <div className="grid grid-cols-3 gap-4 p-10">
              {/* Placeholder team data */}
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden bg-gray-300 md:w-28 md:h-28 w-16 h-16 mt-4"></div>
                <h1 className="md:text-xl text-sm">Team-Name</h1>
                <h1 className="md:text-xl text-sm">1st one</h1>
                <div className="gradient-box sm:h-32 sm:w-32 h-24 w-14 bg-gradient-to-t opacity-50 from-transparent to-white mt-4 flex justify-center items-center">
                  <p className="sm:text-6xl text-4xl text-white">2</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden bg-gray-300 md:w-28 md:h-28 w-16 h-16 -mt-6"></div>
                <h1 className="md:text-xl text-sm">Team-Name</h1>
                <h1 className="md:text-xl text-sm">1st one</h1>
                <div className="gradient-box sm:h-40 sm:w-32 w-20 h-32 bg-gradient-to-t opacity-50 from-transparent to-white mt-4  flex justify-center items-center">
                  <p className="sm:text-6xl text-4xl text-white">1</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden bg-gray-300 md:w-28 md:h-28 w-16 h-16 mt-4"></div>
                <h1 className="md:text-xl text-sm">Team-Name</h1>
                <h1 className="md:text-xl text-sm">1st one</h1>
                <div className="gradient-box sm:h-32 sm:w-32 h-24 w-14 bg-gradient-to-t opacity-50 from-transparent to-white mt-4 flex justify-center items-center">
                  <p className="sm:text-6xl text-4xl text-white">3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-y-scroll p-10 h-[70vh]">
            {teams.map((team, index) => (
              <div onClick={() => handleClick(team.teamName)}>
                <TeamCompo
                  key={index}
                  teamName={team.teamName}
                  teamLeaderName={team.leader}
                  teamPoints={team.pointsScored}
                  id={index}
                  teamDp={fb}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual-Team LeaderBoard */}
      <div className="col-span-12 md:col-span-6 rounded-md bg-slate-100 mr-2">
        {window.innerWidth > 768 ? ( // Display by default on large screens
          <div className="individual-team-leaderboard">
            <IndividualTeamLeaderBoard teamName={teamName} />
          </div>
        ) : (
          <Modal isOpen={showModal} onRequestClose={closeModal}>
            <button onClick={closeModal} className="bg-white">
              <img alt="close" src={close} className="w-5 h-5" />
            </button>
            <div className="individual-team-leaderboard">
              <IndividualTeamLeaderBoard teamName={teamName} />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
