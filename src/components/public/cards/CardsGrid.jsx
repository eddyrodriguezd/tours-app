import Card from './Card';
import './Card.css';

const CardsGrid = ({ filter, destinations }) => (
	<div className='grid'>
		{destinations
			.map((item) => (
				<Card key={item.id} name={item.name} img={item.image} />
			))
			.filter((val) => val.props.name.toLowerCase().includes(filter))}
	</div>
);

export default CardsGrid;
