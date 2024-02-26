import { useContext, useState } from 'react';
import { logoutUser } from '../../utils/auth.api';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import RegisterWine from '../registerWine/RegisterWine';
import { StyledImg, StyledName, StyledTotalContainer } from './styles';

const LogOut = () => {
	const [content, setContent] = useState();
	const { userData, setUserData } = useContext(AuthContext);
	const navigate = useNavigate();
	console.log(userData);
	return (
		<>
			<StyledTotalContainer>
				<StyledName>{userData.username}</StyledName>
				{userData?.admin && (
					<>
						<StyledImg
							src='/public/tag-solid.svg'
							alt=''
							onClick={() => setContent('ir a la modal')}
						/>
					</>
				)}

				<StyledImg
					src='/public/right-from-bracket-solid.svg'
					alt=''
					onClick={() => logoutUser(setUserData, navigate)}
				/>
				<RegisterWine closeModal={() => setContent()}>{content}</RegisterWine>
			</StyledTotalContainer>
		</>
	);
};

export default LogOut;
