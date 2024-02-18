import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import CardWine from '../../components/cardWine/CardWine';

const Naranja = () => {
	const [wines, setWines] = useState([]);

	let filteredWines = filterByNaranja(wines);
	console.log(filteredWines);
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<>
			{filteredWines.map(wine => (
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
const filterByNaranja = wines => {
	return wines.filter(wine => wine.wineStyle === 'naranja');
};

export default Naranja;
