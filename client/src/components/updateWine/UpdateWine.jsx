import { createPortal } from 'react-dom';
import { patchData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import { useState } from 'react';
import { StyledContainerRegisterWine } from './styles';

const UpdateWine = ({ wine, closeModal, children }) => {
	if (!children) return;
	const [updateWine, setUpdateWine] = useState(wine);
	return createPortal(
		<StyledContainerRegisterWine>
			<button onClick={closeModal}>X</button>
			<form onSubmit={event => handleSubmit(event)}>
				<div>
					<label>Rute Image</label>
					<input
						type='text'
						name='ruteImg'
						defaultValue={wine.ruteImg}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Name Wine</label>
					<input
						type='text'
						name='name'
						defaultValue={wine.name}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Price</label>
					<input
						type='text'
						name='price'
						defaultValue={wine.price}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Countrie</label>
					<input
						type='text'
						name='countrie'
						defaultValue={wine.countrie}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Grape</label>
					<input
						type='text'
						name='grape'
						defaultValue={wine.grape}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Producer</label>
					<input
						type='text'
						name='producer'
						defaultValue={wine.producer}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<label>Color Wine</label>
					<select
						name='color'
						id='color'
						defaultValue={wine.color}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
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
						defaultValue={wine.wineStyle}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
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
						defaultValue={wine.description}
						onChange={event =>
							changePropsWine(event.target, updateWine, setUpdateWine)
						}
					/>
				</div>
				<div>
					<button type='submit' onClick={() => updatingWine(updateWine, wine)}>
						Submit
					</button>
				</div>
			</form>
		</StyledContainerRegisterWine>,
		document.getElementById('modalUpdate')
	);
};
const handleSubmit = event => {
	event.preventDefault();
};
const updatingWine = async (updateWine, wine) => {
	await patchData(`${URLS.API_WINES}/${wine._id}`, updateWine);
};
const changePropsWine = (newValue, updateWine, setUpdateWine) => {
	const { name, value } = newValue;
	const updatedChangesWine = { ...updateWine, [name]: value };
	setUpdateWine(updatedChangesWine);
};

export default UpdateWine;
