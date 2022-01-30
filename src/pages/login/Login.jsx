import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './Login.css';
/* eslint-disable jsx-a11y/label-has-associated-control */

const Login = () => {
	const [modal, setModal] = useState(false);
	const refModal = useRef();
	const handleClick = () => setModal(!modal);
	useEffect(
		() =>
			modal
				? refModal.current.classList.add('active1')
				: refModal.current.classList.remove('active1'),
		[modal]
	);
	return (
		<>
			<div className='content__login'>
				<div className='formLogin'>
					<form action='' method='post'>
						<Link to='/'>
							<img src='assets/img/logo/logo.png' alt='Logo' />
						</Link>

						<div className='switch__content'>
							<input type='checkbox' id='check' className='checkbox' />

							<p className='text'>Iniciar Sesion como Empresa</p>
						</div>
						<div className='cont'>
							<label htmlFor='user'>Email or Username</label>
							<input
								type='text'
								id='user'
								placeholder='Ingrese su Email o su nombre de Usuario'
							/>
						</div>
						<div className='cont'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								placeholder='Ingrese la Contraseña'
							/>
						</div>
						<div className='botton'>
							<div className='botton__checkbox'>
								<input type='checkbox' id='check' className='checkbox' />
								<h5 className='botton_txt'>Remenber me</h5>
							</div>

							<Link to='/' className='botton_link'>
								Forgot your password?
							</Link>
						</div>
						<Link to='/' className='btn-registrar'>
							Sign In
						</Link>
						<button
							type='button'
							className='btn-register'
							onClick={handleClick}>
							Create an account
						</button>
					</form>
				</div>
				<div className='imgBackground'>
					<img
						src='https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
						alt='passport'
					/>
				</div>
			</div>
			<div className='modal' ref={refModal}>
				<div className='modal__content'>
					<button
						type='button'
						className='modal__close'
						onClick={handleClick}>
						Cerrar
					</button>
					<div className='modal__btn'>
						<Link to='/registerBusines' className='modal__link'>
							Registrar como Empresa
						</Link>
						<Link to='/register' className='modal__link'>
							Registrar como Usuario
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
