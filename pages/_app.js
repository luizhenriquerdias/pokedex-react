import '../styles/fonts.css';
import { globalStyles } from '../styles/globals';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			{globalStyles}
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
