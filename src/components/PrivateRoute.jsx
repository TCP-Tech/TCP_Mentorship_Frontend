// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isLoggedInMentor = localStorage.getItem("Mentor") !== null;
    const isLoggedInMentee = localStorage.getItem("Mentee") !== null;
  if(isLoggedInMentee) return element;
  if(isLoggedInMentor) return element;
  return <Navigate to="/" />;
};

export default PrivateRoute;
