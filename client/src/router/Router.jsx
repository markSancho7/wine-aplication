import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>HOME</h1>} />
		</Routes>
	);
};
export default Router;
