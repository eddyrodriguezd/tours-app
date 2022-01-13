import TourCard from './TourCard';
import './TourCard.css';

const TourCardsGrid = ({ tours }) => (
    <div className='grid-tours'>
        {tours.map((item) => (
            <TourCard
                key={item.id}
                name={item.name}
                img={item.image}
            />
        ))}
    </div>
);

export default TourCardsGrid;