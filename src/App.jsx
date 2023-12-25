
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from 'react'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route exact path="/login" element={ <Login/> } />
              <Route exact path="/signup" element={ <Signup/> } />
            </Routes>
          
        </Router>
   
  )
}



export default App

