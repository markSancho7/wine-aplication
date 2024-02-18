import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import ShoppingCart from '../components/shoppingCart/ShoppingCart';

const Layout = () => {
	return (
		<>
			<NavBar />
			<ShoppingCart />
			<Outlet />
		</>
	);
};
export default Layout;
