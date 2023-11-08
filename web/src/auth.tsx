import { useEffect,useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import api from './axiosUrl';
import Navbar from 'components/Navbar';

const PrivateRoute = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/sessao/login');
      } else {
        try {
          const response = await api.get('http://localhost:3000/auth', {
            headers: {
              retornar: true,
              Authorization: `Bearer ${token}`
            }
          });
          console.log(response.data.status);
          if (response.data.status === false) {
            navigate('/sessao/login');
          }else{
            const userData = response.data.user; // Aqui você pega os dados do usuário
            console.log(userData);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkAuth();
  }, [navigate]);

  return <Navbar />;
};

export default PrivateRoute;
