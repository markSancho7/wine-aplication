import { styled } from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	width: 450px;
	height: 250px;
`;
const StyledCardImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 250px;
`;
const StyledCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
`;
const StyledCardShop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 120px;
	height: 250px;
`;
const StyledCounter = styled.div`
	display: flex;
	height: 20px;
	gap: 10px;
`;
const StyledNumberCounter = styled.p`
	margin: 0px;
	padding: 0px;
`;

export {
	StyledCard,
	StyledCardImg,
	StyledCardInfo,
	StyledCardShop,
	StyledCounter,
	StyledNumberCounter
};
