/* eslint-disable indent */
import { css, useTheme } from '@emotion/react';

import { Fragment } from 'react';
import { show } from '../api';
import Chip from './Atoms/Chip';
import Spinner from './Atoms/Spinner';
import Pokeball from '../assets/pokeball.svg';
import {
	getBackgroundColorByType,
	getColor,
	getPokemonId,
	getPokemonName,
	getPokemonSprite,
	getPokemonType
} from '../util/functions';
import { AbsuluteCenter } from '../styles/classes';

const Styles = {
	Container: (theme, type, pokemon) => css`
		margin: 0.6rem;
		border-radius: 20px;
		position: relative;
		min-height: 125px;
		cursor: ${pokemon ? 'pointer' : 'default'};
		padding: 8px 16px;
		overflow: hidden;
		max-width: 450px;
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		background: ${pokemon
			? getBackgroundColorByType(theme, type)
			: 'hsla(0, 0%, 26%, 0.5)'};

		&:hover {
			transform: ${pokemon ? 'scale(1.05, 1.05)' : 'none'};
		}
	`,

	Img: css`
		width: 85px;
		bottom: 4px;
		right: 4px;
		z-index: 5;
		position: absolute;
	`,

	PokeballStyle: css`
		position: absolute;
		height: 125px;
		z-index: 1;
		right: -16px;
		bottom: -16px;
	`,

	Id: theme => css`
		position: absolute;
		top: 16px;
		z-index: 1;
		right: 12px;
		font-weight: bold;
		color: rgba(0, 0, 0, ${theme.name === 'dark' ? 1 : 0.4});
	`,

	Title: (theme, type) => css`
		margin: 8px 0;
		color: ${getColor(theme, type)};
	`,

	Spinner: css`
		${AbsuluteCenter};
		z-index: 100;
	`
};

export default function Card({ name, onClick }) {
	const { data } = show(name);
	const pokemon = data;
	const theme = useTheme();

	return (
		<div
			onClick={onClick && pokemon ? () => onClick(pokemon) : () => {}}
			css={Styles.Container(theme, getPokemonType(pokemon), pokemon)}
		>
			<img css={Styles.PokeballStyle} src={Pokeball} />
			{pokemon ? (
				<Fragment>
					<img css={Styles.Img} src={getPokemonSprite(pokemon)} />

					<h3 css={Styles.Title(theme, getPokemonType(pokemon))}>
						{getPokemonName(pokemon)}
					</h3>
					<span css={Styles.Id(theme)}>{getPokemonId(pokemon)}</span>
					{pokemon.types.map(({ type, slot }) => (
						<Chip
							labelColor={getColor(theme, getPokemonType(pokemon))}
							key={slot}
							label={type.name}
						/>
					))}
				</Fragment>
			) : (
				<div css={Styles.Spinner}>
					<Spinner fill={theme.colors.inverse} />
				</div>
			)}
		</div>
	);
}
