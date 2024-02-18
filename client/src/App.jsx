import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import CartProvider from './providers/Cart.Provider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<CartProvider>
					<Router />
				</CartProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
