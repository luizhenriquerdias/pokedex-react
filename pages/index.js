import { css } from '@emotion/react';
import { index } from '../api';
import Card from '../components/Card';

const GridContainer = css`
	display: flex;
	flex-wrap: wrap;

	> div {
		flex: 1 1 200px;
	}
`;

export default function Home() {
	const { data } = index();

	return (
		<>
			<h1>Pokédex React</h1>
			<div css={GridContainer}>
				{data?.results.map(({ name }) => (
					<Card key={name} name={name} />
				))}
			</div>
		</>
	);
}
