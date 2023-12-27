import React from "react";
import LeaderBoard from "../components/LeaderBoard/TeamLeaderBoard";
import MenteeLeaderBoard from "../components/LeaderBoard/MenteeLeaderBoard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <LeaderBoard />
        <MenteeLeaderBoard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
