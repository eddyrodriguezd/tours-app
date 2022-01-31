import { Card } from 'antd';
import React from 'react';
import './Why.css';

const Why = () => (
	<div className='background-why wow fadeIn' data-wow-duration='3s'>
		<div className='why-container-card'>
			<Card className='card why-width'>
				<h2 className='card__title nunito'>
					¿Por qué escogernos? <hr />
				</h2>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
		</div>
	</div>
);

export default Why;
