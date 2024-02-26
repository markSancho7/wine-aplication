import { Link, useLocation } from 'react-router-dom';
import Foro from '../foro/Foro';
import AllOpinions from '../allOpinions/AllOpinions';
import {
	StyledContainer,
	StyledContainerDetails,
	StyledContainerImg,
	StyledIcon,
	StyledImg,
	StyledNameWine,
	StyledProperties,
	StyledTotalContainer
} from './styles';
const WineDetails = () => {
	const { state: wine } = useLocation();
	return (
		<>
			<StyledTotalContainer>
				<Link to={'/'}>
					<StyledImg src='/public/arrow-left-solid.svg' alt='' />
				</Link>
				<StyledNameWine>
					<p>{wine.name}</p>
				</StyledNameWine>
				<StyledContainer>
					<StyledContainerImg>
						<img src={wine.ruteImg} alt='' />
					</StyledContainerImg>
					<StyledContainerDetails>
						<StyledProperties>
							<StyledIcon src='/public/wine_bottle.png' alt='' />
							<p>{wine.color}</p>
						</StyledProperties>
						<StyledProperties>
							<StyledIcon src='/public/location-dot-solid.svg' />
							<p>{wine.countrie}</p>
						</StyledProperties>
						<StyledProperties>
							<StyledIcon src='/public/grapes.svg' />
							<p>{wine.grape}</p>
						</StyledProperties>
						<StyledProperties>
							<StyledIcon src='/public/barrel.svg' alt='' />
							<p>{wine.producer}</p>
						</StyledProperties>
						<StyledProperties>
							<StyledIcon src='/public/wine-bottle-solid.svg' alt='' />
							<p>{wine.graduation}%</p>
						</StyledProperties>
						<p>{wine.description}</p>
					</StyledContainerDetails>
				</StyledContainer>
			</StyledTotalContainer>
			<Foro wine={wine} />
			<AllOpinions wine={wine} />
		</>
	);
};
export default WineDetails;
