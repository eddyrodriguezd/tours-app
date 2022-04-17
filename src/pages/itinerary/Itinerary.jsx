/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
	useParams,
	useLocation,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import ItineraryPanel from './components/panel';
import './Itinerary.css';
import ModalCheckout from './components/modalCheckout/ModalCheckout';

const Itinerary = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { id } = useParams();
	const { isAuthenticated } = useSelector((state) => state);
	const [isModalVisible, setIsModalVisible] = useState(false);

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
				<main className='container-body'>
					<h2>{tour.title}</h2>
					{tour.itinerary.map((el, index) => {
						const i = index * 2;
						return (
							<ItineraryPanel
								key={i}
								titulo={el.day}
								description={el.description}>
								<ul className='aling-left'>
									{el.items.map((e, indexItem) => {
										const keyVal = indexItem * 2;
										return <li key={keyVal}>{e}</li>;
									})}
								</ul>
							</ItineraryPanel>
						);
					})}
				</main>
				<Button type='primary' onClick={handleClick}>
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
