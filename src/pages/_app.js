import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { PokemonsProvider } from '../providers/pokemons';
import { globalStyles } from '../styles/globals';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState(dark);
	const change = () => {
		setTheme(theme.name === 'dark' ? light : dark);
	};
	return (
		<ThemeProvider theme={{ ...theme, change }}>
			<PokemonsProvider>
				{globalStyles}
				<Component {...pageProps} />
			</PokemonsProvider>
		</ThemeProvider>
	);
}
