import type { NextPage } from 'next';

import { Pet } from 'data/@types/Pet';
import { PetsList } from 'ui/components/lists/PetsList';
import { Title } from 'ui/components/Title';

const Home: NextPage = () => {
	const pets: Pet[] = [
		{
			name: 'arya',
			id: 'binary',
			description:
				'Voluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque vel.Voluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque velVoluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque velVoluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque velVoluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque velVoluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque velVoluptates consectetur deleniti vel. Qui vel non et deserunt illum cumque et. Laudantium eos possimus eligendi unde quam atque vel',
			photo: 'http://placeimg.com/640/480/animals'
		}
	];

	return (
		<>
			<Title
				title={''}
				subtitle={
					<span>
						Com um pequeno valor mensal, você
						<br />
						pode <strong>adotar um pet virtualmente</strong>
					</span>
				}
			/>
			<PetsList pets={pets} />
		</>
	);
};

export default Home;
