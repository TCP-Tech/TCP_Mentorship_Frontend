import React from "react";
import HeroSection from "../components/HeroSection";
import LeaderBoard from "../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../components/LeaderBoard/MenteeLeaderBoard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Counter from "../components/Counter";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <Counter />
      <Wrapper>
        <LeaderBoard />
        <MenteeLeaderBoard />
      </Wrapper>
      <Footer />
    </div>
  );
};
export default Home;
