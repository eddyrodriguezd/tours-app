import axios from 'axios';

const login = (data) => {
	const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat('/users/login');

	axios
		.post(url, data, { withCredentials: true })
		.then((response) => {
			console.log(response.data);
			if (response.status === 200) {
				alert('Login successful');
			}
		})
		.catch((err) => {
			console.log('Login unsuccessful.', err);
		});
};

export default { login };
