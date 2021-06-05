import { css } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme';

const cssBody = css`
	height: 60%;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
	position: absolute;
	z-index: 1;
	bottom: 0;
	left: 0;
	right: 0;
`;

export default function Body() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			css={css([
				cssBody,
				css`
					background: ${theme.colors.background};
				`
			])}
		>
			oi
		</div>
	);
}
