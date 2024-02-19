import { styled } from 'styled-components';

const StyledForm = styled.form`
	display: ${({ $isVisible }) => ($isVisible ? 'none' : 'block')};
`;

export { StyledForm };
