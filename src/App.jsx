import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home";
import Newsignup from "./pages/Signup/Signup";
import MenteeDashBoard from "./pages/MenteeDashBoard";
import MentorDashboard from "./pages/MentorDashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<MenteeDashBoard />} />
        <Route exact path="/mentor" element={<MentorDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
