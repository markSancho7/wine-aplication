import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledUlNavBar = styled.ul`
	display: flex;
	border: 3px solid black;
`;
const StyledLiNavBar = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 140px;
	height: 50px;
	transition: all 0.3s ease;
	&&:hover{
		background-color: #A92756  ;
	}
	
`;
const StyledLinkNavBar = styled(Link)`
margin-top:auto;
margin-bottom: auto;
font-size: 20px;
transition: all 0.3s ease;
&&:hover{
	color: white;
	font-size: 25px;
}
`
const StyledContainerLogin = styled.div`
margin-left: auto;
`

export { StyledUlNavBar, StyledLiNavBar,StyledContainerLogin, StyledLinkNavBar };
