import { css, Global } from '@emotion/react';

export const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
					Droid Sans, Helvetica Neue, sans-serif;
			}

			* {
				padding: 0;
				margin: 0;
				box-sizing: border-box;
			}

			main {
				min-height: 100vh;
			}

			h1 {
				font-size: 3rem;
				font-family: 'Poppins', sans-serif;
			}

			h2 {
				font-size: 1.1rem;
				font-family: 'Montserrat Alternates', sans-serif;
			}

			h1,
			h2,
			h3 {
				color: white;
			}
		`}
	/>
);
