import WOW from 'wowjs';
import React from 'react';
// import Categories from '../../../../components/categories/Categories';
// import { categories } from '../../../../mock/mock';
import Video from '../video/Video';
import './Body.css';
import Service from '../services/Service';
import Why from '../why/Why';
import Packages from '../packages/Packages';
import Partners from '../partners/Partners';

const Body = () => {
	new WOW.WOW({
		live: false,
	}).init();

	return (
		<>
			<Video />
			<div className='main'>
				<Service />
				<Why />
				<Packages />
				<Partners />
				{/*				<Categories categories={categories} /> */}
			</div>
		</>
	);
};
export default Body;
