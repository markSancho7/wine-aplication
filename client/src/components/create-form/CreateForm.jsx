import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../../constants/urls';
import { createData } from '../../utils/users.api';

const CreateForm = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	return (
		<form onSubmit={ev => handleSubmit(ev, user)}>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					value={user.email}
					onInput={ev => setUser({ ...user, email: ev.target.value })}
				/>
			</div>
			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='text'
					value={user.password}
					onInput={ev => setUser({ ...user, password: ev.target.value })}
				/>
			</div>
			<button>Create User</button>
		</form>
	);
};

const handleSubmit = async (ev, user) => {
	ev.preventDefault();
	await createData(URLS.AUTH_REGISTER, user);
};

export default CreateForm;
