import { useState } from 'react';

const useFilter = wines => {
	const [searchByName, setSearchByName] = useState('');
	const [searchByGrape, setSearchByGrape] = useState('');

	let filteredWines = filterByName(wines, searchByName);
	filteredWines = filterByGrape(filteredWines, searchByGrape);

	return { filteredWines, setSearchByName, setSearchByGrape };
};

const filterByName = (wines, searchByName) => {
	if (!searchByName) return [...wines];
	else {
		return wines.filter(wine =>
			wine.name.toLowerCase().includes(searchByName.toLowerCase())
		);
	}
};
const filterByGrape = (wines, searchByGrape) => {
	if (!searchByGrape) return [...wines];
	else {
		return wines.filter(wine =>
			wine.grape.toLowerCase().includes(searchByGrape.toLowerCase())
		);
	}
};

export default useFilter;
