import React, { useState } from 'react';
import s from './SignUp.module.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/Auth.context';
function SignUp() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const { signup } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const clickHandler = (e) => {
    signup(data.name, data.email, data.password);
  };

  return (
    <div className={s.container}>
      <div className={s.box}>
        <h1>Sign Up</h1>
        <input
          onChange={handleChange}
          id='name'
          placeholder='Name'
          type='text'
          required
          value={data.name}
        />
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
        <button onClick={clickHandler}>Sign Up</button>
      </div>
      <Link to='/'>Already A user</Link>
    </div>
  );
}

export default SignUp;
