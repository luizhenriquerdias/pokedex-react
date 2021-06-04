import { css } from '@emotion/react';

export default function Chip({ label }) {
	return (
		<div>
			<span
				css={css`
					font-size: 0.75rem;
					display: inline-block;
					background: rgba(255, 255, 255, 0.3);
					padding: 4px 8px;
					margin-bottom: 8px;
					border-radius: 12px;
				`}
			>
				{label}
			</span>
		</div>
	);
}
