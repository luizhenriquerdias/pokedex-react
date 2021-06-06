import { css, Global, useTheme } from '@emotion/react';

export default function globalStyles() {
	const theme = useTheme();

	return (
		<Global
			styles={css`
				html,
				body {
					color: ${theme.colors.inverse};
					overflow: hidden;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
				}

				* {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
				}

				main {
					height: 100vh;
					overflow-y: auto;
				}

				h1 {
					font-size: 3rem;
					font-family: 'Poppins', sans-serif;
				}

				h2 {
					font-size: 2rem;
					font-family: 'Montserrat Alternates', sans-serif;
				}

				h3 {
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
}
