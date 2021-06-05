import { css } from '@emotion/react';
import { useContext } from 'react';
import { PokemonsContext } from '../providers/pokemons';
import { AlignCenter, Flex, SpaceBetween } from '../styles/classes';
import Paginator from './Paginator';
import LinkedIn from '../assets/linkedin.svg';
import { ThemeContext } from '../providers/theme';

const cssFooter = css`
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(4px);
	z-index: 500;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0 36px;
`;

const cssLinkedIn = css`
	height: 24px;
	background: white;
	border-radius: 4px;
	cursor: pointer;
`;

export default function Footer() {
	const { page, totalPages, nextPage, previousPage } =
		useContext(PokemonsContext);

	const goToLinkedIn = () => {
		window.open('https://www.linkedin.com/in/luizhenriquerdias/', '_blank');
	};

	return (
		<div css={css([cssFooter, Flex, AlignCenter, SpaceBetween])}>
			<div />
			<Paginator
				page={page}
				totalPages={totalPages}
				nextPage={nextPage}
				previousPage={previousPage}
			/>
			<img css={cssLinkedIn} src={LinkedIn} onClick={goToLinkedIn} />
		</div>
	);
}
