import styled from 'styled-components';

const StyledTotalContainer = styled.div`
	display: flex;
	align-items: center;
	height: 55px;
	gap: 5px;
	margin-right: 20px;
`;
const StyledName = styled.p``;
const StyledImg = styled.img`
	margin-top: 5px;
	width: 40px;
	height: 20px;
	padding: 3px 5px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
`;

export { StyledTotalContainer, StyledName, StyledImg };
