import { ReactNode } from 'react';

import { Container, StyledSubTitle, StyledTitle } from './styles';

type Props = {
	title: ReactNode;
	subtitle?: ReactNode;
};

const Title = ({ title, subtitle }: Props) => {
	return (
		<Container>
			<StyledTitle>{title}</StyledTitle>
			{subtitle && <StyledSubTitle>{subtitle}</StyledSubTitle>}
		</Container>
	);
};

Title.defaultProps = {
	subtitle: undefined
};

export { Title };