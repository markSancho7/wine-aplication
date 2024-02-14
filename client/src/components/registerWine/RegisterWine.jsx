import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import { createPortal } from 'react-dom';

const RegisterWine = ({ closeModal, children }) => {
	if (!children) return;
	const [newWine, setNewWine] = useState({
		name: '',
		countrie: '',
		grape: '',
		color: '',
		description: ''
	});

	return createPortal(
		<>
			<button onClick={closeModal}>X</button>
			<p>REGISTER WINE</p>
			<form onSubmit={event => handleSubmit(event)}>
				<div>
					<label>Name Wine</label>
					<input
						type='text'
						name='name'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Countrie</label>
					<input
						type='text'
						name='countrie'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Grape</label>
					<input
						type='text'
						name='grape'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Color Wine</label>
					<input
						type='text'
						name='color'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Description</label>
					<input
						type='text'
						name='description'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<button type='submit' onClick={() => registingWine(newWine)}>
						Submit
					</button>
				</div>
			</form>
		</>,
		document.getElementById('modalRegister')
	);
};
const handleSubmit = event => {
	event.preventDefault();
};
const registingWine = async newWine => {
	await postData(`${URLS.API_WINES}`, newWine);
};
const creatingWine = (input, newWine, setNewWine) => {
	const { name, value } = input;
	const createWine = { ...newWine, [name]: value };
	setNewWine(createWine);
};

export default RegisterWine;
