import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/auth/signIn/SignIn';
import SignUp from '../pages/auth/signUp/SignUp';

function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default AuthRoutes;
