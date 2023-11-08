import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from './axiosUrl';

const AuthCheck = ({ pathsToCheck }: { pathsToCheck: string[] }) => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      if (pathsToCheck.some(path => location.pathname.match(new RegExp(`^${path}`)))) {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/');
        } else {
          try {
            const response = await api.get('https://organicflow-server.vercel.app/auth', {
              headers: {
                retornar: true,
                Authorization: `Bearer ${token}`
              }
            });
            console.log(response.data.status);
            if (response.data.status === false) {
              navigate('/');
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    };

    checkAuth();
  }, [location.pathname, navigate, pathsToCheck]);

  return null;
};

export default AuthCheck;
