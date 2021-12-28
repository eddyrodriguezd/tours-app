import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ img, name }) => (
	<div className='grid-element'>
		<img src={img} alt='' />
		<div className='card-text'>
			<h3>{name}</h3>
		</div>
	</div>
);

export default DestinationCard;
