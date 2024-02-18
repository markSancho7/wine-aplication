import { Link } from 'react-router-dom';
import { StyledUlNavBar, StyledLiNavBar } from './styles';

const NavBar = () => {
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
			</StyledUlNavBar>
		</nav>
	);
};
export default NavBar;
