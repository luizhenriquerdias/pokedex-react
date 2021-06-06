import swr from 'swr';
import { api } from './axios';

const getFullUrl = url => `${api.defaults.baseURL}/${url}`;
const useSWR = url => swr(getFullUrl(url), api.get(url));

export const index = () => useSWR('pokemon?limit=100000');
export const show = name => useSWR(`pokemon/${name}`);
export const fetchAbilityByName = name => useSWR(`ability/${name}`);
