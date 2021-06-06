import { css, useTheme } from '@emotion/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import ClientOnlyPortal from '../components/ClientOnlyPortal';
import ModalPokemon from '../components/ModalPokemon';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { PokemonsContext } from '../providers/pokemons';
import { PokemonGrid } from '../styles/classes';

const Styles = {
	Main: theme => css`
		background: ${theme.colors.background};
	`,

	GridContainer: css`
		${PokemonGrid};
		padding-bottom: 56px;
	`
};

export default function Home() {
	const theme = useTheme();
	const { pokemons, setSelectedPokemon, selectedPokemon } =
		useContext(PokemonsContext);

	return (
		<Fragment>
			{selectedPokemon && (
				<ClientOnlyPortal selector="#modal">
					<ModalPokemon
						pokemon={selectedPokemon}
						close={() => setSelectedPokemon(null)}
					/>
				</ClientOnlyPortal>
			)}
			<main css={Styles.Main(theme)}>
				<Header />
				<div css={Styles.GridContainer}>
					{pokemons?.slice(0, 20).map(poke => (
						<Card
							key={poke.name}
							name={poke.name}
							onClick={setSelectedPokemon}
						/>
					))}
				</div>
				<Footer />
			</main>
		</Fragment>
	);
}
