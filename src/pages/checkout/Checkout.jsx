import { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { Steps, Button, Card } from 'antd';

import TravellersForm from '../../components/travellersInfo/TravellersForm';
import FlyingPoints from '../../components/tickets';

import './Checkout.css';

const { Step } = Steps;

const Checkout = () => {
	const location = useLocation();
	if (location.state == null || location.state.tour == null)
		return <Navigate to='/paquetes' />;

	const { tour } = location.state;
	const { Meta } = Card;

	const [current, setCurrent] = useState(0);
	const [inputs, setInputs] = useState({
		membersSize: 1,
	});

	const changeFormValues = (key, value) => {
		console.log(`Key: ${key}`);
		console.log(`Value: ${value}`);

		setInputs({
			...inputs,
			[key]: value,
		});
	};

	const reservation = {
		tourId: '',
		contactInfo: {
			email: '',
			phoneNumber: '',
		},
		dateOfTravel: '',
		members: [],
		transport: {
			mean: '',
			startDestination: '',
			endDestination: tour.destination,
		},
	};

	function hasNumber(myString) {
		return /\d/.test(myString);
	}

	useEffect(() => {
		// Setting values to reservation (everything but arrays)
		Object.keys(inputs)
			.filter((key) => key !== 'membersSize')
			.map((key) => key.split('.'))
			.filter((keyArray) => !hasNumber(keyArray[0]))
			.forEach((keyArray) => {
				if (keyArray.length === 1) {
					reservation[keyArray[0]] = inputs[keyArray[0]];
				} else {
					reservation[keyArray[0]][keyArray[1]] =
						inputs[keyArray[0].concat('.').concat(keyArray[1])];
				}
			});

		// Adding travel members
		for (let i = 0; i < inputs.membersSize; i += 1) {
			if (
				inputs['member'.concat(i).concat('.name')] !== undefined &&
				inputs['member'.concat(i).concat('.lastName')] !== undefined &&
				inputs['member'.concat(i).concat('.idNumber')] !== undefined
			) {
				reservation.members.push({
					name: inputs['member'.concat(i).concat('.name')],
					lastName: inputs['member'.concat(i).concat('.lastName')],
					idType:
						inputs['member'.concat(i).concat('.idType')] === undefined
							? 'DNI'
							: inputs['member'.concat(i).concat('.idType')],
					idNumber: inputs['member'.concat(i).concat('.idNumber')],
				});
			}
		}

		console.log('Reservation: ', reservation);
	}, [inputs]);

	const steps = [
		{
			title: 'Información',
			content: <TravellersForm onChangeFn={changeFormValues} />,
		},
		{
			title: 'Vuelo',
			content: <FlyingPoints />,
		},
		{
			title: 'Pago',
			content: <Button placeholder='Pagar' />,
		},
	];

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
	};

	const success = () => <Navigate to='/paquetes' />;

	return (
		<div style={{ marginTop: '6rem' }}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt='example' src={`assets/img/${tour.img}.jpg`} />}>
				<Meta title={tour.title} description={tour.title} />
			</Card>

			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>

			<div className='steps-content'>{steps[current].content}</div>

			<div className='steps-action'>
				{current > 0 && (
					<Button className='steps-button' onClick={() => prev()}>
						Anterior
					</Button>
				)}
				{current < steps.length - 1 && (
					<Button
						className='steps-button'
						type='primary'
						onClick={() => next()}>
						Siguiente
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						className='steps-button'
						type='primary'
						onClick={() => success()}>
						Finalizar
					</Button>
				)}
			</div>
		</div>
	);
};

export default Checkout;
