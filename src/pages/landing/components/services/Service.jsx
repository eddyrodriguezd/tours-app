import { Card } from 'antd';
import React from 'react';
import ServiceCard from './serviceCard/ServiceCard';
import { services } from '../../../../mock/sliderImages';

import './Service.css';

const Service = () => (
	<div
		className='services fondo-separacion wow fadeIn'
		data-wow-duration='2s'>
		<h2 className='nunito title-section'>
			¡NUESTROS SERVICIOS! <hr />
		</h2>
		<div className='cards'>
			{services.map((e) => (
				<Card className='card wow fadeInUp'>
					<ServiceCard
						icon={e.icon}
						title={e.title}
						description={e.description}
					/>
				</Card>
			))}
		</div>
	</div>
);

export default Service;
