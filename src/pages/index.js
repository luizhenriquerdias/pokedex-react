import { css, useTheme } from '@emotion/react';
import React, { Fragment, useContext, useState } from 'react';
import Card from '../components/Card';
import ClientOnlyPortal from '../components/ClientOnlyPortal';
import ModalPokemon from '../components/ModalPokemon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PokemonsContext } from '../providers/pokemons';
import { Flex, JustifyCenter } from '../styles/classes';

const Styles = {
	GridContainer: css`
		${Flex};
		${JustifyCenter};
		padding-bottom: 56px;
		> div {
			flex: 1 1 200px;
		}
	`,

	Main: theme => css`
		background: ${theme.colors.background};
	`
};

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
			<main css={Styles.Main(theme)}>
				<Header />
				<div css={Styles.GridContainer}>
					{pokemons?.slice(0, 20).map(poke => (
						<Card key={poke.name} name={poke.name} onClick={onClick} />
					))}
				</div>
				<Footer />
			</main>
		</Fragment>
	);
}
