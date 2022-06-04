import { styled } from '@mui/material';

const StyledCard = styled('div')`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: ${({ theme }) => theme.spacing(5)};

	${({ theme }) => theme.breakpoints.down('md')} {
		gap: ${({ theme }) => theme.spacing(4)};
		grid-template-columns: 1fr;
	}
`;

const PetPhoto = styled('img')`
	width: 100%;

	border-radius: 5px;

	${({ theme }) => theme.breakpoints.up('md')} {
		height: 100%;
	}

	filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
	object-fit: cover;
	object-position: top;
`;

const PetContent = styled('div')`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing(2)};

	${({ theme }) => theme.breakpoints.up('md')} {
		padding-bottom: ${({ theme }) => theme.spacing(2)};
	}
`;

const PetName = styled('h3')`
	margin: 0;
	font-size: 18px;
`;

const PetDescription = styled('p')`
	margin: 0;
	word-break: break-all;
`;

export { PetContent, PetDescription, PetName, PetPhoto, StyledCard };
