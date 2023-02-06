import { useState, useContext, createContext, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import Loader from '../components/loading/Loading.component';

const AuthContext = createContext();

const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return value;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const { data } = await axios.post(
          'auth/whoami',
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(data);
        setUser(data.data);
        axios.defaults.headers.common['Authorization'] = token;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setUser(null);
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const signin = async (email, password) => {
    console.log('here');
    try {
      const { data } = await axios.post('auth/signin', {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem('token', data.data);
      checkUser();
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      if (!name || !email || !password) return alert('Please fill all the fields');
      const { data } = await axios.post('auth/signup', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', data.data);
      checkUser();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    signin,
    signup,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
export default useAuth;
