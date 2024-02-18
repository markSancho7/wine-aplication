import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../cardWine/CardWine';

const AllWines = ({ filteredName, filteredGrape }) => {
	const [wines, setWines] = useState([]);

	let wineFiltered = filterByName(wines, filteredName);
	wineFiltered = filterByGrape(wineFiltered, filteredGrape);

	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<>
			{wineFiltered.map(wine => (
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

const filterByName = (wines, filteredName) => {
	if (!filteredName) return [...wines];
	else {
		return wines.filter(wine =>
			wine.name.toLowerCase().includes(filteredName.toLowerCase())
		);
	}
};
const filterByGrape = (wines, filteredGrape) => {
	if (!filteredGrape) return [...wines];
	else {
		return wines.filter(wine =>
			wine.grape.toLowerCase().includes(filteredGrape.toLowerCase())
		);
	}
};
export default AllWines;
