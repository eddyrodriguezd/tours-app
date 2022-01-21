import { Link, useLocation, Navigate } from 'react-router-dom';
import { Button } from 'antd';

import ItineraryPanel from './panel';
import './Itinerary.css';
import Landscape from '../landing/components/carrousel/Landscape';

const Itinerary = () => {
	const location = useLocation();
	if (location.state == null || location.state.tour == null) return <Navigate to='/paquetes' />

	const { tour } = location.state;

	return (
		<>
			<Landscape />
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
				<Link to='/checkout' state={{ tour }}>
					<Button type='primary'>¡Lo quiero!</Button>
				</Link>
			</div>
		</>
	);
};

export default Itinerary;
