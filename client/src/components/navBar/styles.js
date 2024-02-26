import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledUlNavBar = styled.ul`
	display: flex;
	height: 55px;
`;
const StyledLiNavBar = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 52px;
	color: #a92756;
	transition: all 0.1s ease;
	&&:hover {
		background-color: #a92756;
		color: white;
	}
`;
const StyledLinkNavBar = styled(Link)`
	margin-top: auto;
	margin-bottom: auto;
	font-size: 20px;
	transition: all 0.3s ease;
	&&:hover {
		color: white;
		font-size: 22px;
	}
`;
const StyledContainerLogin = styled.div`
	margin-left: auto;
	display: flex;
`;

export {
	StyledUlNavBar,
	StyledLiNavBar,
	StyledContainerLogin,
	StyledLinkNavBar
};
