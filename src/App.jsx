
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LeaderBoard from './components/LeaderBoard/TeamLeaderBoard'

import React from 'react'
<<<<<<< HEAD
import MenteeLeaderBoard from './components/LeaderBoard/MenteeLeaderBoard'

const App = () => {
  return (
    <>
   <LeaderBoard/>
   <MenteeLeaderBoard/>
   </>
=======
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
    <Router>
            <Routes>
              <Route exact path="/" element={ <LeaderBoard /> } />
              <Route exact path="/login" element={ <Login/> } />
              <Route exact path="/signup" element={ <Signup/> } />
            </Routes>
          
        </Router>
   
>>>>>>> e55e1494f5c7e4ab2a23ea6ef575b0d1668a2ea4
  )
}

export default App

