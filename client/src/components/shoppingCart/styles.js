import { styled } from 'styled-components';

const StyledContainerCart = styled.div`
	display: ${({ $isVisible }) => ($isVisible ? 'none' : 'block')};
`;
const StyledArticle = styled.div`
	display: flex;
	margin-bottom: 5px;
	height: 20px;
	gap: 10px;
`;
const StyledArticleName = styled.p`
	margin: 0px;
`;
export { StyledContainerCart, StyledArticle, StyledArticleName };
