import { css, useTheme } from '@emotion/react';
import { Fragment, useContext } from 'react';
import SearchBar from './Atoms/SearchBar';
import Switch from './Atoms/Switch';
import Pokeball from '../assets/pokeball.svg';
import { FlexCenter } from '../styles/classes';
import { PokemonsContext } from '../providers/pokemons';

const Styles = {
	HeaderStyle: theme => css`
		${FlexCenter};
		overflow: hidden;
		min-height: 200px;
		position: relative;
		background: ${theme.colors.header};
	`,

	AbsoluteRight: css`
		position: absolute;
		top: 16px;
		right: 16px;
	`,

	AbsoluteImage: css`
		position: absolute;
		height: 400px;
		right: 30px;
		top: -30px;
		z-index: 1;
	`,

	Title: css`
		z-index: 5;
	`,

	SearchBar: css`
		${FlexCenter};
		transform: translateY(-50%);
	`
};

export default function Header() {
	const theme = useTheme();
	const { setSearch } = useContext(PokemonsContext);

	return (
		<Fragment>
			<div css={Styles.HeaderStyle(theme)}>
				<img css={Styles.AbsoluteImage} src={Pokeball} />
				<div css={Styles.AbsoluteRight}>
					<Switch
						onChange={theme.change}
						defaultChecked={theme.name === 'light'}
					/>
				</div>
				<h1 css={Styles.Title}>Pokedex React</h1>
			</div>
			<div css={Styles.SearchBar}>
				<SearchBar onSearch={setSearch} />
			</div>
		</Fragment>
	);
}
