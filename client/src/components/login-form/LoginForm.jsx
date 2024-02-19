import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { loginRequest } from '../../utils/auth.api';

const LoginForm = () => {
	const { userData, setUserData, loading } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (!userData) return;
		navigate('/');
	}, [userData]);

	if (loading) return;

	return (
		<form onSubmit={event => handleSubmit(event, loginData, setUserData)}>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					value={loginData.email}
					onInput={ev => setLoginData({ ...loginData, email: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					value={loginData.password}
					onInput={ev =>
						setLoginData({ ...loginData, password: ev.target.value })
					}
				/>
			</div>
			<button>LOGIN</button>
		</form>
	);
};

const handleSubmit = async (event, loginData, setUserData) => {
	event.preventDefault();
	try {
		await loginRequest(loginData, setUserData);
	} catch (error) {
		console.error('Error de inicio de sesión:', error);
		// Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error
	}
};

export default LoginForm;
