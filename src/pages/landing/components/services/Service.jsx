import { Card } from 'antd';
import React from 'react';
import './Service.css';

const Service = () => (
	<div
		className='services fondo-separacion wow fadeIn'
		data-wow-duration='2s'>
		<h2 className='nunito title-section'>
			¡NUESTROS SERVICIOS! <hr />
		</h2>
		<div className='cards'>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>loyalty</span>
				</div>
				<h3 className='card__title'>
					Pasajes <hr />
				</h3>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>location_city</span>
				</div>
				<h3 className='card__title'>
					Alojamiento <hr />{' '}
				</h3>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>dining</span>
				</div>
				<h3 className='card__title'>
					Alimentación <hr />{' '}
				</h3>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>photo_camera</span>
				</div>
				<h3 className='card__title'>
					Fotografía <hr />{' '}
				</h3>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>train</span>
				</div>
				<h3 className='card__title'>
					Paseo en Tren <hr />
				</h3>
				<p className='card__text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos?
					Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt
					fugiat aliquid illo!
				</p>
			</Card>
			<Card className='card wow fadeInUp'>
				<div className='card__icon'>
					<span className='material-icons'>directions_boat</span>
				</div>
				<h3 className='card__title'>
					Paseo en bote <hr />{' '}
				</h3>
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

export default Service;
