import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../../components/cardWine/CardWine';

const Tranquilos = () => {
	const [wines, setWines] = useState([]);

	let filteredWines = filterByTranquilo(wines);
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
const filterByTranquilo = wines => {
	return wines.filter(wine => wine.wineStyle === 'tranquilo');
};
export default Tranquilos;
