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
		border-radius: 12px;
	`
]);
export default function Chip({ label }) {
	return (
		<div>
			<span css={Style}>{label}</span>
		</div>
	);
}
