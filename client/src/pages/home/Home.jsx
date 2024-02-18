import { useState } from 'react';
import AllWines from '../../components/allWines/AllWines';
import RegisterWine from '../../components/registerWine/RegisterWine';

const Home = () => {
	const [content, setContent] = useState();
	return (
		<>
			<h1>TODOS LOS VINOS</h1>
			<button onClick={() => setContent('ir a la modal')}>Register Wine</button>
			<RegisterWine closeModal={() => setContent()}>{content}</RegisterWine>
			<AllWines />
		</>
	);
};
export default Home;
