import { css, useTheme } from '@emotion/react';
import React, { Fragment, useContext, useEffect, useRef } from 'react';
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

		@supports (-webkit-touch-callout: none) {
			&::after {
				content: ' ';
				height: 112px;
				width: 100%;
			}
		}
	`
};

export default function Home() {
	const theme = useTheme();
	const { pokemons, setSelectedPokemon, selectedPokemon } =
		useContext(PokemonsContext);

	const mainRef = useRef();

	useEffect(() => {
		mainRef.current.scrollTo({ top: 100, behavior: 'smooth' });
	}, [pokemons]);

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
			<main ref={mainRef} css={Styles.Main(theme)}>
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
