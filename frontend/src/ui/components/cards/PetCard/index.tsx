import { Button } from '@mui/material';

import { Pet } from 'data/@types/Pet';
import { limitTextSize } from 'data/utils/text.utils';
import { PetContent, PetDescription, PetName, PetPhoto, StyledCard } from './styles';

const TEXT_MAX_LENGTH = 200;

type Props = {
	pet: Pet;
};

const PetCard = ({ pet }: Props) => {
	return (
		<StyledCard>
			<PetPhoto src={pet.photo} alt={pet.name} />
			<PetContent>
				<PetName>{pet.name}</PetName>
				<PetDescription>{limitTextSize(pet.description, TEXT_MAX_LENGTH)}</PetDescription>

				<Button variant={'contained'}>Adotar</Button>
			</PetContent>
		</StyledCard>
	);
};

export { PetCard };
