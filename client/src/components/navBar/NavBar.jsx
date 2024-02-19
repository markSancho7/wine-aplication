import { Link } from 'react-router-dom';
import { StyledUlNavBar, StyledLiNavBar } from './styles';
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
				<Link to='/'>
					<StyledLiNavBar>HOME</StyledLiNavBar>
				</Link>
				<Link to='/tranquilos'>
					<StyledLiNavBar>Vinos Tranquilos</StyledLiNavBar>
				</Link>
				<Link to='/espumosos'>
					<StyledLiNavBar>Espumosos</StyledLiNavBar>
				</Link>
				<Link to='/jerez'>
					<StyledLiNavBar>Jerez</StyledLiNavBar>
				</Link>
				<Link to='/naranja'>
					<StyledLiNavBar>Vinos Naranjas</StyledLiNavBar>
				</Link>
				{!userData && <LoginForm />}
				{!userData && <CreateForm />}
				{userData && <LogOut />}
			</StyledUlNavBar>
		</nav>
	);
};
export default NavBar;
