import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import CardWine from '../../components/cardWine/CardWine';
import { StyledTotalContainer, StyledWinesContainer } from './styles';
import useFilter from '../../hooks/useFilter';
import Filters from '../../components/filters/Filters';

const Jerez = () => {
	const [wines, setWines] = useState([]);

	const {filteredWines, setSearchByName, setSearchByGrape} = useFilter(wines)

	const winesFiltereds = filterByJerez(filteredWines);
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<StyledTotalContainer>
			<Filters filterByGrape={setSearchByGrape} filterByName={setSearchByName} />
			<StyledWinesContainer>
				{winesFiltereds.map(wine => (
					<div key={wine._id}>
						<CardWine wine={wine} />
					</div>
				))}
			</StyledWinesContainer>
		</StyledTotalContainer>
	);
};

const chargeWines = async setWines => {
	const data = await getData(URLS.API_WINES);
	setWines(data);
};
const filterByJerez = wines => {
	return wines.filter(wine => wine.wineStyle === 'jerez');
};

export default Jerez;
