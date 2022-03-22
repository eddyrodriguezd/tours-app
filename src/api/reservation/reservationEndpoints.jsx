// import axios from 'axios';
import sendHttpRequest from '../sendHttpRequest';

const registerReservation = (data, setSuccess) => {
	/* const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
		'/reservation/create'
	);

	axios
		.post(url, data, { withCredentials: true })
		.then((response) => {
			console.log(response.data);
			if (response.status === 200) {
				alert('Reservation successfully created');
			}
		})
		.catch((err) => {
			console.log(
				'Could not send the reservation information to the backend service.',
				err
			);
		}); */
	const responseOptions = {
		successTrigger: setSuccess,
		successCode: 200,
		successMessage: 'Reservation successfully created',
		errorMessage: "Couldn't create reservation",
	};

	sendHttpRequest('post', '/reservation/create', data, responseOptions);
};

export default { registerReservation };
