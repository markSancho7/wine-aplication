import styled from 'styled-components';

const StyledTotalContainer = styled.div`
	width: 600px;
	padding: 20px;
	border: solid 5px black;
	margin-left: auto;
	margin-right: auto;
`;
const StyledNameWine = styled.div`
	font-size: 25px;
	margin-left: 30px;
`;

const StyledContainer = styled.div`
	display: flex;
`;

const StyledContainerDetails = styled.div`
	width: 400px;
	margin-left: 50px;
`;

const StyledContainerImg = styled.div`
	width: 100px;
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

const StyledHr = styled.hr`
	background-color: red;
`;
export {
	StyledContainerDetails,
	StyledTotalContainer,
	StyledContainerImg,
	StyledContainer,
	StyledProperties,
	StyledHr,
	StyledNameWine,
	StyledIcon
};
