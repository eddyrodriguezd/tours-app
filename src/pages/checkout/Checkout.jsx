import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Steps, Button, message, Card } from 'antd';

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
	const { tour } = location.state;
	const { Meta } = Card;

	const [current, setCurrent] = useState(0);

	const next = () => {
		setCurrent(current + 1);
	};

	const prev = () => {
		setCurrent(current - 1);
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
			<div className='steps-action'>
				{current < steps.length - 1 && (
					<Button type='primary' onClick={() => next()}>
						Next
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						type='primary'
						onClick={() => message.success('Processing complete!')}>
						Done
					</Button>
				)}
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						Previous
					</Button>
				)}
			</div>
			<div className='steps-content'>{steps[current].content}</div>
		</div>
	);
};

export default Checkout;
