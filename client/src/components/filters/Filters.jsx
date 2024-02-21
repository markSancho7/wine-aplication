
const Filters = ({filterByGrape,filterByName}) => {
    
	return (
		<>
			<div>
				<label>Filtrar por nombre</label>
				<input onChange={event => filterByName(event.target.value)}></input>
			</div>
			<div>
				<label>Filtrar por uva</label>
				<input onChange={event => filterByGrape(event.target.value)}></input>
			</div>
		</>
	);
};
export default Filters;
