import axios from 'axios';

const sendHttpRequest = (
	method,
	endpoint,
	data,
	{ successTrigger, successCode, successMessage, errorMessage }
) => {
	const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(endpoint);

	axios({ method, url, data, withCredentials: true })
		.then((response) => {
			if (response.status !== successCode) {
				throw new Error(errorMessage);
			}
			console.log(successMessage);
			successTrigger(response.data.value);
		})
		.catch((err) => {
			console.log(errorMessage, err);
		});
};

export default sendHttpRequest;
