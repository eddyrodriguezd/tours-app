import axios from 'axios';

const registerTour = (data) => {
	console.log('estamos en axios');
	console.log(data);
	const url = 'http://localhost:5000/api/tour/create';

	axios
		.post(url, data)
		.then((response) => {
			console.log(response.data);
			if (response.status === 201) {
				alert('sucessfull tour');
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

const getTours = () => {
	console.log('trayendo datos');
	const url = 'http://localhost:5000/api/tour/fetch';

	axios.get(url).then((response) => console.log(response.data));
};

export { registerTour, getTours };
