import { useParams } from 'react-router-dom';
import ItineraryPanel from './panel';
import { paquete } from '../../mock/sliderImages';
import './Itinerary.css';
import Landscape from '../landing/components/carrousel/Landscape';

const Itinerary = () => {
	const { id } = useParams();
	return (
		<>
			<Landscape />
			<div className='container-itinerary'>
				<main className='container-body'>
					<h2>{paquete[id].title}</h2>
					{paquete[id].itinerary.map((el, index) => {
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
				{/* <NavLink to="/">Home</NavLink> */}
			</div>
		</>
	);
};

export default Itinerary;
