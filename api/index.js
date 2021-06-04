import swr from 'swr';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
	headers: {
		Accept: 'application/json'
	},
	responseType: 'json'
});

const clearData = response => {
	if (typeof (response || {}).data === 'object') return clearData(response.data);
	return response;
};

api.interceptors.response.use(clearData, e => e);

const getFullUrl = url => `${api.defaults.baseURL}/${url}`;
const useSWR = url => swr(getFullUrl(url), api.get(url));

export const index = () => useSWR('pokemon?limit=100000');
export const show = name => useSWR(`pokemon/${name}`);
