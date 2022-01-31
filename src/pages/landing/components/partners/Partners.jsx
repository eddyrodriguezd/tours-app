import React from 'react';
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
					<img src='assets/img/empresas/civa.jpg' alt='' />
					<img src='assets/img/empresas/colombia_lujo.jpg' alt='' />
					<img src='assets/img/empresas/machu_picchu.jpg' alt='' />
					<img src='assets/img/empresas/mota_turismo.jpg' alt='' />
					<img src='assets/img/empresas/mundi_travel.jpg' alt='' />
					<img src='assets/img/empresas/tatito.jpg' alt='' />
				</div>
			</div>
		</div>
	</div>
);

export default Partners;
