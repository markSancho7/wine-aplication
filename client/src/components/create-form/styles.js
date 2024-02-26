import { styled } from 'styled-components';

const StyledForm = styled.form`
	display: ${({ $isVisible }) => ($isVisible ? 'none' : 'block')};
	background-color: #fffaea;
	padding-inline: 6px;
	margin-right: -1.5px;
	margin-top: 55px;
`;
const StyledButtonRegister = styled.img`
	position: absolute;
	right: 10px;
	top: 20px;

	margin-top: 10px;
	width: 40px;
	height: 20px;
	padding: 3px 5px;
	background-color: #56d8a9;
	filter: invert(100%);
	border-radius: 5px;
`;

export { StyledForm, StyledButtonRegister };
