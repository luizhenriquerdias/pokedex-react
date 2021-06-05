import { PokemonsProvider } from '../providers/pokemons';
import { ThemeProvider } from '../providers/theme';
import { globalStyles } from '../styles/globals';

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<PokemonsProvider>
				{globalStyles}
				<Component {...pageProps} />
			</PokemonsProvider>
		</ThemeProvider>
	);
}
