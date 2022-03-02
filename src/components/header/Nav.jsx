import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className={`nav ${offset > 0 && 'nav-scroll'}`}>
			<span className='text-logo'>Mercurio</span>
			<div className='menus'>
				<Menu
					mode='horizontal'
					className={`${offset === 0 && 'menu'}`}
					style={{ flex: '1 1' }}>
					<Menu.Item key='main'>
						<NavLink to='/'>Inicio</NavLink>
					</Menu.Item>
					<Menu.Item key='destination'>
						<NavLink to='/destinos'>Destinos</NavLink>
					</Menu.Item>
					<Menu.Item key='pakage'>
						<NavLink to='/paquetes'>Paquetes</NavLink>
					</Menu.Item>
				</Menu>

				<Menu
					mode='horizontal'
					className={`${offset === 0 && 'menu'}`}
					style={{ width: '200px' }}>
					<Menu.Item key='mailes'>
						<NavLink target='_blank' rel='noopener noreferrer' to='/login'>
							Ingresar
						</NavLink>
					</Menu.Item>
					<Menu.Item key='alipays'>
						<a href='!#'>Registrate</a>
					</Menu.Item>
				</Menu>
			</div>
		</nav>
	);
};

export default Nav;
