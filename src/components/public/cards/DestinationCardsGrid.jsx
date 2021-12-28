import {
	Arequipa,
	Cajamarca,
	Chiclayo,
	Cuzco,
	Ica,
	Iquitos,
	Lima,
	Piura,
	Tarapoto,
} from '../../../assets/destinations';
import DestinationCard from './DestinationCard';
import './DestinationCard.css';

const DestinationCardsGrid = ({ destinationsFilter }) => {
	const destinations = [
		{ id: 1, name: 'Arequipa', image: Arequipa },
		{ id: 2, name: 'Cajamarca', image: Cajamarca },
		{ id: 3, name: 'Chiclayo', image: Chiclayo },
		{ id: 4, name: 'Cuzco', image: Cuzco },
		{ id: 5, name: 'Ica', image: Ica },
		{ id: 6, name: 'Iquitos', image: Iquitos },
		{ id: 7, name: 'Lima', image: Lima },
		{ id: 8, name: 'Piura', image: Piura },
		{ id: 9, name: 'Tarapoto', image: Tarapoto },
	];

	return (
		<div className='grid'>
			{destinations
				.filter((val) =>
					val.name.toLowerCase().includes({ destinationsFilter })
				)
				.map((item) => (
					<DestinationCard
						key={item.id}
						name={item.name}
						img={item.image}
					/>
				))}
		</div>
	);
};

export default DestinationCardsGrid;
