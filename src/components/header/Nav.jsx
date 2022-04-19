/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions';

const Nav = () => {
	const [offset, setOffset] = useState(0);
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector((state) => state);
	useEffect(() => {
		const onScroll = () => setOffset(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	const handleClick = () => {
		dispatch(logout());
	};
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
					<Menu.Item key='pakage'>
						<NavLink to='/paquetes'>Paquetes</NavLink>
					</Menu.Item>
				</Menu>
				{isAuthenticated ? (
					<div className='user-menu'>
						<NavLink to='/dashboard'>
							<span className='user-menu_name'>
								{user.name ? user.name : user.email.split('.')[0]}
							</span>
							<Avatar src={user.avatar.url} />
						</NavLink>
						<span className='user-menu_session' onClick={handleClick}>
							Cerrar sesión
						</span>
					</div>
				) : (
					<Menu
						mode='horizontal'
						className={`${offset === 0 && 'menu'}`}
						style={{ width: '200px' }}>
						<Menu.Item key='mailes'>
							<NavLink to='/login'>Ingresar</NavLink>
						</Menu.Item>
						<Menu.Item key='alipays'>
							<NavLink to='/registro'>Registrate</NavLink>
						</Menu.Item>
					</Menu>
				)}
			</div>
		</nav>
	);
};

export default Nav;
