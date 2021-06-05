import { css, useTheme } from '@emotion/react';

const Styles = {
	Body: theme => css`
		height: 60%;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		right: 0;
		background: ${theme.colors.background};
	`
};

export default function Body() {
	const theme = useTheme();

	return <div css={Styles.Body(theme)}>oi</div>;
}
