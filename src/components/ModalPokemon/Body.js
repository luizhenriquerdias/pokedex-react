import { css, useTheme } from '@emotion/react';
import { Tabs, Tab } from '../Tabs';

const Styles = {
	Body: css`
		height: 60%;
		position: absolute;
		z-index: 100;
		bottom: 0;
		left: 0;
		right: 0;
	`
};

export default function Body({ pokemon }) {
	const theme = useTheme();
	return (
		<div css={Styles.Body}>
			<Tabs>
				<Tab label="Stats">
					<p>content 0</p>
				</Tab>
				<Tab label="Abilities">oi</Tab>
				<Tab label="Evolutions">oi</Tab>
			</Tabs>
		</div>
	);
}
