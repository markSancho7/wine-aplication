import { StyledFilter, StyledTotalContainerFilters } from './styles';

const Filters = ({ filterByGrape, filterByName }) => {
	return (
		<StyledTotalContainerFilters>
			<StyledFilter>
				<label>Filtrar por nombre </label>
				<input onChange={event => filterByName(event.target.value)}></input>
			</StyledFilter>
			<StyledFilter>
				<label>Filtrar por uva </label>
				<input onChange={event => filterByGrape(event.target.value)}></input>
			</StyledFilter>
		</StyledTotalContainerFilters>
	);
};
export default Filters;
