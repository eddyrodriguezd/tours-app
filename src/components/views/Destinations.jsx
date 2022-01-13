import { useState } from 'react';
import SearchBar from '../public/search bars/SearchBar';
import CardsGrid from '../public/cards/CardsGrid';
import mock from '../../mock/mock';

const Destinations = () => {
	const [destinationSearch, setDestinationSearch] = useState('');

	const newSearchValue = (text) => {
		setDestinationSearch(text);
	};

	return (
		<div className='container--destinations'>
			<SearchBar searchValue={newSearchValue} />
			<CardsGrid
				filter={destinationSearch}
				destinations={mock.destinations}
			/>
		</div>
	);
};

export default Destinations;
