import { styled } from 'styled-components';
const StyledTotalContainerCart = styled.div`
	position: absolute;
	top: 70px;
	display: flex;
	align-items: center;
	margin-left: 10px;
	gap: 10px;
`;

const StyledContainerCart = styled.div`
	display: ${({ $isVisible }) => ($isVisible ? 'none' : 'block')};
	position: absolute;
	top: 120px;
	left: 10px;
	background-color: white;
	padding: 10px;
	box-shadow: 0px 0px 5px 0px grey;
	border-radius: 10px;
	z-index: 100;
`;
const StyledImg = styled.img`
	margin-top: 5px;
	width: 40px;
	height: 20px;
	padding: 3px 5px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
`;
const StyledArticle = styled.div`
	display: flex;
	margin-bottom: 5px;
	height: 20px;
	gap: 10px;
`;
const StyledArticleName = styled.p`
	margin: 0px;
`;
const StyledIcon = styled.img`
	margin-top: 5px;
	width: 15px;
	height: 15px;
	padding: 3px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
`;
export {
	StyledContainerCart,
	StyledArticle,
	StyledArticleName,
	StyledImg,
	StyledTotalContainerCart,
	StyledIcon
};
