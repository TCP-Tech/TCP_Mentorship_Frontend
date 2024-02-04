import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import LeaderBoard from "../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../components/LeaderBoard/MenteeLeaderBoard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";
import TeamSection from "../components/TeamSection";
const Home = () => {
  const [mentor] = useState(JSON.parse(localStorage.getItem("Mentor")));
  const [mentee] = useState(JSON.parse(localStorage.getItem("Mentee")));
  const navigate = useNavigate();
  useEffect(() => {
    if (mentor) {
      navigate("/mentor/"+mentor?.name);
    }
    if(mentee){
      navigate("/mentee/"+mentee?.name)
    }
  }, [mentor , mentee]);
  return (
    <div id="home">
      <div className="bg-zinc-500 absolute md:-bottom-[10rem] md:left-[10rem] -bottom-[45rem] w-right-[5rem] h-[38rem] md:h-[15.25rem] dark:md:h-[10rem] w-[100vw] rounded-full blur-[100rem] md:w-[68.75rem]"></div>
      <div className="bg-blue-300 absolute -top-[10rem] md:-top-[15rem]  h-[21.25rem] w-[100vw] rounded-full blur-[10rem] md:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      <div className="dark:bg-gray-900">
      <Navbar />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <Counter /> 
      <Wrapper>
        <LeaderBoard />
        <MenteeLeaderBoard />
      </Wrapper>
      <TeamSection />
      <Footer />
      </div>
    </div>
  );
};
export default Home;
