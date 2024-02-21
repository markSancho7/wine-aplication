import { Link, useLocation } from 'react-router-dom';
import Foro from '../foro/Foro';
import AllOpinions from '../allOpinions/AllOpinions';
import {
	StyledContainer,
	StyledContainerDetails,
	StyledContainerImg,
	StyledHr,
	StyledNameWine,
	StyledProperties,
	StyledTotalContainer
} from './styles';
const WineDetails = () => {
	const { state: wine } = useLocation();
	return (
		<>
			<Link to={'/'}>
				<button>back</button>
			</Link>
			<StyledTotalContainer>
				<StyledNameWine>
					<p>{wine.name}</p>
				</StyledNameWine>
				<StyledContainer>
					<StyledContainerImg>
						<img src={wine.ruteImg} alt='' />
					</StyledContainerImg>
					<StyledContainerDetails>
						<StyledProperties>
							<p>Región</p>
							<p>{wine.countrie}</p>
						</StyledProperties>
						<StyledHr />
						<StyledProperties>
							<p>Uvas</p>
							<p>{wine.grape}</p>
						</StyledProperties>
						<StyledHr />
						<StyledProperties>
							<p>Color</p>
							<p>{wine.color}</p>
						</StyledProperties>
						<StyledHr />
						<p>{wine.description}</p>
					</StyledContainerDetails>
				</StyledContainer>
			</StyledTotalContainer>
			<Foro wine={wine} />
			<AllOpinions wine={wine}></AllOpinions>
		</>
	);
};
export default WineDetails;
