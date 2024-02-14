import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<h1>REACT OK</h1>
			</BrowserRouter>
		</>
	);
};

export default App;
