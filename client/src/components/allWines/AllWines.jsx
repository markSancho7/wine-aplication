import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../cardWine/CardWine';

const AllWines = () => {
	const [wines, setWines] = useState([]);

	useEffect(() => {
		chargeWines(setWines);
	}, []);
	console.log(wines);
	return (
		<>
			{wines.map(wine => (
				<div key={wine._id}>
					<CardWine wine={wine} />
				</div>
			))}
		</>
	);
};

const chargeWines = async setWines => {
	const data = await getData(URLS.API_WINES);
	setWines(data);
};
export default AllWines;
