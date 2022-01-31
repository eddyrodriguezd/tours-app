import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './Nav.css';

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
					<Menu.Item key='mail'>
						<a href='!#'>Inicio</a>
					</Menu.Item>
					<Menu.Item key='alipay'>
						<a href='!#'>Destino</a>
					</Menu.Item>
					<Menu.Item key='alipays'>
						<a href='!#'>Itinerario</a>
					</Menu.Item>
				</Menu>

				<Menu
					mode='horizontal'
					className={`${offset === 0 && 'menu'}`}
					style={{ width: '200px' }}>
					<Menu.Item key='mailes'>
						<a href='!#'>Ingresar</a>
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
