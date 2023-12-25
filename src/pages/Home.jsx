import React from 'react'
import LeaderBoard from '../components/LeaderBoard/TeamLeaderBoard'
import MenteeLeaderBoard from '../components/LeaderBoard/MenteeLeaderBoard'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <LeaderBoard/>
        <MenteeLeaderBoard/>
    </div>
  )
}

export default Home