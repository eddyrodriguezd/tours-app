import { useState } from 'react';
import SearchBar from '../public/search bars/SearchBar';
import DestinationCardsGrid from '../public/cards/DestinationCardsGrid';

const Destinations = () => {
	const [destinationSearch, setDestinationSearch] = useState('');

	const newSearchValue = (text) => {
		console.log('new search text: ' + text);
		setDestinationSearch(text);
	};

	return (
		<div className='container--destinations'>
			<SearchBar searchValue={newSearchValue} />
			<DestinationCardsGrid destinationsFilter={destinationSearch} />
		</div>
	);
};

export default Destinations;
