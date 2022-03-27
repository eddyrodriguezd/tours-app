// import axios from 'axios';
import sendHttpRequest from '../sendHttpRequest';

const registerReservation = (data, setSuccess) => {
	const responseOptions = {
		successTrigger: setSuccess,
		successCode: 200,
		successMessage: 'Reservation successfully created',
		errorMessage: "Couldn't create reservation",
	};

	sendHttpRequest('post', '/reservation/create', data, responseOptions);
};

const fetchHotels = (data, setSuccess) => {
	const responseOptions = {
		successTrigger: setSuccess,
		successCode: 200,
		successMessage: "Hotels' information successfully fetched",
		errorMessage: "Couldn't fetch hotels",
	};
	console.log('fetch hotels => data sent as body:', data);

	sendHttpRequest(
		'post',
		'/reservation/hotels/fetch',
		data,
		responseOptions
	);
};

export { registerReservation, fetchHotels };
