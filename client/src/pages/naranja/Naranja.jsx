import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import CardWine from '../../components/cardWine/CardWine';
import {
	StyledPageName,
	StyledTotalContainer,
	StyledWinesContainer
} from './styles';
import useFilter from '../../hooks/useFilter';
import Filters from '../../components/filters/Filters';

const Naranja = () => {
	const [wines, setWines] = useState([]);

	const { filteredWines, setSearchByName, setSearchByGrape } = useFilter(wines);

	const winesFiltereds = filterByNaranja(filteredWines);
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<StyledTotalContainer>
			<Filters
				filterByGrape={setSearchByGrape}
				filterByName={setSearchByName}
			/>
			<StyledPageName>VINOS NARANJAS</StyledPageName>
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
const filterByNaranja = wines => {
	return wines.filter(wine => wine.wineStyle === 'naranja');
};

export default Naranja;
