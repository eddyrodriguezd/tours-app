import { Card } from 'antd';
import React from 'react';
import './Packages.css';

const Packages = () => (
	<div className='package fondo-separacion'>
		<h2 className='nunito title-section'>
			¡NUESTROS PAQUETES! <hr />
		</h2>

		<div className='cards'>
			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/aventura.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Aventura
				</a>
			</Card>
			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/gastronomia.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Gastronomia
				</a>
			</Card>
			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/culture.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Cultura
				</a>
			</Card>

			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/excursion.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Excursión
				</a>
			</Card>
			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/naturaleza.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Naturaleza
				</a>
			</Card>
			<Card className='card wow fadeInUp card--sp'>
				<img
					src='assets/img/playa.jpg'
					alt='aventura'
					className='package-card__img'
				/>
				<a
					className='package-card__a'
					href='!#'
					target='_blank'
					rel='noopener noreferrer'>
					Playas
				</a>
			</Card>
		</div>
	</div>
);
export default Packages;
