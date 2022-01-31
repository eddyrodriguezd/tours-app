import React from 'react';
import './Video.css';

const Video = () => (
	<>
		<video autoPlay muted loop className='video'>
			<source src='assets/Mountains.mp4' />
		</video>
		<div className='container-video nunito'>
			<div className='description__video'>
				<h1 className='video__title fade-1'>
					¡Vivamos una{' '}
					<span className='video__orange'> gran aventura juntos!</span>
				</h1>
				<h3 className='video__subtitle fade-2'>Será divertido</h3>
				<a href='!#' className='video__button fade-3'>
					Vamos
				</a>
			</div>
		</div>
	</>
);

export default Video;
