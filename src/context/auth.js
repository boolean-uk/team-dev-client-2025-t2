import { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from '../components/header';
import Modal from '../components/modal';
import Navigation from '../components/navigation';
import useAuth from '../hooks/useAuth';
import { createProfile, login, register } from '../service/apiClient';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      navigate(location.pathname || '/');
    }
  }, [location.pathname, navigate]);

  const handleLogin = async (email, password) => {
    const res = await login(email, password);

    if (!res.data.token) {
      navigate('/login');
      return res;
    }
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
    navigate('/');
    return res;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const handleRegister = async (email, password) => {
    const res = await register(email, password);
    if (res.status === 'success') {
      const loginRes = await login(email, password);
      localStorage.setItem('token', loginRes.data.token);
      setToken(loginRes.data.token);
      navigate('/verification');
    }

    return res;
  };

  const handleCreateProfile = async (firstName, lastName, githubUrl, bio) => {
    const { userId } = jwt_decode(token);

    await createProfile(userId, firstName, lastName, githubUrl, bio);

    localStorage.setItem('token', token);
    navigate('/');
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onRegister: handleRegister,
    onCreateProfile: handleCreateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={'/login'} replace state={{ from: location }} />;
  }

  return (
    <div className="container">
      <Header />
      <Navigation />
      <Modal />
      {children}
    </div>
  );
};

export { AuthContext, AuthProvider, ProtectedRoute };
