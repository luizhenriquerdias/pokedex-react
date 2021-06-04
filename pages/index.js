import { css } from '@emotion/react';
import React, { useContext, useState } from 'react';
import { index } from '../api';
import Card from '../components/Card';
import Dialog from '../components/Dialog';
import Header from '../components/Header';
import { ThemeContext } from '../providers/theme';

const GridContainer = css`
	display: flex;
	flex-wrap: wrap;

	> div {
		flex: 1 1 200px;
	}
`;

export default function Home() {
	const { data } = index();
	const { theme } = useContext(ThemeContext);
	const [dialog, setDialog] = useState(false);
	const [pokemon, setPokemon] = useState(null);

	const onClick = poke => {
		setDialog(!!poke);
		setPokemon(poke || null);
	};

	return (
		<>
			{dialog ? <Dialog pokemon={pokemon} close={() => onClick(null)} /> : null}
			<main
				css={css`
					background: ${theme.colors.background};
				`}
			>
				<Header />
				<div css={GridContainer}>
					{data?.results.slice(0, 20).map(poke => (
						<Card key={poke.name} name={poke.name} onClick={onClick} />
					))}
				</div>
			</main>
		</>
	);
}
