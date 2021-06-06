import { css, useTheme } from '@emotion/react';
import { AlignCenter, Flex, MarginRight } from '../../styles/classes';

const Styles = {
	Main: fill => css`
		${Flex};
		${AlignCenter}
		color: ${fill};
		font-size: 0.75rem;
		font-weight: bold;
		width: 100%;
	`,
	ProgressBar: (fill, val, theme) => css`
		flex-grow: 1;
		background: rgba(${theme.name === 'light' ? '0,0,0' : '255,255,255'}, 0.25);
		height: 5px;
		border-radius: 5px;

		&::after {
			border-radius: inherit;
			content: '';
			width: calc(100% - ${val}%);
			height: 100%;
			background: ${fill};
		}
	`
};

export default function ProgressBar({ fill, value, max }) {
	const theme = useTheme();

	return (
		<div css={Styles.Main(fill)}>
			<span css={MarginRight(8)}>{value}</span>
			<div css={Styles.ProgressBar(fill, (1 - value / max) * 100, theme)} />
		</div>
	);
}
