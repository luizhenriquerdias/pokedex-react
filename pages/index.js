import { css } from '@emotion/react';
import React, { useContext } from 'react';
import { index } from '../api';
import Card from '../components/Card';
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

	return (
		<main
			css={css`
				background: ${theme.colors.background};
			`}
		>
			<Header />
			<div css={GridContainer}>
				{data?.results.slice(0, 20).map(({ name }) => (
					<Card key={name} name={name} />
				))}
			</div>
		</main>
	);
}
