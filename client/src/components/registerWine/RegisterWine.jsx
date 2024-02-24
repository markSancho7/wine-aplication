import { useState } from 'react';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import { createPortal } from 'react-dom';
import { StyledContainerRegisterWine } from './styles';

const RegisterWine = ({ closeModal, children }) => {
	if (!children) return;
	const [newWine, setNewWine] = useState({
		ruteImg: '',
		name: '',
		price: '',
		producer: '',
		countrie: '',
		grape: '',
		color: 'blanco',
		graduation: '',
		wineStyle: 'tranquilo',
		description: ''
	});

	return createPortal(
		<StyledContainerRegisterWine>
			<button onClick={closeModal}>X</button>
			<p>REGISTER WINE</p>
			<form onSubmit={event => handleSubmit(event)}>
				<div>
					<label>Rute Image</label>
					<input
						type='text'
						name='ruteImg'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Name Wine</label>
					<input
						type='text'
						name='name'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Price</label>
					<input
						type='text'
						name='price'
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
					<label>Productor</label>
					<input
						type='text'
						name='producer'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Graduación</label>
					<input
						type='text'
						name='graduation'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					/>
				</div>
				<div>
					<label>Color</label>
					<select
						name='color'
						id='color'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					>
						<option value='blanco'>Blanco</option>
						<option value='tinto'>Tinto</option>
						<option value='rosado'>Rosado</option>
					</select>
				</div>
				<div>
					<label>Tipo de vino</label>
					<select
						name='wineStyle'
						id='wineStyle'
						onChange={event => creatingWine(event.target, newWine, setNewWine)}
					>
						<option value='tranquilo'>Tranquilo</option>
						<option value='espumoso'>Espumoso</option>
						<option value='jerez'>Jerez</option>
						<option value='naranja'>Naranja</option>
					</select>
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
		</StyledContainerRegisterWine>,
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
