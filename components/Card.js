import { css } from '@emotion/react';
import { show } from '../api';
import Chip from './Atoms/Chip';
import Pokeball from '../assets/pokeball.svg';

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
	color: rgba(0, 0, 0, 0.25);
`;

const getBackgroundStr = hue => `background: linear-gradient(135deg, hsl(${hue}, 65%, 60%), hsl(${hue}, 65%, 50%))}`;

const getBackgroundColorByType = type => {
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

export default function Card({ name }) {
	const { data } = show(name);
	if (!data) return <span>{name}</span>;
	return (
		<div css={css([Container, getBackgroundColorByType(data.types[0].type.name)])}>
			<img css={Img} src={data.sprites.other['official-artwork'].front_default} />
			<img css={PokeballStyle} src={Pokeball} />
			<h2
				css={css`
					margin: 8px 0;
				`}
			>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</h2>
			<span css={Id}>{`#${String(data.id).padStart(4, '0')}`}</span>
			{data.types.map(({ type, slot }) => (
				<Chip key={slot} label={type.name} />
			))}
		</div>
	);
}
