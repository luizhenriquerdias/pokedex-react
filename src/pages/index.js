import { css, useTheme } from '@emotion/react';
import React, { Fragment, useContext, useState } from 'react';
import Card from '../components/Card';
import ClientOnlyPortal from '../components/ClientOnlyPortal';
import ModalPokemon from '../components/ModalPokemon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PokemonsContext } from '../providers/pokemons';
import { Flex, JustifyCenter } from '../styles/classes';

const GridContainer = css`
	padding-bottom: 56px;
	> div {
		flex: 1 1 200px;
	}
`;

export default function Home() {
	const theme = useTheme();
	const { pokemons } = useContext(PokemonsContext);
	const [dialog, setDialog] = useState(false);
	const [pokemon, setPokemon] = useState(null);

	const onClick = poke => {
		setDialog(!!poke);
		setPokemon(poke || null);
	};

	return (
		<Fragment>
			{dialog && (
				<ClientOnlyPortal selector="#modal">
					<ModalPokemon pokemon={pokemon} close={() => onClick(null)} />
				</ClientOnlyPortal>
			)}
			<main
				css={css`
					background: ${theme.colors.background};
				`}
			>
				<Header />
				<div css={css([GridContainer, Flex, JustifyCenter])}>
					{pokemons?.slice(0, 20).map(poke => (
						<Card key={poke.name} name={poke.name} onClick={onClick} />
					))}
				</div>
				<Footer />
			</main>
		</Fragment>
	);
}
