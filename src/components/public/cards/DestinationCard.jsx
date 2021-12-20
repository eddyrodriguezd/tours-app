import React from 'react';
import './DestinationCard.css';

export default function DestinationCard(props) {
	return (
		<div className='grid-element'>
			<img src={props.img} alt='' />
			<div className='card-text'>
				<h3>{props.name}</h3>
			</div>
		</div>
	);
}
