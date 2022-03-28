import {
	LOGIN_SUCCESS,
	LOGIN_REQUEST,
	LOGIN_FAIL,
	CLEAR_ERRORS,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
} from './types';
/* eslint-disable import/no-unresolved */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */

const initialState = {
	user: {},
	loading: false,
	isAuthenticated: false,
	error: null,
};
function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
		case LOAD_USER_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOAD_USER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};

		case LOGIN_FAIL:
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case LOAD_USER_FAIL:
			return {
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload,
			};
		case LOGOUT_SUCCESS:
			return {
				loading: false,
				user: null,
				isAuthenticated: false,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		case LOGOUT_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return {
				state,
			};
	}
}

export default reducer;
