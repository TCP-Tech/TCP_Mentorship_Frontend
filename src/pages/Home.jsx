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
  const navigate=useNavigate()
  useEffect(()=>{
      if(mentor){
        navigate("/mentor");
      }
  },[mentor])
  return (
    <div className="dark:bg-gray-900">
    <div class="bg-zinc-500 absolute -bottom-[10rem] -z-10 w-right-[5rem] h-[15.25rem] w-[21.25rem] rounded-full blur-[100rem] sm:w-[68.75rem] dark:bg-[#fff] dark:hidden"></div>
    <div class="bg-blue-300 absolute -top-[10rem] md:-top-[15rem] -z-10  h-[21.25rem] w-[23rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#fff] dark:hidden"></div>
      <Navbar />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <Counter />
      <Wrapper>
        <LeaderBoard />
        <MenteeLeaderBoard />
      </Wrapper>
      <TeamSection/>
      <Footer /> 
    </div>
  );
};
export default Home;
