import axios from 'axios';

const registerTour = (data) => {
	const url = 'http://localhost:5000/api/tour/create';

	const formData = new FormData();
	formData.append('title', data.title);
	formData.append('description', data.description);
	formData.append('destination', data.destination);
	formData.append('categori', data.categori);
	formData.append('price', data.price);
	formData.append('nDays', data.nDays);
	formData.append('startDate', data.startDate);
	formData.append('endDate', data.endDate);
	data.images.forEach((el, i) => {
		formData.append(`images[${i}]`, el);
	});
	formData.append('itinerary', JSON.stringify(data.itinerary));
	axios
		.post(url, formData)
		.then((response) => {
			if (response.status === 201) {
				alert('Tour guardado Exitosamente');
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

const getTours = async () => {
	const url = 'http://localhost:5000/api/tour/fetch';
	let dataTours = {};
	try {
		dataTours = await axios(url);
	} catch (err) {
		console.log(err);
	}
	return dataTours.data;
};

export { registerTour, getTours };
