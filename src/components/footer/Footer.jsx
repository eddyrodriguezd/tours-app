import React from 'react';
import {
	FacebookFilled,
	TwitterSquareFilled,
	InstagramFilled,
	LinkedinFilled,
} from '@ant-design/icons';
import './Footer.css';

const Footer = () => (
	<footer className='footer fondo-separacion'>
		<strong>Mercurio</strong>
		<div>
			<a href='!#' target='_blank' rel='noopener noreferrer'>
				<FacebookFilled />
			</a>
			<a href='!#' target='_blank' rel='noopener noreferrer'>
				<TwitterSquareFilled />
			</a>
			<a href='!#' target='_blank' rel='noopener noreferrer'>
				<InstagramFilled />
			</a>
			<a href='!#' target='_blank' rel='noopener noreferrer'>
				<LinkedinFilled />
			</a>
		</div>
	</footer>
);

export default Footer;
