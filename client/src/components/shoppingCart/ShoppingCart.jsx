import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ShoppingCart = () => {
	const { cart } = useContext(CartContext);
	return <p>Shopping Cart ({cart.length})</p>;
};

export default ShoppingCart;
