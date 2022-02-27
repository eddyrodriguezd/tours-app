import { Card } from 'antd';
import React from 'react';
import './Packages.css';
import { pakages } from '../../../../mock/sliderImages';
import PackageCard from './packageCard/PackageCard';

const Packages = () => (
	<div className='package fondo-separacion'>
		<h2 className='nunito title-section'>
			¡NUESTROS PAQUETES! <hr />
		</h2>
		<div className='cards'>
			{pakages.map((el) => (
				<Card className='card wow fadeInUp card--sp'>
					<PackageCard img={el.img} titulo={el.title} />
				</Card>
			))}
		</div>
	</div>
);
export default Packages;
