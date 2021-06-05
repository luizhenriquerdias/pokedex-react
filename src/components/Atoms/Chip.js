import { css } from '@emotion/react';
import { Poppins } from '../../styles/classes';

const Styles = {
	Container: inline => css`
		display: ${inline ? 'inline' : 'block'};
	`,

	Label: (labelColor = 'white') => css`
		${Poppins}
		font-size: 0.75rem;
		display: inline-block;
		background: rgba(255, 255, 255, 0.2);
		padding: 4px 8px;
		color: white;
		margin-bottom: 8px;
		margin-right: 8px;
		border-radius: 12px;
		color: ${labelColor};
	`
};

export default function Chip({ label, labelColor, inline }) {
	return (
		<div css={Styles.Container(inline)}>
			<span css={Styles.Label(labelColor)}>{label}</span>
		</div>
	);
}
