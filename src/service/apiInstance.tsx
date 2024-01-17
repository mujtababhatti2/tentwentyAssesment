
import axios from 'axios';

export const api_key = 'af82df531cae137175012d5908d26289'

export const ApiInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 15000,
	headers: {
		Accept: 'application/json',
	},
});