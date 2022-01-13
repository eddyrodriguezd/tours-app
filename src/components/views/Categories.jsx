import { useState } from 'react';
import SearchBar from '../public/search bars/SearchBar';
import CardsGrid from '../public/cards/CardsGrid';
import mock from '../../mock/mock';

const Categories = () => {
	const [categorySearch, setCategorySearch] = useState('');

	const newSearchValue = (text) => {
		setCategorySearch(text);
	};

	return (
		<div className='container--destinations'>
			<SearchBar searchValue={newSearchValue} />
			<CardsGrid filter={categorySearch} destinations={mock.categories} />
		</div>
	);
};

export default Categories;
