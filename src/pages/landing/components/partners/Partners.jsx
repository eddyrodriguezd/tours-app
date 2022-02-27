import React from 'react';
import { partners } from '../../../../mock/sliderImages';
import PartnersImage from './partnersCard/PartnersImage';
import './Partners.css';

const Partners = () => (
	<div className='transport-partners wow fadeInLeft'>
		<h2 className='nunito title-section'>
			¡NUESTROS SOCIOS! <hr />
		</h2>
		<div className='transport-partners__container'>
			<div className='transport-partners__container-left'>
				<img
					className='transport-partners__img'
					src='assets/img/socios-transporte.jpg'
					alt='transports'
				/>
			</div>
			<div className='transport-partners--gallery'>
				<div className='transport-partners__img-transports'>
					{partners.map((el) => (
						<PartnersImage img={el} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export default Partners;
