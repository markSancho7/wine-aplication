import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';

const Foro = ({ wine }) => {
	const { userData } = useContext(AuthContext);
	const [newOpinion, setNewOpinion] = useState({});
	return (
		<>
			<p>FOROOO</p>
			<form onSubmit={event => handleSubmit(event)}>
				<label>opinion</label>
				<textarea
					type='text'
					name='opinion'
					onChange={event =>
						getOpinion(event.target, setNewOpinion, userData, wine)
					}
				/>
				<button type='submit' onClick={()=>saveOpinion(newOpinion)}>
					enviar
				</button>
			</form>
		</>
	);
};
const handleSubmit = event => {
	event.preventDefault();
};

const saveOpinion = async(newOpinion) => {
    await postData(`${URLS.API_OPINIONS}`, newOpinion);
};
const getOpinion = (input, setNewOpinion, userData, wine) => {
	console.log(input.value, userData.email, wine._id);
	setNewOpinion({
		wineId: wine._id,
		userName: userData.email,
		opinion: input.value
	});
};
export default Foro;
