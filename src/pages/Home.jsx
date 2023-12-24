import React from 'react'
import LeaderBoard from '../components/LeaderBoard/TeamLeaderBoard'
import MenteeLeaderBoard from '../components/LeaderBoard/MenteeLeaderBoard'

const Home = () => {
  return (
    <div>
        <LeaderBoard/>
        <MenteeLeaderBoard/>
    </div>
  )
}

export default Home