import { useContext, useState } from 'react';
import UpdateWine from '../updateWine/UpdateWine';
import { deleteData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import {
	StyledCard,
	StyledCardImg,
	StyledCardInfo,
	StyledCardShop,
	StyledCounter,
	StyledNumberCounter
} from './styles';
import { CartContext } from '../../contexts/CartContext';

const CardWine = ({ wine }) => {
	const [content, setContent] = useState();
	const [counter, setCounter] = useState(1);

	const { cart, setCart } = useContext(CartContext);
	return (
		<StyledCard>
			<StyledCardImg>
				<img src={wine.ruteImg} alt='' />
			</StyledCardImg>
			<StyledCardInfo>
				<div>
					<h3>{wine.name}</h3>
					<p>{wine.countrie}</p>
					<p>{wine.grape}</p>
				</div>
				<div>
					<button onClick={() => setContent('ir a la modal')}>Edit</button>
					<button onClick={() => userDelete(wine)}>Delete</button>
					<UpdateWine wine={wine} closeModal={() => setContent()}>
						{content}
					</UpdateWine>
				</div>
			</StyledCardInfo>
			<StyledCardShop>
				<button>likes</button>
				<div>
					<StyledCounter>
						<button onClick={() => counterNegative(counter, setCounter)}>
							-
						</button>
						<StyledNumberCounter>{counter}</StyledNumberCounter>
						<button onClick={() => counterPositive(counter, setCounter)}>
							+
						</button>
					</StyledCounter>
					<button onClick={() => updateCart(wine, cart, setCart, counter)}>
						carrito
					</button>
				</div>
			</StyledCardShop>
		</StyledCard>
	);
};
const userDelete = async wine => {
	await deleteData(`${URLS.API_WINES}/${wine._id}`);
};
const counterNegative = (counter, setCounter) => {
	const newCounter = counter - 1;
	setCounter(newCounter);
};
const counterPositive = (counter, setCounter) => {
	const newCounter = counter + 1;
	setCounter(newCounter);
};

const updateCart = (wine, cart, setCart, counter) => {
	const wineExists = cart.find(wineInCart => wineInCart._id === wine._id);
	let cartUpdated = [];
	if (wineExists) {
		cartUpdated = cart.map(wineInCart => {
			if (wineInCart._id === wine._id) {
				wineInCart.numberOfBottles = counter;
			}
			return wineInCart;
		});
	} else {
		cartUpdated = [
			...cart,
			{
				_id: wine._id,
				name: wine.name,
				numberOfBottles: counter
			}
		];
	}
	setCart(cartUpdated);
};
export default CardWine;
