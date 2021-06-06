import { css } from '@emotion/react';
import { useRef, useEffect } from 'react';
import { Tabs, Tab } from '../Tabs';
import Stats from './Tabs/Stats';
import Abilities from './Tabs/Abilities';
import Evolutions from './Tabs/Evolutions';

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
	const tabsRef = useRef();

	useEffect(() => {
		if (tabsRef.current) tabsRef.current.setActiveIndex(0);
	}, [pokemon]);

	return (
		<div css={Styles.Body}>
			<Tabs ref={tabsRef}>
				<Tab label="Stats">
					<Stats pokemon={pokemon} />
				</Tab>
				<Tab label="Abilities">
					<Abilities pokemon={pokemon} />
				</Tab>
				<Tab label="Evo Chain">
					<Evolutions pokemon={pokemon} />
				</Tab>
			</Tabs>
		</div>
	);
}
