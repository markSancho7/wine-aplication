import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import RegisterWine from './components/registerWine/RegisterWine';
import AllWines from './components/allWines/AllWines';
import Main from './pages/Main';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Main />
			</BrowserRouter>
		</>
	);
};

export default App;
