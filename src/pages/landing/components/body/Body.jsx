import React from 'react';
import Categories from '../../../../components/categories/Categories';
import { categories } from '../../../../mock/mock';
import Landscape from '../carrousel/Landscape';
import Slider from '../slider/Slider';

const Body = () => (
	<>
		<Landscape />
		<Categories categories={categories} />
		<Slider />
	</>
);

export default Body;
