import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Alert } from 'antd';
/* eslint-disable jsx-a11y/label-has-associated-control */

const Business = () => {
	const [form, setForm] = useState({});

	const [alert, setAlert] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!(Object.keys(form).length === 3)) {
			setAlert(true);
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
		// se.target.reset();
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
					<legend className='legend_text'>Registra tu Empresa</legend>

					<div className='cont'>
						<label htmlFor='email'>Email</label>
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
						<label htmlFor='ruc'>Ruc</label>
						<input
							type='text'
							id='ruc'
							placeholder='Ingrese el ruc'
							name='ruc'
							pattern='[0-9]{11}'
							onChange={handleChange}
							onInvalid={(e) =>
								e.target.setCustomValidity('Ingrese un ruc váliddo')
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

					<button type='submit' className='btn-registrar'>
						Registrarte
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
	);
};

export default Business;
