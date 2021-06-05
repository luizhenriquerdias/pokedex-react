import { css } from '@emotion/react';
import { useContext } from 'react';
import { PokemonsContext } from '../providers/pokemons';
import { AlignCenter, Flex, SpaceBetween } from '../styles/classes';
import Paginator from './Paginator';
import LinkedIn from '../assets/linkedin.svg';

const Styles = {
	Footer: css`
		${Flex};
		${AlignCenter};
		${SpaceBetween};
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(4px);
		z-index: 500;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 0 36px;
	`,

	LinkedIn: css`
		height: 24px;
		background: white;
		border-radius: 4px;
		cursor: pointer;
	`
};

export default function Footer() {
	const { page, totalPages, nextPage, previousPage } =
		useContext(PokemonsContext);

	const goToLinkedIn = () => {
		window.open('https://www.linkedin.com/in/luizhenriquerdias/', '_blank');
	};

	return (
		<div css={Styles.Footer}>
			<div />
			<Paginator
				page={page}
				totalPages={totalPages}
				nextPage={nextPage}
				previousPage={previousPage}
			/>
			<img css={Styles.LinkedIn} src={LinkedIn} onClick={goToLinkedIn} />
		</div>
	);
}
