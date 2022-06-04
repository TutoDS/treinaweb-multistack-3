import { styled } from '@mui/material';

const StyledList = styled('section')`
	width: 100%;
	max-width: 800px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(4)};

	padding: ${({ theme }) => theme.spacing(2, 0)};

	${({ theme }) => theme.breakpoints.down('md')} {
		padding: ${({ theme }) => theme.spacing(2)};
	}
`;

export { StyledList };
