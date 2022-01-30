import { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { Steps, Button, Card } from 'antd';

import TravellersForm from '../../components/travellersInfo/TravellersForm';
import FlyingPoints from '../../components/tickets';

import './Checkout.css';

const { Step } = Steps;

const steps = [
	{
		title: 'Información',
		content: <TravellersForm />,
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

const Checkout = () => {
	const location = useLocation();
	if (location.state == null || location.state.tour == null)
		return <Navigate to='/paquetes' />;

	const { tour } = location.state;
	const { Meta } = Card;

	const [current, setCurrent] = useState(0);

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
