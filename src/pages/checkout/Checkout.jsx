import { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { Steps, Button, Card } from 'antd';

import moment from 'moment';

import TravellersForm from '../../components/travellersInfo/TravellersForm';
import FlyingPoints from '../../components/tickets';

import reservationEndpoints from '../../api/reservation/reservationEndpoints';

import './Checkout.css';

const { Step } = Steps;

const Checkout = () => {
	const location = useLocation();
	if (location.state == null || location.state.tour == null)
		return <Navigate to='/paquetes' />;

	const { tour } = location.state;
	const { Meta } = Card;

	const days = tour.n_dias;

	const [current, setCurrent] = useState(0);

	const [inputs, setInputs] = useState({
		tour: {
			tourId: tour.id,
			destination: tour.destination,
		},
		contactInfo: {
			clientId: '62092e1d497b63825370e49d',
			email: 'eddyrodriguezdlc@gmail.com',
			phoneNumber: '+51999000999',
		},
		members: [],
		startDate: moment(new Date()).format('DD/MM/YYYY').toString(),
	});

	const changeFormValues = (key, value) => {
		setInputs({
			...inputs,
			[key]: value,
		});
	};

	const addMemberInfo = (key, index, value) => {
		setInputs(() => ({
			...inputs,
			members: [
				...inputs.members.slice(0, index),
				{
					...inputs.members[index],
					[key]: value,
				},
				...inputs.members.slice(index + 1),
			],
		}));
	};

	// Calculate endDate based on startDate and tour's duration
	useEffect(() => {
		setInputs({
			...inputs,
			endDate: moment(inputs.startDate, 'DD/MM/YYYY')
				.add(days, 'days')
				.format('DD/MM/YYYY')
				.toString(),
		});
	}, [inputs.startDate]);

	// Set 'DNI' as idType by default
	useEffect(() => {
		inputs.members.map((member, index) => {
			if (member.idType === undefined) {
				setInputs({
					...inputs,
					members: [
						...inputs.members.slice(0, index),
						{
							...inputs.members[index],
							idType: 'DNI',
						},
						...inputs.members.slice(index + 1),
					],
				});
			}
			return inputs;
		});
	}, [inputs.members]);

	// Navigate through differents sections from Stepper
	const steps = [
		{
			title: 'Información',
			content: (
				<TravellersForm
					inputs={inputs}
					addMemberInfo={addMemberInfo}
					onChangeFn={changeFormValues}
				/>
			),
		},
		{
			title: 'Vuelo',
			content: <FlyingPoints onChangeFn={changeFormValues} />,
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

	const success = () => {
		console.log('Reservation that will be saved:', JSON.stringify(inputs));
		reservationEndpoints.registerReservation(inputs);
	};

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
