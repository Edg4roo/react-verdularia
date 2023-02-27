import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Logout = () => {

    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    // Borramos el token del local storage
    localStorage.removeItem('token');

    // Cambiamos el contexto de isLogged a false
    userContext.setIsLogged(false);
  
    navigate('/');
};

export default Logout;