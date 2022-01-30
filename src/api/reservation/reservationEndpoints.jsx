import axios from 'axios';

const registerReservation = (data) => {
	const url = process.env.REACT_APP_BACKEND_ENDPOINT.concat(
		'/reservation/create'
	);

	axios.post(url, data).then((response) => {
		console.log(response.data);
		if (response.status === 200) {
			alert('Reservation sucessfully created');
		}
	});
};

export default { registerReservation };
