import { css } from '@emotion/react';
import { useContext } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../providers/theme';
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
import { show } from '../../api';
import Chip from '../Atoms/Chip';
import { getBackgroundColorByType, getColor } from '../../util/functions';

const cssDialog = css`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(2px);
`;

const cssContainer = css`
	position: relative;
	border-radius: 20px;
	width: 400px;
	height: 90%;
	overflow: hidden;
`;

const cssCloseBtn = css`
	position: absolute;
	top: 8px;
	right: 4px;
`;

const cssPokeball = css`
	position: absolute;
	height: 200px;
	right: -30px;
	top: 40px;
`;

const cssPokemon = css`
	position: absolute;
	z-index: 5;
	top: 90px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	height: 200px;
`;

const cssTitleBar = css`
	padding: 8px 16px;
	margin-top: 24px;
`;

export default function Dialog({ pokemon, close }) {
	console.log(pokemon);
	const { theme } = useContext(ThemeContext);
	return (
		<div css={css([cssDialog, FlexCenter])}>
			<div
				css={css([
					cssContainer,
					getBackgroundColorByType(theme, pokemon.types[0].type.name)
				])}
			>
				<div css={cssCloseBtn}>
					<Button icon={faTimes} onClick={close} />
				</div>
				<img
					css={cssPokemon}
					src={pokemon.sprites.other['official-artwork'].front_default}
				/>
				<img css={cssPokeball} src={Pokeball} />
				<div css={css([Flex, SpaceBetween, cssTitleBar])}>
					<div>
						<h2
							css={css`
								margin-bottom: 4px;
								color: ${getColor(theme, pokemon.types[0].type)};
							`}
						>
							{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
						</h2>
						{pokemon.types.map(({ type, slot }) => (
							<Chip
								inline
								labelColor={getColor(theme, pokemon.types[0].type)}
								key={slot}
								label={type.name}
							/>
						))}
					</div>
					<span css={css([FlexCenter, Montserrat, TextBold])}>
						{`#${String(pokemon.id).padStart(4, '0')}`}
					</span>
				</div>
				<Body />
			</div>
		</div>
	);
}
