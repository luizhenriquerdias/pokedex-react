import { css, useTheme } from '@emotion/react';

import { show } from '../api';
import Chip from './Atoms/Chip';
import Pokeball from '../assets/pokeball.svg';
import {
	getBackgroundColorByType,
	getColor,
	getPokemonId,
	getPokemonName,
	getPokemonSprite,
	getPokemonType
} from '../util/functions';

const Styles = {
	Container: (theme, type) => css`
		margin: 0.6rem;
		border-radius: 20px;
		position: relative;
		min-height: 125px;
		cursor: pointer;
		padding: 8px 16px;
		overflow: hidden;
		max-width: 450px;
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		background: ${getBackgroundColorByType(theme, type)};

		&:hover {
			transform: scale(1.05, 1.05);
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
	`
};

export default function Card({ name, onClick }) {
	const { data } = show(name);
	const pokemon = data;
	const theme = useTheme();

	if (!pokemon) return <span>{name}</span>;

	return (
		<div
			onClick={onClick ? () => onClick(pokemon) : () => {}}
			css={Styles.Container(theme, getPokemonType(pokemon))}
		>
			<img css={Styles.Img} src={getPokemonSprite(pokemon)} />
			<img css={Styles.PokeballStyle} src={Pokeball} />
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
		</div>
	);
}
