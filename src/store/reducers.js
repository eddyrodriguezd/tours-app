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
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	REGISTER_BUSINESS_REQUEST,
	REGISTER_BUSINESS_SUCCESS,
	REGISTER_BUSINESS_FAIL,
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
		case REGISTER_USER_REQUEST:
		case REGISTER_BUSINESS_REQUEST:
			return {
				loading: true,
				isAuthenticated: false,
			};
		case LOAD_USER_SUCCESS:
		case LOGIN_SUCCESS:
		case REGISTER_USER_SUCCESS:
		case REGISTER_BUSINESS_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case REGISTER_BUSINESS_FAIL:
		case REGISTER_USER_FAIL:
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
