import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import CardWine from '../../components/cardWine/CardWine';

const Espumosos = () => {
	const [wines, setWines] = useState([]);

	let filteredWines = filterByEspumosos(wines);
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
const filterByEspumosos = wines => {
	return wines.filter(wine => wine.wineStyle === 'espumoso');
};

export default Espumosos;
