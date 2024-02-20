import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledUlNavBar = styled.ul`
	display: flex;
	border: 3px solid black;
`;
const StyledLiNavBar = styled.li`
	margin-inline: 20px;
	
`;
const StyledLinkNavBar = styled(Link)`
margin-top:auto;
margin-bottom: auto;
margin-left: 20px;
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
