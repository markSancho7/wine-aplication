import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import { StyledForm, StyledTotalContainer } from './styles';

const Foro = ({ wine }) => {
	const { userData } = useContext(AuthContext);
	const [newOpinion, setNewOpinion] = useState({});
	return (
		<StyledTotalContainer>
			<p>Escribe tu opinon sobre éste vino</p>
			<StyledForm onSubmit={event => handleSubmit(event)}>
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
			</StyledForm>
		</StyledTotalContainer>
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
		userName: userData.username,
		opinion: input.value
	});
};
export default Foro;
