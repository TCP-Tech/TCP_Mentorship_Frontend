import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home";
import MenteeDashBoard from "./pages/DashBoard/MenteeDashBoard";
import MentorDashboard from "./pages/DashBoard/MentorDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import Team from "./pages/Team";
import useDetectDevTools from "./utils/hooks/useDetectDevTools";
import Gzbxy from "./components/Gzbxy";
// import DisableRightClick from "./utils/DisableRightClick";

const Samp = () => {
  useDetectDevTools(); 
  return (
    // <div>samp</div>
    null
  )
}

const App = () => {

  return (
    <Router>
      {/* <DisableRightClick/> */}
      <Samp/>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentee/:name" element={<PrivateRoute element={<MenteeDashBoard />} />} />
        <Route path="/mentor/:name" element={<PrivateRoute element={<MentorDashboard />} />} />
        <Route path="/yareyarexuo09" element={<Gzbxy />} />
      </Routes>
    </Router>
  );
};

export default App;
