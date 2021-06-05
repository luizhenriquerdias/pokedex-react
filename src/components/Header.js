import { css, useTheme } from '@emotion/react';
import { Fragment, useContext } from 'react';
import SearchBar from './Atoms/SearchBar';
import ToggleTheme from './Atoms/ToggleTheme';
import Pokeball from '../assets/pokeball.svg';
import { FlexCenter } from '../styles/classes';
import { PokemonsContext } from '../providers/pokemons';

const HeaderStyle = css([
	FlexCenter,
	css`
		background: linear-gradient(135deg, #f85032, #e73827);
		overflow: hidden;
		min-height: 200px;
		position: relative;
	`
]);

const AbsoluteRight = css`
	position: absolute;
	top: 16px;
	right: 16px;
`;

const AbsoluteImage = css`
	position: absolute;
	height: 400px;
	right: 30px;
	top: -30px;
	z-index: 1;
`;

export default function Header() {
	const theme = useTheme();
	const { setSearch } = useContext(PokemonsContext);

	return (
		<Fragment>
			<div
				css={css([
					HeaderStyle,
					css`
						background: ${theme.colors.header};
					`
				])}
			>
				<img css={AbsoluteImage} src={Pokeball} />
				<div css={AbsoluteRight}>
					<ToggleTheme
						onChange={theme.change}
						defaultChecked={theme.name === 'light'}
					/>
				</div>
				<h1
					css={css`
						z-index: 5;
					`}
				>
					Pokedex React
				</h1>
			</div>
			<div
				css={css([
					FlexCenter,
					css`
						transform: translateY(-50%);
					`
				])}
			>
				<SearchBar onSearch={setSearch} />
			</div>
		</Fragment>
	);
}
