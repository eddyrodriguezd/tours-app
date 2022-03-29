/* eslint-disable import/prefer-default-export */

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from './types';

import { loginAsync, loadUserAsync, logoutAsync } from '../api/auth/Login';

export const login = (user) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		const { data } = await loginAsync(user);

		dispatch({ type: LOGIN_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
	}
};
export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};
export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const { data } = await loadUserAsync();

		dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({
			type: LOAD_USER_FAIL,
			payload: error.response.data.message,
		});
	}
};
export const logout = () => async (dispatch) => {
	try {
		await logoutAsync();

		dispatch({ type: LOGOUT_SUCCESS });
	} catch (error) {
		dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
	}
};
