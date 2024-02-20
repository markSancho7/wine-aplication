import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';

import Espumosos from '../pages/espumosos/Espumosos';
import Home from '../pages/home/Home';
import Tranquilos from '../pages/tranquilos/Tranquilos';
import Jerez from '../pages/jerez/Jerez';
import Naranja from '../pages/naranja/Naranja';
import WineDetails from '../components/wineDetails/WIneDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='tranquilos' element={<Tranquilos />} />
				<Route path='espumosos' element={<Espumosos />} />
				<Route path='jerez' element={<Jerez />} />
				<Route path='naranja' element={<Naranja />} />
				<Route path='/wineDetails/' element={<WineDetails/>}/>
			</Route>
		</Routes>
	);
};
export default Router;
