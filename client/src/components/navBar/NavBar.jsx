import { StyledUlNavBar, StyledLiNavBar, StyledContainerLogin, StyledLinkNavBar } from './styles';
import LoginForm from '../login-form/LoginForm';
import CreateForm from '../create-form/CreateForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import LogOut from '../logOut/LogOut';

const NavBar = () => {
	const { userData } = useContext(AuthContext);
	return (
		<nav>
			<StyledUlNavBar>
				<StyledLinkNavBar to='/'>
					<StyledLiNavBar>HOME</StyledLiNavBar>
				</StyledLinkNavBar>
				<StyledLinkNavBar to='/tranquilos'>
					<StyledLiNavBar>Vinos Tranquilos</StyledLiNavBar>
				</StyledLinkNavBar>
				<StyledLinkNavBar to='/espumosos'>
					<StyledLiNavBar>Espumosos</StyledLiNavBar>
				</StyledLinkNavBar>
				<StyledLinkNavBar to='/jerez'>
					<StyledLiNavBar>Jerez</StyledLiNavBar>
				</StyledLinkNavBar>
				<StyledLinkNavBar to='/naranja'>
					<StyledLiNavBar>Vinos Naranjas</StyledLiNavBar>
				</StyledLinkNavBar>
				<StyledContainerLogin>
					{!userData && <LoginForm />}
					{!userData && <CreateForm />}
					{userData && <LogOut />}
				</StyledContainerLogin>
			</StyledUlNavBar>
		</nav>
	);
};
export default NavBar;
