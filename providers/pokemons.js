import { createContext, useEffect, useState } from 'react';
import { index } from '../api';

export const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [allPokemons, setAllPokemons] = useState([]);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const { data } = index();

	const pageSize = 20;

	const nextPage = () => {
		if (page + 1 > totalPages) return;
		setPage(page + 1);
	};

	const previousPage = () => {
		if (page - 1 < 1) return;
		setPage(page - 1);
	};

	useEffect(() => {
		if (data) setAllPokemons(data.results);
	}, [data]);

	useEffect(() => {
		const filteredPokemons = allPokemons.filter(poke =>
			poke.name.toLowerCase().includes(search.trim().toLowerCase())
		);
		setPokemons(filteredPokemons.slice((page - 1) * pageSize, page * pageSize));
		let { length } = allPokemons;
		if (search) length = filteredPokemons.length;
		setTotalPages(Math.floor(length / pageSize) + 1);
	}, [search, allPokemons, page]);

	return (
		<PokemonsContext.Provider
			value={{
				pokemons,
				setSearch,
				previousPage,
				nextPage,
				totalPages,
				page
			}}
		>
			{children}
		</PokemonsContext.Provider>
	);
};