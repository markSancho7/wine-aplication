import {
	StyledPageName,
	StyledTotalContainer,
	StyledWinesContainer
} from './styles';
import useFilter from '../../hooks/useFilter';
import Filters from '../../components/filters/Filters';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import CardWine from '../../components/cardWine/CardWine';

const Home = () => {
	const [wines, setWines] = useState([]);
	useEffect(() => {
		chargeWines(setWines);
	}, []);
	const { filteredWines, setSearchByName, setSearchByGrape } = useFilter(wines);
	return (
		<StyledTotalContainer>
			<Filters
				filterByGrape={setSearchByGrape}
				filterByName={setSearchByName}
			/>

			<StyledTotalContainer>
				<StyledPageName>TODOS LOS VINOS</StyledPageName>
				<StyledWinesContainer>
					{filteredWines.map(wine => (
						<div key={wine._id}>
							<CardWine wine={wine} />
						</div>
					))}
				</StyledWinesContainer>
			</StyledTotalContainer>
		</StyledTotalContainer>
	);
};
const chargeWines = async setWines => {
	const data = await getData(URLS.API_WINES);
	setWines(data);
};

export default Home;
