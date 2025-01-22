import React, { useEffect, useState } from "react";
import { teams } from "../../data/TeamData";
import TeamCompo from "../TeamCompo";
import IndividualTeamLeaderBoard from "./IndividualTeamLeaderBoard";
import close from "../../assets//images/cross.svg";
import closelight from "../../assets//images/cross.png";
import crown from "../../assets//images/crown.png";
import teamimage from "../../assets/images/team.jpg"
import Modal from "react-modal";
import { fetchDataFromApi, fetchDataWithEndPoint } from '../../utils/api';

const LeaderBoard = () => {
  const [Teamdata, setTeamdata] = useState([]);
  const[mentor] = useState(JSON.parse(localStorage.getItem("Mentor"))|| null);
  const [TeamName, setTeamName] = useState("");
  const [TeamPoints, setTeamPoints] = useState("");
  const [menteeData,setmenteeData]=useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClick = (teamName,menteedata,teamPoints) => {
    console.log(teamName,menteedata,teamPoints)
    if(!menteeData || !teamName || teamPoints === null) return;
    setTeamName(teamName);
    setmenteeData(menteedata);
    setTeamPoints(teamPoints);
    console.log(teamPoints)
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const teamd = async()=>{ 
   const data= await fetchDataWithEndPoint('getTeams')
   setTeamdata(data.data)
  //  console.log(data)
   }
  //  console.log("DATA",Teamdata)
  
   useEffect(() => {
     teamd();
   }, [])

   Teamdata?.sort(function (team1, team2) {
    // if(team2.team_score === team1.team_score){
    //  return team1.cumHour_diff - team2.cumHour_diff;
    // }
    // else{
    //   return team2.team_score - team1.team_score;
    // }
    return team1?.team_rank - team2?.team_rank;

   });
   const loggedInMentorRank = Teamdata?.findIndex((item)=> item.alloted_mentor?.name===mentor?.name);
   const loggedInMentorTeamData = Teamdata?.filter((item)=> item.alloted_mentor?.name===mentor?.name);

  return (
    <div id="teamLeaderBoard" className="bg-transparent flex flex-col pt-12">
      {/* LeaderBoard Heading */}
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl p-8 font-bold text-black dark:text-white">
          Team Leaderboard
        </h1>
      </div>
      {/* Team LeaderBoard */}
       {Teamdata?.length?<div className="flex items-center justify-center pt-44 md:pt-60">
        <div className="outer flex flex-col justify-center items-center w-full md:px-5">
          <div className="w-full h-36 md:h-44 dark:bg-gray-800 shadow-sm rounded-2xl flex justify-around border dark:border-gray-600">
            {/* Second Position */}
            <div className="flex flex-col items-center max-w-[150px]">
              <div className="rounded-full overflow-hidden border-4 border-gray-500 bg-gray-300 md:w-28 md:h-28 w-16 h-16 md:-mt-20 -mt-10">
                <img
                  className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                  src={teamimage}
                  alt=""
                />
              </div>
              <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-gray-500 rounded-md md:rounded-lg">
                <div className="transform -rotate-45 text-xs md:text-lg">2</div>
              </div>
              <div className="flex flex-col justify-center text-center space-y-3 mt-6 md:mt-6">
                <h1 className="md:text-lg text-sm p-1 dark:text-white text-black md:max-w-[200px] max-w-[100px] truncate">{Teamdata[1]?.team_name}</h1>
                <h1 className="md:text-xl text-sm text-gray-500">{Teamdata[1]?.team_score}</h1>
              </div>
            </div>
            {/* First Position */}
            <div className="md:w-44 w-28 h-46 bg-slate-100 shadow-md dark:bg-gray-700 rounded-tl-[30px] rounded-tr-[30px] z-20 -mt-14 border dark:border-gray-600">
              <div className="flex flex-col items-center">
                {/* <img className="absolute -mt-32 " src={crown}/> */}
                <svg
                  className="absolute -mt-20 md:-mt-32 w-36 md:w-40 "
                  height="40"
                  viewBox="0 0 34 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3004 11.5684C30.0255 11.3553 29.6916 11.2182 29.3369 11.1729C28.9821 11.1275 28.6208 11.1756 28.294 11.3118L22.2148 13.8219L18.6826 7.90917C18.5138 7.63312 18.2691 7.40355 17.9737 7.24385C17.6782 7.08414 17.3424 7 17.0006 7C16.6587 7 16.3229 7.08414 16.0275 7.24385C15.732 7.40355 15.4874 7.63312 15.3186 7.90917L11.7864 13.8219L5.70711 11.3118C5.37972 11.1758 5.01791 11.1276 4.66256 11.1726C4.30722 11.2176 3.97252 11.354 3.69629 11.5664C3.42006 11.7788 3.21333 12.0587 3.09946 12.3745C2.9856 12.6903 2.96914 13.0294 3.05194 13.3534L6.10358 25.4355C6.16193 25.6694 6.27082 25.8899 6.42364 26.0836C6.57646 26.2773 6.77004 26.4401 6.99264 26.5623C7.29401 26.7298 7.63859 26.8184 7.98983 26.8189C8.16057 26.8186 8.33043 26.796 8.49443 26.7519C14.0568 25.3239 19.9323 25.3239 25.4947 26.7519C26.0026 26.8759 26.5427 26.8077 26.9965 26.5623C27.2205 26.4417 27.4151 26.2793 27.5681 26.0853C27.7211 25.8914 27.8292 25.6701 27.8855 25.4355L30.9492 13.3534C31.0311 13.0293 31.0137 12.6904 30.8991 12.3749C30.7844 12.0595 30.5771 11.7801 30.3004 11.5684Z"
                    fill="#FFAA00"
                  />
                  <circle cx="17" cy="4" r="4" fill="#FFAA00" />
                  <circle cx="17" cy="18" r="3" fill="#BE9502" />
                  <circle cx="31.5" cy="10.5" r="2.5" fill="#FFAA00" />
                  <circle cx="2.5" cy="10.5" r="2.5" fill="#FFAA00" />
                  <circle cx="9.5" cy="19.5" r="1.5" fill="#BE9502" />
                  <circle cx="24.5" cy="19.5" r="1.5" fill="#BE9502" />
                </svg>

                <div className="rounded-full overflow-hidden border-4 border-amber-500 bg-gray-300 md:w-28 md:h-28 w-16 h-16 -mt-10 md:-mt-20">
                  <img
                    className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                    src={teamimage}
                    alt=""
                  />
                </div>
                <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-amber-500 rounded-md md:rounded-lg">
                  <div className="transform -rotate-45 text-xs md:text-lg">
                    1
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center space-y-3 mt-8 md:mt-10">
                  <h1 className="relative md:px-5 md:text-lg text-sm dark:text-white text-black md:max-w-[200px] max-w-[100px] ">{Teamdata[0]?.team_name}</h1>
                  <h1 className="md:text-xl text-sm text-amber-700">{Teamdata[0]?.team_score}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-[150px]">
              <div className="rounded-full overflow-hidden border-4 border-amber-700 bg-amber-700 md:w-28 md:h-28 w-16 h-16 md:-mt-20 -mt-10">
                <img
                  className="object-cover md:w-28 md:h-28 w-16 h-16 rounded-full "
                  src={teamimage}
                  alt=""
                />
              </div>
              <div className="md:w-6 md:h-6 w-4 h-4 flex justify-center origin-top-left rotate-45 -mt-3 md:-mt-5 ml-4 md:ml-6 bg-amber-700 rounded-md md:rounded-lg">
                <div className="transform -rotate-45 text-xs md:text-lg">3</div>
              </div>
              <div className="flex flex-col justify-center text-center space-y-3 mt-6 md:mt-6">
                <h1 className="relative md:text-lg text-sm p-1 dark:text-white text-black md:max-w-[200px] max-w-[100px] truncate">{Teamdata[2]?.team_name}</h1>
                <h1 className="md:text-xl text-sm text-gray-500">{Teamdata[2]?.team_score}</h1>
              </div>
            </div>
            </div>
          <div className="dark:bg-gray-800 overflow-y-scroll px-10 mt-4 h-[70vh] w-full rounded-tl-[40px] rounded-tr-[40px] border dark:border-gray-600">
            {
              mentor&&loggedInMentorTeamData&&
              <div className="" key={loggedInMentorTeamData[0]?.id} onClick={() => handleClick(loggedInMentorTeamData[0]?.team_name,loggedInMentorTeamData[0]?.team_members,loggedInMentorTeamData[0]?.team_score)}>
              <div className="mt-5 rounded-lg border border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-gray-900 p-4 mb-4 cursor-pointer hover:shadow-md transition duration-300">
                <TeamCompo
                  key={loggedInMentorTeamData[0]?.id}
                  teamName={"Your Team"}
                  teamLeaderName={loggedInMentorTeamData[0]?.alloted_mentor?.name}
                  teamPoints={loggedInMentorTeamData[0]?.team_score}
                  id={loggedInMentorRank + 1}
                />
              </div>
              <div className=" h-0 w-full border border-zinc-300 dark:border-zinc-600 border-opacity-50"></div>
            </div>
            }
            {Teamdata?.map((team,index) => (
              <div key={team.id} onClick={() => handleClick(team.team_name,team.team_members,team?.team_score)}>
                <TeamCompo
                  key={team?.id}
                  teamName={team?.team_name}
                  teamLeaderName={team?.alloted_mentor?.name}
                  teamPoints={team?.team_score}
                  id={index +1}
                />
                <div className=" h-0 w-full border border-zinc-300 dark:border-zinc-600 border-opacity-50"></div>
              </div>
            ))}
          </div>
          <div className="">
            <Modal
              isOpen={showModal}
              onRequestClose={closeModal}
              className="dark:bg-gray-800 mx-auto mt-[8%] sm:mt-[2%] bg-gray-100 p-4"
              style={{
                overlay: {
                  zIndex: 10000,
                },
                content: {
                  width: '80%',
                  height: '90%',
                },
              }}
            >
              <button onClick={closeModal} className="dark:bg-gray-800 bg-gray-100">
                <img alt="close" src={close} className="w-5 h-5 hidden dark:block" />
                <img alt="close" src={closelight} className="w-4 h-4 dark:hidden" />
              </button>
              <div className="individual-team-leaderboard ">
                <IndividualTeamLeaderBoard teamName={TeamName} menteeData={menteeData} teamPoints={TeamPoints}/>
              </div>
            </Modal>
          </div>
        </div>
      </div>:" "}
    </div>
  );
};

export default LeaderBoard;
