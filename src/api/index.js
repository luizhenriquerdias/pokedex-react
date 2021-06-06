import { api } from './axios';

export const fetchAllPokemons = () => api.get('pokemon?limit=100000');
export const fetchPokemonByName = name => api.get(`pokemon/${name}`);
export const fetchAbilityByName = name => api.get(`ability/${name}`);
export const fetchSpeciesByName = name => api.get(`pokemon-species/${name}`);
export const fetchEvolutionChainBySpeciesId = id =>
	api.get(`evolution-chain/${id}`);
