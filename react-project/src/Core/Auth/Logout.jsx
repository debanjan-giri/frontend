import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../features/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    window.location.href = '/login'; // redirect to login after logout
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
