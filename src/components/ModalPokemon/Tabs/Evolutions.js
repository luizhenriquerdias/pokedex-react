import { useContext, useEffect, useState } from 'react';
import { fetchSpeciesByName } from '../../../api';
import { api } from '../../../api/axios';
import { PokemonsContext } from '../../../providers/pokemons';
import { PokemonGrid } from '../../../styles/classes';
import Card from '../../Card';
import Loading from '../../Loading';

export default function Evolutions({ pokemon }) {
	const [loading, setLoading] = useState(true);
	const [evolutions, setEvolutions] = useState([]);
	const { setSelectedPokemon } = useContext(PokemonsContext);
	useEffect(async () => {
		const { evolution_chain } = await fetchSpeciesByName(pokemon.species.name);
		const { chain } = await api.get(evolution_chain.url);
		const pokemons = [];
		const getEvolutionChain = (evolves_to = []) => {
			const [evolution] = evolves_to;
			if (evolution) {
				pokemons.push(evolution.species);
				getEvolutionChain(evolution.evolves_to);
			}
		};
		if (chain.species) {
			pokemons.push(chain.species);
			getEvolutionChain(chain.evolves_to);
		}
		setEvolutions(pokemons);
		setLoading(false);
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div css={PokemonGrid}>
			{evolutions.map(poke => (
				<Card key={poke.name} name={poke.name} onClick={setSelectedPokemon} />
			))}
		</div>
	);
}
