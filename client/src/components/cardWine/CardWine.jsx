import { useContext, useState } from 'react';
import UpdateWine from '../updateWine/UpdateWine';
import { deleteData } from '../../utils/api';
import { URLS } from '../../constants/urls';
import {
	StyledAdminButtons,
	StyledCard,
	StyledCardImg,
	StyledCardInfo,
	StyledCardShop,
	StyledCounter,
	StyledImg,
	StyledNumberCounter,
	StyledWineName
} from './styles';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CardWine = ({ wine }) => {
	const [content, setContent] = useState();
	const [counter, setCounter] = useState(1);

	const { cart, setCart } = useContext(CartContext);
	const { userData } = useContext(AuthContext);

	const navigate = useNavigate();

	return (
		<>
			<StyledCard>
				<StyledCardImg
					onClick={() => navigate('/wineDetails/', { state: wine })}
				>
					<img src={wine.ruteImg} alt='' />
				</StyledCardImg>
				<StyledCardInfo>
					<div>
						<StyledWineName>{wine.name}</StyledWineName>
						<p>{wine.countrie}</p>
						<p>{wine.grape}</p>
					</div>
				</StyledCardInfo>
				<StyledCardShop>
					<p>{wine.price}€</p>
					<StyledCounter>
						<button onClick={() => counterNegative(counter, setCounter)}>
							-
						</button>
						<StyledNumberCounter>{counter}</StyledNumberCounter>
						<button onClick={() => counterPositive(counter, setCounter)}>
							+
						</button>
					</StyledCounter>
					<StyledImg
						src='public/cart.svg'
						alt=''
						onClick={() => updateCart(wine, cart, setCart, counter)}
					/>
				</StyledCardShop>
			</StyledCard>
			{userData?.admin && (
				<StyledAdminButtons>
					<StyledImg
						src='/public/pencil-solid.svg'
						alt=''
						onClick={() => setContent('ir a la modal')}
					/>
					<StyledImg
						src='/public/trash-can-solid.svg'
						alt=''
						onClick={() => userDelete(wine)}
					/>
					<UpdateWine wine={wine} closeModal={() => setContent()}>
						{content}
					</UpdateWine>
				</StyledAdminButtons>
			)}
		</>
	);
};
const userDelete = async wine => {
	await deleteData(`${URLS.API_WINES}/${wine._id}`);
};
const counterNegative = (counter, setCounter) => {
	if (counter === 1) return;
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
				price: wine.price,
				numberOfBottles: counter
			}
		];
	}
	setCart(cartUpdated);
};
export default CardWine;
