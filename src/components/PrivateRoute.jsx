// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem("Mentor") !== null;

  return isLoggedIn ? element : <Navigate to="/" />;
};

export default PrivateRoute;
