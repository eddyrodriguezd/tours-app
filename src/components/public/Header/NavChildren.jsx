import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/LogoImage/logo.png';
import './NavChildren.css';

const NavChildren = () => (
	<div className='content'>
		<nav className=' nav'>
			<div className='logo'>
				<a href='./index.html'>
					<img src={Logo} alt='' />
				</a>
			</div>
			<button type='button' className='menu-btn'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='27'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
				</svg>
				<svg
					className='none'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
				</svg>
			</button>
			<div className='enlaces-header'>
				<NavLink to='./'>Inicio</NavLink>
				<NavLink to='./destinos'>Destino</NavLink>
				<NavLink to='./puntorecojo'>Punto</NavLink>
				<NavLink to='./itinerario'>Itinerario</NavLink>
				<NavLink to='./login.html'>Regístrate</NavLink>
			</div>
		</nav>
	</div>
);

export default NavChildren;
