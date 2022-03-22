/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Alert } from 'antd';
import { Link } from 'react-router-dom';
import LoginEndpoints from '../../api/login/loginEndpoints';
import './Login.css';

const Login = () => {
	const [form, setForm] = useState({});
	const [alert, setAlert] = useState(false);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!(Object.keys(form).length === 2)) {
			setAlert(true);
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
		// se.target.reset();
		LoginEndpoints.login(credentials);
	};

	return (
		<div className='content__login'>
			<div className='formLogin'>
				<form action='' method='post' onSubmit={handleSubmit}>
					<Link to='/'>
						<img src='assets/img/logo/logo.png' alt='Logo' />
					</Link>
					{alert && (
						<Alert
							message='Error'
							description='porfavor ingrese todos los campos'
							type='error'
							showIcon
							closable
						/>
					)}
					<div className='cont'>
						<label htmlFor='email'>Correo electrónico </label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Ingrese su correo o su nombre de usuario'
							onChange={handleChange}
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
							onInvalid={(e) =>
								e.target.setCustomValidity(
									'Ingrese un correo electrónico váliddo'
								)
							}
						/>
					</div>
					<div className='cont'>
						<label htmlFor='password'>Contraseña</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Ingrese la contraseña'
							onChange={handleChange}
							pattern='^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$'
							onInvalid={(e) =>
								e.target.setCustomValidity(
									'La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial'
								)
							}
						/>
					</div>
					<div className='botton'>
						<div className='botton__checkbox'>
							<input type='checkbox' id='check' className='checkbox' />
							<h5 className='botton_txt'>Remenber me</h5>
						</div>

						<Link to='/' className='botton_link'>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<button type='submit' className='btn-registrar'>
						Ingresar
					</button>
					<Link to='/register' className='btn-register'>
						Registrar como Usuario
					</Link>
				</form>
			</div>
			<div className='imgBackground'>
				<img
					src='https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
					alt='passport'
				/>
			</div>
		</div>
	);
};
export default Login;
