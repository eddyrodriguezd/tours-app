import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FooterComponent.css';
// import {  } from '@fortawesome/free-solid-svg-icons'
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../../../assets/LogoImage/logo.png';

const FooterComponent = () => (
	<div className='footer'>
		<div className='fotterContainer'>
			<div className='partFooter'>
				<img src={Logo} alt='' />
			</div>
			<div className='partFooter'>
				<h4>Contáctanos</h4>
				<a className='color-white' href='tel:933333333'>
					(+051) 933 333 333
				</a>
				<a className='color-white' href='tel:92222222'>
					(+051) 922 222 222
				</a>
				<a href='/'>tours@tours.com</a>
			</div>
			<div className='partFooter'>
				<h4>Encuéntranos</h4>
				<strong>
					<span>Dirección</span>
				</strong>
				<a href='/'>Los Ángeles 713, Piura, Perú</a>
			</div>
			<div className='partFooter'>
				<h4>Redes Sociales</h4>
				<div className='social-media'>
					<FontAwesomeIcon icon={faFacebook} className='i' />
					<FontAwesomeIcon icon={faTwitter} className='i' />
					<FontAwesomeIcon icon={faInstagram} className='i' />
					<FontAwesomeIcon icon={faYoutube} className='i' />
				</div>
			</div>
		</div>
	</div>
);

export default FooterComponent;
