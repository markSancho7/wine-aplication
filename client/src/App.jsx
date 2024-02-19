import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import CartProvider from './providers/Cart.Provider';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<AuthProvider>
					<CartProvider>
						<Router />
					</CartProvider>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
