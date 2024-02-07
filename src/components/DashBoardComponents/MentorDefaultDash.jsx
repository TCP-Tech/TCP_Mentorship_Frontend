import React,{useEffect, useState} from "react";
import Modal from "react-modal";
import MenteesUrlsCard from "../MenteesUrlsCard";
import Profile from "./Profile";
import close from "../../assets//images/cross.svg";
import closelight from "../../assets//images/cross.png";
import { fetchDataFromApi } from "../../utils/api";
const MentorDefaultDash = () => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const Level=(mentor.Qlevel_count);
  const Topic=(mentor.topic_count);
  const [teamData, setTeamData] = useState();
  const [teamData1, setTeamData1] = useState();
  const [menteeData, setMenteeData] = useState();
  const [showModal, setShowModal] = useState(false);
  const fetchData = async () => {
    try {
      const data = await fetchDataFromApi( "get-team-mentor",mentor.id);

      setTeamData(data.team_data);
      setTeamData1(data);
      
    } catch (error) {
      console.error("Error fetching team data:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (teamData) => {
    setMenteeData(teamData);
    console.log(teamData);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl text-center md:text-left text-black dark:text-white md:pt-5 pb-4 md:pb-1 md:px-2 font-semibold">
          Overview
        </h1>
        <div className="flex flex-col md:flex-row space-y-3 justify-center items-center">
           <div className="grid grid-cols-2 md:w-[50%]">
           <div className="flex flex-col rounded-lg p-4 m-2 bg-red-100 md:mr-2">
           <h1 className="md:text-lg font-semibold mb-2 text-black">Questions Assigned</h1>
            <h1 className="border-b-4 w-1/2 border-red-500 text-2xl py-2 font-bold text-black">
              {mentor.total_q}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2 bg-green-100 md:mr-2">
              <h1 className="md:text-lg font-semibold mb-2 text-black">
                Team Score
              </h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl py-2 font-bold text-black">
              {mentor.score}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2 bg-blue-100 md:mr-2">
              <h1 className="md:text-lg font-semibold mb-2 text-black">
                Team Ranking
              </h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl py-2 font-bold text-black">
                120
              </h1>
            </div>
            <div className="flex flex-col rounded-lg p-4 m-2 bg-violet-100 md:mr-2">
              <h1 className="md:text-lg font-semibold mb-2 text-black">Streak</h1>
              <h1 className="border-b-4 w-1/2 border-violet-500 text-2xl py-2 font-bold text-black">
                0
              </h1>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <Profile mode="mentor" teamData={teamData1}/>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl pt-7 pb-5  text-black dark:text-white font-semibold">
          Problem Stats
        </h1>
        <div className="flex flex-col">
        <div className="md:flex md:flex-wrap grid grid-cols-2  ">
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg  text-black font-semibold mb-2">Easy</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-black text-2xl py-2 font-bold ">
              {Level['Easy'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Medium</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              {Level['Medium'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Hard</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              {Level['Hard'] || 0}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-3xl text-black  dark:text-white pt-7 pb-5 font-semibold">
          Topics covered
        </h1>
        <div className="flex flex-col">
          <div className=" md:flex md:flex-wrap grid grid-cols-2  ">
          <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Arrays</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              {Topic['Array'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">
              Backtracking
              </h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Backtracking'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">
              Binary Trees
              </h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BinaryTrees'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Bit Manipulation</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BitManipulation'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">BST</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['BST'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">DP</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['DynamicProgramming'] || 0}

              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Graphs</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Graphs'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Greedy</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Greedy'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Heap</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
            
              {Topic['Heap'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Linked List</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
             
              {Topic['LinkedList'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Matrix</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Matrix'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-blue-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Stacks & Queues</h1>
              <h1 className="border-b-4 w-1/2 border-blue-500 text-2xl text-black py-2 font-bold">
              
              {Topic['Stacks&Queues'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-red-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Strings</h1>
              <h1 className="border-b-4 w-1/2 border-red-500 text-2xl text-black py-2 font-bold">
             
              {Topic['Strings'] || 0}
              </h1>
            </div>
            <div className="flex flex-col rounded-lg m-2 p-4 md:w-60 bg-green-100 mr-2">
              <h1 className="text-lg text-black font-semibold mb-2">Trie</h1>
              <h1 className="border-b-4 w-1/2 border-green-500 text-2xl text-black py-2 font-bold">
             
              {Topic['Trie'] || 0}
              </h1>
            </div>
          </div>
        </div>

      </div>
      <div>
  <h1 className="text-3xl pt-7 pb-5 text-black dark:text-white font-semibold">
    Mentee Coding Stats
  </h1>
  <div className="dark:bg-gray-800 overflow-y-scroll px-10 mt-4 h-[70vh] w-full rounded-tl-[40px] rounded-tr-[40px] border dark:border-gray-600">
    {teamData?.map((team) => (
      <div key={team.id}>
        {team.team_members.map((member) => (
          <div key={member.id} onClick={() => handleClick(member)}>
            <div className="flex items-center justify-between py-3 mt-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center space-x-2">
                <div className="rounded-full overflow-hidden dark:bg-gray-800 w-12 h-12 mr-2">
                <img className="h-12 w-12 rounded-full" src={member.image} alt={`${member.name}-dp`} />
                </div>
                <div>
                  <h1 className="md:font-semibold text-black dark:text-white">
                    {member.name}
                  </h1>
                  <h2 className="dark:text-gray-400 text-gray-600 text-sm">
                    {member.team_name}
                  </h2>
                </div>
              </div>
              <h1 className="md:font-semibold text-black dark:text-white text-sm md:text-lg">
                {member.score} Points
              </h1>
            </div>
            <div className="h-0 w-full border border-zinc-300 dark:border-zinc-600 border-opacity-50"></div>
          </div>
        ))}
      </div>
    ))}
  </div>
</div>

          <div className="flex items-center justify-center">
          <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="dark:bg-gray-800 mx-auto mt-[8%] sm:mt-[2%] bg-gray-100 p-4"
        style={{
          overlay: {
            zIndex: 10000,
          },
          content: {
            width:"90%",
            maxWidth: "700px",
            height:"80%",
          },
        }}
      >
        <button onClick={closeModal} className="dark:bg-gray-800 bg-gray-100">
          <img
            alt="close"
            src={close}
            className="w-5 h-5 hidden dark:block"
          />
          <img
            alt="close"
            src={closelight}
            className="w-4 h-4 dark:hidden"
          />
        </button>
        <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-center text-black md:text-2xl text-xl dark:text-white">
          {menteeData? menteeData?.name : "Mentee"}'s Profile
        </h1>
        <div className="team-profile-members overflow-y-scroll h-[80vh] mt-12">
          {menteeData && (
            <MenteesUrlsCard
              image={menteeData.image}
              name={menteeData.name}
              codechefID={menteeData.codechefID}
              codeforcesID={menteeData.codeforcesID}
              leetcodeID={menteeData.leetcodeID}
              gfgID={menteeData.gfgID}
              hackerrankID={menteeData.hackerrankID}
              points={menteeData.score}
              solvedQ={menteeData.solvedQ}
            />
          )}
        </div>
        </div>
      </Modal>
          </div>
    </>
  );
};

export default MentorDefaultDash;
