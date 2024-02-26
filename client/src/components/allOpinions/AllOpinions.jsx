import { useEffect, useState } from 'react';
import { URLS } from '../../constants/urls';
import { getData } from '../../utils/api';
import {
	StyledContainerOp,
	StyledContainerOpinions,
	StyledNameOpinion,
	StyledOpinion
} from './styles';

const AllOpinions = wine => {
	const [opinions, setOpinions] = useState([]);

	useEffect(() => {
		chargeOpinions(setOpinions);
	}, []);

	const wineOpinion = filterWineOpinion(opinions, wine);

	return (
		<>
			<StyledContainerOpinions>
				{wineOpinion.map(opinion => (
					<StyledContainerOp key={opinion._id}>
						<StyledNameOpinion>{opinion.userName}</StyledNameOpinion>
						<StyledOpinion>{opinion.opinion}</StyledOpinion>
					</StyledContainerOp>
				))}
			</StyledContainerOpinions>
		</>
	);
};
const filterWineOpinion = (opinions, wine) => {
	return opinions.filter(opinion => opinion.wineId === wine.wine._id);
};
const chargeOpinions = async setWines => {
	const data = await getData(URLS.API_OPINIONS);
	setWines(data);
};
export default AllOpinions;
