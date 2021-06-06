import { css, useTheme } from '@emotion/react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
	Flex,
	FlexCenter,
	Montserrat,
	SpaceBetween,
	TextBold
} from '../../styles/classes';
import Body from './Body';
import Pokeball from '../../assets/pokeball.svg';
import Button from '../Atoms/Button';
import Chip from '../Atoms/Chip';
import {
	getBackgroundColorByType,
	getColor,
	getPokemonId,
	getPokemonName,
	getPokemonType
} from '../../util/functions';

const Styles = {
	Backdrop: css`
		${FlexCenter}
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(2px);
	`,

	Container: (theme, type) => css`
		position: relative;
		border-radius: 20px;
		width: 350px;
		height: 90%;
		overflow: hidden;
		background: ${getBackgroundColorByType(theme, type)};

		&::after {
			content: '';
			height: 60%;
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
			position: absolute;
			z-index: 1;
			bottom: 0;
			left: 0;
			right: 0;
			background: ${theme.colors.background};
		}
	`,

	CloseBtn: css`
		position: absolute;
		top: 8px;
		right: 4px;
	`,

	Pokeball: css`
		position: absolute;
		height: 200px;
		right: -30px;
		top: 40px;
	`,

	Pokemon: css`
		position: absolute;
		z-index: 2;
		top: 95px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		height: 150px;
	`,

	TitleBar: css`
		${Flex};
		${SpaceBetween};
		padding: 8px 16px;
		margin-top: 24px;
	`,

	Title: (theme, type) => css`
		margin-bottom: 4px;
		color: ${getColor(theme, type)};
	`
};

export default function ModalPokemon({ pokemon, close }) {
	const theme = useTheme();
	return (
		<div css={Styles.Backdrop}>
			<div css={Styles.Container(theme, getPokemonType(pokemon))}>
				<div css={Styles.CloseBtn}>
					<Button icon={faTimes} onClick={close} />
				</div>
				<img
					css={Styles.Pokemon}
					src={pokemon.sprites.other['official-artwork'].front_default}
				/>
				<img css={Styles.Pokeball} src={Pokeball} />
				<div css={Styles.TitleBar}>
					<div>
						<h2 css={Styles.Title(theme, getPokemonType(pokemon))}>
							{getPokemonName(pokemon)}
						</h2>
						{pokemon.types.map(({ type, slot }) => (
							<Chip
								inline
								labelColor={getColor(theme, type.name)}
								key={slot}
								label={type.name}
							/>
						))}
					</div>
					<span css={css([FlexCenter, Montserrat, TextBold])}>
						{getPokemonId(pokemon)}
					</span>
				</div>
				<Body pokemon={pokemon} />
			</div>
		</div>
	);
}
