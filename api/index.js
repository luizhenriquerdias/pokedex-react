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

export const index = (page = 0, limit = 10) => useSWR(`pokemon?limit=${limit}&offset=${page * limit}`);
export const show = name => useSWR(`pokemon/${name}`);
