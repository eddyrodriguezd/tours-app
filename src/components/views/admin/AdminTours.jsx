/* import { useState } from 'react';
import SearchBar from '../public/search bars/SearchBar'; */
import TourCardsGrid from '../../private/cards/tours/TourCardsGrid';

const AdminTours = ({ tours }) => (
	/* const [categorySearch, setCategorySearch] = useState('');

	const newSearchValue = (text) => {
		setCategorySearch(text);
	}; */

	<div className=''>
		{/* <SearchBar searchValue={newSearchValue} /> */}
		<TourCardsGrid tours={tours} />
	</div>
);
export default AdminTours;
