import mock from '../../../mock/destinations/mockDestinations';
import DestinationCard from './DestinationCard';
import './DestinationCard.css';

const DestinationCardsGrid = ({ destinationsFilter }) => (
	<div className='grid'>
		{mock.destinations
			.map((item) => (
				<DestinationCard
					key={item.id}
					name={item.name}
					img={item.image}
				/>
			))
			.filter((val) => (
				val.props.name.toLowerCase().includes(destinationsFilter)
			))}
	</div>
);

export default DestinationCardsGrid;
