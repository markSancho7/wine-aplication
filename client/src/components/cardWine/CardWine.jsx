import { useState } from 'react';
import UpdateWine from '../updateWine/UpdateWine';
import { deleteData } from '../../utils/api';
import { URLS } from '../../constants/urls';

const CardWine = ({ wine }) => {
	const [content, setContent] = useState();
	return (
		<div>
			<h3>{wine.name}</h3>
			<p>{wine.countrie}</p>
			<p>{wine.grape}</p>
			<p>{wine.color}</p>
			<div>
				<button onClick={() => setContent('ir a la modal')}>Edit</button>
				<button onClick={() => userDelete(wine)}>Delete</button>
				<UpdateWine wine={wine} closeModal={() => setContent()}>
					{content}
				</UpdateWine>
			</div>
		</div>
	);
};
const userDelete = async wine => {
	await deleteData(`${URLS.API_WINES}/${wine._id}`);
};
export default CardWine;
