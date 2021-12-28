import { useState } from 'react';
import SearchBar from '../components/public/search bars/SearchBar';
import DestinationCardsGrid from '../components/public/cards/DestinationCardsGrid';

const Destinations = () => {
	const [destinationSearch, setDestinationSearch] = useState('');
	const newSearchValue = (text) => {
		setDestinationSearch(text);
	};

	return (
		<div>
			<SearchBar searchValue={newSearchValue} />
			<DestinationCardsGrid destinations={destinationSearch} />
		</div>
	);
};

export default Destinations;
