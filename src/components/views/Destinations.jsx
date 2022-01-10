import { useState } from 'react';
import SearchBar from '../public/search bars/SearchBar';
import DestinationCardsGrid from '../public/cards/DestinationCardsGrid';

const Destinations = () => {
	const [destinationSearch, setDestinationSearch] = useState('');
	const newSearchValue = (text) => {
		setDestinationSearch(text);
	};

	return (
		<div className='container--destinations'>
			<SearchBar searchValue={newSearchValue} />
			<DestinationCardsGrid destinations={destinationSearch} />
		</div>
	);
};

export default Destinations;
