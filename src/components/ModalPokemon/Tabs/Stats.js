import { css } from '@emotion/react';
import { Fragment } from 'react';
import { formatStatName } from '../../../util/functions';
import ProgressBar from '../../Atoms/ProgressBar';
import { FlexCenter } from '../../../styles/classes';

const Styles = {
	Grid2Columns: css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 8px;
	`
};

export default function Stats({ pokemon }) {
	const sum = pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
	const average = sum / pokemon.stats.length;
	return (
		<div css={Styles.Grid2Columns}>
			{pokemon.stats.map(({ base_stat, stat }) => (
				<Fragment key={stat.name}>
					<span>{formatStatName(stat.name)}</span>
					<div css={FlexCenter}>
						<ProgressBar
							fill={base_stat < average ? 'red' : '#68c151'}
							value={base_stat}
							max={255}
						/>
					</div>
				</Fragment>
			))}
		</div>
	);
}
