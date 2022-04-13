/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
	withCredentials: true,
});

const url = process.env.REACT_APP_BACKEND_ENDPOINT;
export const loginAsync = (data) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	return api.post(url.concat('users/login'), data, config);
};
export const loadUserAsync = () => api.get(url.concat('users/me'));
export const logoutAsync = () => api.get(url.concat('users/logout'));

export const registerAsync = (data) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	return api.post(url.concat('users/register'), data, config);
};
export const businessAsync = (data) => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	return api.post(url.concat('users/register'), data, config);
};
