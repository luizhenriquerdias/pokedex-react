import useSWR from 'swr';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
	headers: {
		Accept: 'application/json'
	},
	responseType: 'json'
});

const clearData = response => {
	if (typeof (response || {}).data === 'object')
		return clearData(response.data);
	return response;
};

api.interceptors.response.use(clearData, e => e);

const getFullUrl = url => `${api.defaults.baseURL}/${url}`;

export const index = (page = 0, limit = 20) => {
	const url = `pokemon?limit=${limit}&offset=${page * limit}`;
	return useSWR(getFullUrl(url), api.get(`pokemon?limit=${limit}&offset=${page * limit}`));
};
