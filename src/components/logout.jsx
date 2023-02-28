import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const Logout = () => {

    const navigate = useNavigate();

    const { isLogged } = useContext(UserContext);

    if (isLogged === false) {
        navigate('/');
    }

    const userContext = useContext(UserContext);

    localStorage.removeItem('token');

    userContext.setIsLogged(false);
    userContext.setUser({username:''});
  
    navigate('/');
};

export default Logout;