import { ThemeProvider } from '../providers/theme';
import '../styles/fonts.css';
import { globalStyles } from '../styles/globals';

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			{globalStyles}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
