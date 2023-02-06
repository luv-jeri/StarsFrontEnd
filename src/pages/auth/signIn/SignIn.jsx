import React, { useState } from 'react';
import s from './SignIn.module.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/Auth.context';
function SignIn() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const { signin } = useAuth();
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const clickHandler = (e) => {
    signin(data.email, data.password);
  };

  return (
    <div className={s.container}>
      <div className={s.box}>
        <h1>Sign In</h1>
        <input
          onChange={handleChange}
          id='email'
          placeholder='Email'
          type='email'
          required
          value={data.email}
        />
        <input
          onChange={handleChange}
          id='password'
          placeholder='Password'
          type='password'
          required
          value={data.password}
        />
        <button onClick={clickHandler}>Sign In</button>
      </div>
      <Link to='/signup'>Not a User</Link>
    </div>
  );
}

export default SignIn;
