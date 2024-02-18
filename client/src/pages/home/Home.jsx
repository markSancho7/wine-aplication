import { useState } from 'react';
import AllWines from '../../components/allWines/AllWines';
import RegisterWine from '../../components/registerWine/RegisterWine';
import { StyledTotalContainer, StyledWinesContainer } from './styles';

const Home = () => {
	const [content, setContent] = useState();
	const [wineName, setWineName] = useState();
	const [wineGrape, setWineGrape] = useState();
	return (
		<StyledTotalContainer>
			<h1>TODOS LOS VINOS</h1>
			<div>
				<label>Filtrar por nombre</label>
				<input
					onChange={event => filterByName(event.target.value, setWineName)}
				></input>
			</div>
			<div>
				<label>Filtrar por uva</label>
				<input
					onChange={event => filterByGrape(event.target.value, setWineGrape)}
				></input>
			</div>
			<button onClick={() => setContent('ir a la modal')}>Register Wine</button>
			<RegisterWine closeModal={() => setContent()}>{content}</RegisterWine>
			<StyledWinesContainer>
				<AllWines filteredName={wineName} filteredGrape={wineGrape} />
			</StyledWinesContainer>
		</StyledTotalContainer>
	);
};
const filterByGrape = (value, setWineGrape) => {
	setWineGrape(value);
};
const filterByName = (value, setWineName) => {
	setWineName(value);
};
export default Home;
