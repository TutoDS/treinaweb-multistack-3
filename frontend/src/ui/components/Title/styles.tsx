import { styled } from '@mui/material';

const Container = styled('section')`
	max-width: 1400px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;

	padding: ${({ theme }) => theme.spacing(6, 0)};
`;

const StyledTitle = styled('h1')`
	margin: 0;

	font-size: 20px;
	text-align: center;
`;

const StyledSubTitle = styled('h2')`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: 18px;
	font-weight: normal;
	text-align: center;
`;

export { Container, StyledSubTitle, StyledTitle };
