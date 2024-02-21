import { useContext, useState } from 'react';
import { logoutUser } from '../../utils/auth.api';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import RegisterWine from '../registerWine/RegisterWine';

const LogOut = () => {
	const [content, setContent] = useState();
	const { userData, setUserData} = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(userData);
	return (
		<div>
			<h2>Welcome {userData.username}</h2>
			<button onClick={() => logoutUser(setUserData, navigate)}>Log Out</button>
			<button onClick={() => setContent('ir a la modal')}>Register Wine</button>
			<RegisterWine closeModal={() => setContent()}>{content}</RegisterWine>
		</div>
	);
};

export default LogOut;
