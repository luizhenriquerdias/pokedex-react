import { createContext, useEffect, useState } from 'react';
import { fetchAllPokemons } from '../api';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [allPokemons, setAllPokemons] = useState([]);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	useEffect(() => {
		fetchAllPokemons().then(({ results }) => setAllPokemons(results));
	}, []);

	const pageSize = 20;

	const nextPage = () => {
		if (page + 1 > totalPages) return;
		setPage(page + 1);
	};

	const previousPage = () => {
		if (page - 1 < 1) return;
		setPage(page - 1);
	};

	const doFilter = () => {
		const filteredPokemons = allPokemons.filter(poke =>
			poke.name.toLowerCase().includes(search.trim().toLowerCase())
		);
		setPokemons(filteredPokemons.slice((page - 1) * pageSize, page * pageSize));
		let { length } = allPokemons;
		if (search) length = filteredPokemons.length;
		setTotalPages(Math.floor(length / pageSize) + 1);
	};

	useEffect(() => {
		doFilter();
	}, [allPokemons, page]);

	useEffect(() => {
		setPage(1);
		doFilter();
	}, [search]);

	return (
		<PokemonsContext.Provider
			value={{
				pokemons,
				setSearch,
				previousPage,
				nextPage,
				totalPages,
				page,
				setSelectedPokemon,
				selectedPokemon
			}}
		>
			{children}
		</PokemonsContext.Provider>
	);
};
