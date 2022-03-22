import axios from 'axios';

const registerReservation = (data) => {
	const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
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
		});
};

export default { registerReservation };
