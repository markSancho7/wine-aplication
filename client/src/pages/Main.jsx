import { useState } from 'react';
import AllWines from '../components/allWines/AllWines';
import RegisterWine from '../components/registerWine/RegisterWine';

const Main = () => {
	const [content, setContent] = useState();
	return (
		<>
			<button onClick={() => setContent('ir a la modal')}>Register Wine</button>
			<RegisterWine closeModal={() => setContent()}>{content}</RegisterWine>
			<AllWines />
		</>
	);
};
export default Main;
