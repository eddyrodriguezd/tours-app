import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
	<>
		<div className='card__icon'>
			<span className='material-icons'>{icon}</span>
		</div>
		<h3 className='card__title'>
			{title} <hr />
		</h3>
		<p className='card__text'>{description}</p>
	</>
);

export default ServiceCard;
