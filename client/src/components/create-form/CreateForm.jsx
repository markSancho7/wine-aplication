import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { createData } from '../../utils/users.api';
import { StyledForm } from './styles';

const CreateForm = () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});
	const [registerVisible, setregisterVisible] = useState(true);
	return (
		<>
			<button
				onClick={() =>
					changeRegisterVisible(registerVisible, setregisterVisible)
				}
			>
				register
			</button>
			<StyledForm
				onSubmit={ev => handleSubmit(ev, user)}
				$isVisible={registerVisible}
			>
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
			</StyledForm>
		</>
	);
};

const handleSubmit = async (ev, user) => {
	ev.preventDefault();
	await createData(URLS.AUTH_REGISTER, user);
};
const changeRegisterVisible = (registerVisible, setRegisterVisible) => {
	setRegisterVisible(!registerVisible);
};

export default CreateForm;
