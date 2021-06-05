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

export { api };
