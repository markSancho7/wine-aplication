import styled from 'styled-components';

const StyledTotalContainer = styled.div`
	width: 650px;
	padding: 20px;
	margin-left: auto;
	margin-right: auto;
	background-color: white;
	border-radius: 10px;
`;
const StyledNameWine = styled.div`
	font-size: 25px;
	margin-left: 30px;
	color: #a92756;
`;

const StyledContainer = styled.div`
	display: flex;
`;

const StyledContainerDetails = styled.div`
	width: 400px;
	margin-left: 10px;
`;

const StyledContainerImg = styled.div`
	width: 180px;
	display: flex;
	align-items: center;
`;

const StyledProperties = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin-left: 20px;
	gap: 20px;
`;
const StyledIcon = styled.img`
	height: 20px;
`;
const StyledImg = styled.img`
	margin-top: 10px;
	margin-left: 30px;
	width: 40px;
	height: 20px;
	padding: 3px 5px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
`;
const StyledWineImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export {
	StyledContainerDetails,
	StyledTotalContainer,
	StyledContainerImg,
	StyledContainer,
	StyledProperties,
	StyledNameWine,
	StyledIcon,
	StyledImg,
	StyledWineImg
};
