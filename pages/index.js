import { index } from '../api';

export default function Home() {
	const { data } = index();

	return (
		<h1>{data?.results.map(r => r.name)}</h1>
	);
}
