import { Pet } from 'data/@types/Pet';
import { PetCard } from 'ui/components/cards/PetCard';
import { StyledList } from './styles';

type Props = {
	pets: Pet[];
};

const PetsList = ({ pets }: Props) => {
	return (
		<StyledList>
			{pets.map((pet) => (
				<PetCard key={pet.id} pet={pet} />
			))}
		</StyledList>
	);
};

export { PetsList };
