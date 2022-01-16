import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Link } from 'react-router-dom';
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper';
import { sliderImages } from '../../../../mock/sliderImages';
import 'swiper/swiper-bundle.css';
import './Landscape.css';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

const Landscape = () => {
	const styloswiper = {
		'--swiper-navigation-color': '#fff',
		'--swiper-pagination-color': '#fff',
	};

	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<Swiper
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				style={styloswiper}
				loop
				spaceBetween={10}
				navigation
				thumbs={{ swiper: thumbsSwiper }}
				className='mySwiper2'>
				{sliderImages.map((slide, index) => (
					<SwiperSlide
						// eslint-disable-next-line react/no-array-index-key
						key={index}>
						<img src={slide} alt='' />
						<div className='contenido'>
							<p className='contenido__frase'>
								“Si no escalas la montaña, jamás podrás disfrutar del
								paisaje”.
								<br />
								<Link to='/Nosotros' className='contenido__btn'>
									Quiénes Somos
								</Link>
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop
				spaceBetween={10}
				slidesPerView={4}
				freeMode
				watchSlidesProgress
				className='mySwiper'>
				{sliderImages.map((slide, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<SwiperSlide key={index}>
						{' '}
						<img src={slide} alt='' className='img__slider' />{' '}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Landscape;
