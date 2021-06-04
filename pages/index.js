import { css } from '@emotion/react';
import { index } from '../api';
import Card from '../components/Card';
import Header from '../components/Header';

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
			<Header />
			<div css={GridContainer}>
				{data?.results.map(({ name }) => (
					<Card key={name} name={name} />
				))}
			</div>
		</>
	);
}
