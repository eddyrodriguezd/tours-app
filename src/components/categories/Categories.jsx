import { useState } from 'react';
import CardsGrid from './componentes/cards/CardsGrid';
import SearchBar from './componentes/searchbars/SearchBar';

const Categories = ({ categories }) => {
	const [categorySearch, setCategorySearch] = useState('');

	const newSearchValue = (text) => {
		setCategorySearch(text);
	};

	return (
		<div className='container'>
			<SearchBar searchValue={newSearchValue} />
			<CardsGrid filter={categorySearch} destinations={categories} />
		</div>
	);
};

export default Categories;
