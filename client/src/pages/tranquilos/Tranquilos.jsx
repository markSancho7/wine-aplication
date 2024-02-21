import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../../components/cardWine/CardWine';
import { StyledTotalContainer, StyledWinesContainer } from './styles';
import useFilter from '../../hooks/useFilter';
import Filters from '../../components/filters/Filters';

const Tranquilos = () => {
	const [wines, setWines] = useState([]);
	
	const {filteredWines, setSearchByName, setSearchByGrape} = useFilter(wines)

	const winesFiltereds = filterByTranquilos(filteredWines)
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<>

			<StyledTotalContainer>
			<Filters filterByGrape={setSearchByGrape} filterByName={setSearchByName} />
				<h1>VINOS TRANQUILOS</h1>
				<StyledWinesContainer>
					{winesFiltereds.map(wine => (
						<div key={wine._id}>
							<CardWine wine={wine} />
						</div>
					))}
				</StyledWinesContainer>
			</StyledTotalContainer>
		</>
	);
};

const chargeWines = async setWines => {
	const data = await getData(URLS.API_WINES);
	setWines(data);
};
const filterByTranquilos = wines => {
	return wines.filter(wine => wine.wineStyle === 'tranquilo');
};
export default Tranquilos;
