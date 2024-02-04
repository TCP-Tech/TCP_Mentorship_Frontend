import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home";
import MenteeDashBoard from "./pages/DashBoard/MenteeDashBoard";
import MentorDashboard from "./pages/DashBoard/MentorDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import Team from "./pages/Team";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <Router>
        <ToastContainer 
        position="bottom-right" />
      <Routes>
        <Route exact path="*" element={<NotFoundPage />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/mentee/:name" element={<PrivateRoute element={<MenteeDashBoard />}/>} />
        <Route exact path="/mentor/:name" element={<PrivateRoute element={<MentorDashboard />}/>} />
      </Routes>
    </Router>
  );
};
export default App;
