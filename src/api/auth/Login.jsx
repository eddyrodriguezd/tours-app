/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENDPOINT;
export const loginAsync = (data) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	return api.post(url.concat('/api/users/login'), data, config);
};
export const loadUserAsync = () => api.get(url.concat('/api/users/me'));
export const logoutAsync = () => api.get(url.concat('/api/users/logout'));
