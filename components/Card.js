import { css } from '@emotion/react';
import { useContext } from 'react';
import { show } from '../api';
import Chip from './Atoms/Chip';
import Pokeball from '../assets/pokeball.svg';
import { ThemeContext } from '../providers/theme';

const Container = css`
	margin: 0.6rem;
	border-radius: 20px;
	position: relative;
	min-height: 125px;
	cursor: pointer;
	padding: 8px 16px;
	overflow: hidden;
`;

const Img = css`
	width: 85px;
	bottom: 4px;
	right: 4px;
	z-index: 5;
	position: absolute;
`;

const PokeballStyle = css`
	position: absolute;
	height: 125px;
	z-index: 1;
	right: -16px;
	bottom: -16px;
`;

const Id = css`
	position: absolute;
	top: 16px;
	z-index: 1;
	right: 12px;
	font-weight: bold;
`;

const getBackgroundStr = hue =>
	`background: linear-gradient(135deg, hsl(${hue}, 65%, 60%), hsl(${hue}, 65%, 50%))}`;

const getHsl = hue => `hsl(${hue}, 65%, 60%)`;

const getColorByType = type => {
	switch (type) {
		case 'grass':
			return getHsl(166);
		case 'water':
			return getHsl(190);
		case 'fire':
			return getHsl(25);
		default:
			return 'white';
	}
};

const getBackgroundColorByType = (theme, type) => {
	if (theme.name === 'dark') return 'background: #434343';
	switch (type) {
		case 'grass':
			return getBackgroundStr(166);
		case 'water':
			return getBackgroundStr(190);
		case 'fire':
			return getBackgroundStr(25);
		default:
			return getBackgroundStr(0);
	}
};

const getColor = (theme, type) => {
	if (theme.name === 'light') return 'white';
	return getColorByType(type.name);
};

export default function Card({ name }) {
	const { data } = show(name);
	const { theme } = useContext(ThemeContext);

	if (!data) return <span>{name}</span>;
	return (
		<div
			css={css([
				Container,
				getBackgroundColorByType(theme, data.types[0].type.name)
			])}
		>
			<img
				css={Img}
				src={data.sprites.other['official-artwork'].front_default}
			/>
			<img css={PokeballStyle} src={Pokeball} />
			<h2
				css={css`
					margin: 8px 0;
					color: ${getColor(theme, data.types[0].type)};
				`}
			>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</h2>
			<span
				css={css([
					Id,
					css`
						color: rgba(0, 0, 0, ${theme.name === 'dark' ? 1 : 0.4});
					`
				])}
			>
				{`#${String(data.id).padStart(4, '0')}`}
			</span>
			{data.types.map(({ type, slot }) => (
				<Chip
					labelColor={getColor(theme, data.types[0].type)}
					key={slot}
					label={type.name}
				/>
			))}
		</div>
	);
}
