import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../../components/cardWine/CardWine';
import { StyledTotalContainer, StyledWinesContainer } from './styles';

const Tranquilos = () => {
	const [wines, setWines] = useState([]);
	let filteredWines = filterByTranquilo(wines);
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	return (
		<StyledTotalContainer>
			<h1>VINOS TRANQUILOS</h1>
			<StyledWinesContainer>
				{filteredWines.map(wine => (
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
const filterByTranquilo = wines => {
	return wines.filter(wine => wine.wineStyle === 'tranquilo');
};
export default Tranquilos;
