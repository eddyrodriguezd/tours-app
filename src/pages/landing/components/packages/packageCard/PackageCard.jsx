import React from 'react';

const PackageCard = ({ img, titulo }) => (
	<>
		<img
			src={`assets/img/${img}.jpg`}
			alt={img}
			className='package-card__img'
		/>
		<a
			className='package-card__a'
			href='!#'
			target='_blank'
			rel='noopener noreferrer'>
			{titulo}
		</a>
	</>
);

export default PackageCard;
