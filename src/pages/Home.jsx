import React from 'react'
import LeaderBoard from '../components/LeaderBoard/TeamLeaderBoard'
import MenteeLeaderBoard from '../components/LeaderBoard/MenteeLeaderBoard'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <LeaderBoard/>
        <MenteeLeaderBoard/>
        <Footer/>
    </div>
  )
}

export default Home