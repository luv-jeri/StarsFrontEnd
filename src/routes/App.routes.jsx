import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../pages/App/profile/Profile.jsx';
import Home from '../pages/App/home/Home.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
