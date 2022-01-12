import Slider from '../public/Slider/SliderComponent';
import ItineraryPanel from '../public/Itinerary/ItineraryPanel';
import { itinerario } from '../../mock/sliderImages';
import '../public/Itinerary/Itinerary.css';

const Itinerary = () => (
	<>
		<Slider />
		<div className='container-itinerary'>
			<main className='container-body'>
				<h2>Itinerario del Viaje</h2>
				{itinerario.map((el, index) => {
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

export default Itinerary;
