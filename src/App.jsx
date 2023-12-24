import { useState } from 'react'
import LeaderBoard from './components/LeaderBoard/TeamLeaderBoard'

import React from 'react'
import MenteeLeaderBoard from './components/LeaderBoard/MenteeLeaderBoard'

const App = () => {
  return (
    <>
   <LeaderBoard/>
   <MenteeLeaderBoard/>
   </>
  )
}

export default App
