import { styled } from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 350px;
	height: 200px;
	margin: 5px;
	transition: all 0.3s ease;
	border-radius: 10px;
	background-color: white;

	&&:hover {
		box-shadow: 0px 0px 5px 0px grey;
	}
`;
const StyledCardImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 250px;
`;
const StyledImg = styled.img`
	margin-top: 10px;
	width: 40px;
	height: 20px;
	padding: 3px 5px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
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
const StyledAdminButtons = styled.div`
	display: flex;
	gap: 5px;
	margin-left: 5px;
	margin-top: -10px;
	margin-bottom: 10px;
`;
const StyledWineName = styled.p`
	font-size: 18px;
	font-weight: bold;
	color: #a92756;
`;

export {
	StyledCard,
	StyledCardImg,
	StyledCardInfo,
	StyledCardShop,
	StyledCounter,
	StyledNumberCounter,
	StyledAdminButtons,
	StyledImg,
	StyledWineName
};
