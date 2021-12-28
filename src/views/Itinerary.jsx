import Slider from '../components/public/Slider/SliderComponent';
import ItineraryPanel from '../components/public/Itinerary/ItineraryPanel';
import '../components/public/Itinerary/Itinerary.css';

const Itinerary = () => (
	<>
		<Slider />
		<div className='container-itinerary'>
			<main className='container-body'>
				<h2>Detalles del Viaje</h2>
				<ItineraryPanel
					titulo='titulo1'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				/>
				<ItineraryPanel
					titulo='titulo1'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				/>
				<ItineraryPanel
					titulo='titulo1'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				/>
				<ItineraryPanel
					titulo='titulo1'
					description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				/>
			</main>
			{/* <NavLink to="/">Home</NavLink> */}
		</div>
	</>
);

export default Itinerary;
