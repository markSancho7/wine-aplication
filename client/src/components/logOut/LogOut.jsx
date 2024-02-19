import { useContext } from 'react';
import { logoutUser } from '../../utils/auth.api';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<div>
			<h2>Welcome {userData.email}</h2>
			<button onClick={() => logoutUser(setUserData, navigate)}>Log Out</button>
		</div>
	);
};

export default LogOut;
