import { css, Global } from '@emotion/react';

export const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
					Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			* {
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}

			main {
				min-height: 100vh;
				background: linear-gradient(#d3cce3, #e9e4f0);
			}
		`}
	/>
);
