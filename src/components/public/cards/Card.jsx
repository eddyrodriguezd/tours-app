import React from 'react';
import './Card.css';

const Card = ({ img, name }) => (
	<div className='grid-element'>
		<img src={img} alt='' />
		<div className='card-text'>
			<h3>{name}</h3>
		</div>
	</div>
);

export default Card;
