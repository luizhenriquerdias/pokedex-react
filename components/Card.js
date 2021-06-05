import { css } from '@emotion/react';
import { useContext } from 'react';
import { show } from '../api';
import Chip from './Atoms/Chip';
import Pokeball from '../assets/pokeball.svg';
import { ThemeContext } from '../providers/theme';
import { getBackgroundColorByType, getColor } from '../util/functions';

const Container = css`
	margin: 0.6rem;
	border-radius: 20px;
	position: relative;
	min-height: 125px;
	cursor: pointer;
	padding: 8px 16px;
	overflow: hidden;
	max-width: 450px;
	transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		transform: scale(1.05, 1.05);
	}
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

export default function Card({ name, onClick }) {
	const { data } = show(name);
	const { theme } = useContext(ThemeContext);

	if (!data) return <span>{name}</span>;
	return (
		// eslint-disable-next-line
		<div
			onClick={onClick ? () => onClick(data) : () => {}}
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
			<h3
				css={css`
					margin: 8px 0;
					color: ${getColor(theme, data.types[0].type.name)};
				`}
			>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</h3>
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
					labelColor={getColor(theme, data.types[0].type.name)}
					key={slot}
					label={type.name}
				/>
			))}
		</div>
	);
}
