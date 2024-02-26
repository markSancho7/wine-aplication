import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {
	StyledArticle,
	StyledArticleName,
	StyledContainerCart,
	StyledIcon,
	StyledImg,
	StyledTotalContainerCart
} from './styles';

const ShoppingCart = () => {
	const { cart, setCart } = useContext(CartContext);
	const [cartVisible, setCartVisible] = useState(true);
	return (
		<>
			<StyledTotalContainerCart>
				<StyledImg
					src='/public/cart.svg'
					alt=''
					onClick={() => changeCartVisible(cartVisible, setCartVisible)}
				/>
				<p>({cart.length})</p>
			</StyledTotalContainerCart>
			<StyledContainerCart $isVisible={cartVisible}>
				{cart.map(article => (
					<StyledArticle key={article._id}>
						<StyledArticleName>{article.numberOfBottles}</StyledArticleName>
						<StyledArticleName>{article.name}</StyledArticleName>
						<StyledIcon
							src='/public/x-solid.svg'
							alt=''
							onClick={() => deleteArticle(article, cart, setCart)}
						/>
					</StyledArticle>
				))}
				<p>Total = {totalPrice(cart)}€</p>
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
const totalPrice = cart => {
	let total = 0;
	cart.forEach(element => {
		const price = element.price.replace(',', '.');
		console.log(Number(price));
		total += price * element.numberOfBottles;
	});
	return total.toFixed(2);
};

export default ShoppingCart;
