
import React from "react";
import HeroSection from '../components/HeroSection/HeroSection'
import LeaderBoard from "../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../components/LeaderBoard/MenteeLeaderBoard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
        <LeaderBoard />
        <MenteeLeaderBoard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
