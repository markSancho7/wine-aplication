import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
	StyledArticle,
	StyledArticleName,
	StyledContainerCart
} from './styles';

const ShoppingCart = () => {
	const { cart, setCart } = useContext(CartContext);
	const [cartVisible, setCartVisible] = useState(true);
	return (
		<>
			<p>Shopping Cart ({cart.length})</p>
			<button onClick={() => changeCartVisible(cartVisible, setCartVisible)}>
				cart
			</button>
			<StyledContainerCart $isVisible={cartVisible}>
				{cart.map(
					article => (
						console.log(article),
						(
							<StyledArticle key={article._id}>
								<StyledArticleName>{article.numberOfBottles}</StyledArticleName>
								<StyledArticleName>{article.name}</StyledArticleName>
								<button onClick={() => deleteArticle(article, cart, setCart)}>
									X
								</button>
							</StyledArticle>
						)
					)
				)}
			</StyledContainerCart>
		</>
	);
};
const changeCartVisible = (cartVisible, setCartVisible) => {
	console.log(cartVisible);
	setCartVisible(!cartVisible);
};

const deleteArticle = (articleToDelete, cart, setCart) => {
	setCart(cart.filter(article => article._id !== articleToDelete._id));
};

export default ShoppingCart;
