import { css } from '@emotion/react';
import { Poppins } from '../../styles/classes';

const Style = css([
	Poppins,
	css`
		font-size: 0.75rem;
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 4px 8px;
		color: white;
		margin-bottom: 8px;
		margin-right: 8px;
		border-radius: 12px;
	`
]);
export default function Chip({ label, labelColor, inline }) {
	return (
		<div
			css={css`
				display: ${inline ? 'inline' : 'block'};
			`}
		>
			<span
				css={css([
					Style,
					css`
						color: ${labelColor || 'white'};
					`
				])}
			>
				{label}
			</span>
		</div>
	);
}
