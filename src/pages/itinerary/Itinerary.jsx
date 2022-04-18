/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
	useParams,
	useLocation,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Card, Carousel } from 'antd';
import { useSelector } from 'react-redux';
import ItineraryPanel from './components/panel';
import './Itinerary.css';
import ModalCheckout from './components/modalCheckout/ModalCheckout';

const contentStyle = {
	height: '400px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	objectFit: 'cover',
};

const Itinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { isAuthenticated } = useSelector((state) => state);
	const [isModalVisible, setIsModalVisible] = useState(false);

	console.log(location.state.tour);
	if (location.state == null || location.state.tour == null)
		return <Navigate to='/paquetes' />;

	const { tour } = location.state;
	const handleClick = () =>
		isAuthenticated
			? navigate('/checkout', { state: { tour } })
			: setIsModalVisible(true);

	return (
		<>
			<div className='container-itinerary'>
				<Carousel autoplay>
					{tour.images.map((e) => (
						<div>
							<h3 style={contentStyle}>
								<img alt='example' src={e} />
							</h3>
						</div>
					))}
				</Carousel>
				<main className='container-body'>
					<Card
						hoverable
						style={{ width: 340, marginRight: 50 }}
						cover={
							<img
								alt='example'
								src={
									tour.images[0]
										? tour.images[0]
										: 'https://res.cloudinary.com/dmorxcs1y/image/upload/v1650170655/samples/mulyadi-ZnLprInKM7s-unsplash_1_nqiqes.jpg'
								}
							/>
						}>
						<Card.Meta
							title='Descripción :'
							description={tour.description}
						/>
					</Card>
					<div className='items'>
						<h2 className='title'>{tour.title}</h2>
						{tour.itinerary.map((el, index) => {
							const i = index * 2;
							return (
								<ItineraryPanel key={i} titulo={el.day}>
									<ul
										className='aling-left'
										dangerouslySetInnerHTML={{ __html: el.description }}
									/>
								</ItineraryPanel>
							);
						})}
					</div>
				</main>
				<Button
					type='primary'
					onClick={handleClick}
					className='button-itinerary'>
					¡Lo quiero!
					{/* <Link to='/checkout' state={{ tour }}>
					¡Lo quiero!
				</Link> */}
				</Button>
			</div>
			<ModalCheckout
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				state={tour}
				id={id}
			/>
		</>
	);
};

export default Itinerary;
