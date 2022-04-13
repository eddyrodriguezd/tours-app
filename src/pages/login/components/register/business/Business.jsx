import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Alert, message } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import validate from '../../../../../helpers/validate';
/* eslint-disable jsx-a11y/label-has-associated-control */
import ModalMessage from '../../modalMessage/ModalMessage';
import {
	clearErrors,
	registerBusiness,
} from '../../../../../store/actions';
import Loading from '../../loading/Loading';

const Business = () => {
	const [form, setForm] = useState({ email: '', password: '', ruc: '' });
	const { error, loading, isAuthenticated, user } = useSelector(
		(state) => state
	);
	const dispatch = useDispatch();
	const [bolAux, setBolAux] = useState(false);
	const [alert, setAlert] = useState(false);
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleOnblur = (e) => {
		handleChange(e);
		setErrors(validate(form));
	};
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			setErrors(validate(form));
			const { ruc } = form;

			const { data } = await axios.post(
				process.env.REACT_APP_BACKEND_ENDPOINT.concat('users/register'),
				{
					ruc,
				}
			);

			const { status } = await data.data;

			if (status === 'ACTIVO' && Object.keys(errors).length === 0) {
				dispatch(
					registerBusiness({ ...form, tipo: 'business', ...data.data })
				);
				setBolAux(true);
			} else {
				setAlert(true);
				setTimeout(() => {
					setAlert(false);
				}, 3000);
			}
		} catch (err) {
			message.error(err.response.data.message, 3);
		}
	};

	useEffect(() => {
		if (error && bolAux) {
			message.error(error, 3);
			dispatch(clearErrors());
			setBolAux(false);
		}

		if (isAuthenticated && user.verify === true) {
			navigate('/dashboard');
		}
	}, [error, isAuthenticated, navigate]);

	return (
		<div className='content__login'>
			<div className='formLogin'>
				{loading ? (
					<Loading />
				) : (
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
							{errors.email && (
								<Alert
									message='Error'
									description={errors.email}
									type='error'
									showIcon
								/>
							)}
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								id='email'
								name='email'
								placeholder='Ingrese su correo o su nombre de usuario'
								onChange={handleChange}
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
								onBlur={handleOnblur}
							/>
						</div>
						<div className='cont'>
							{errors.ruc && (
								<Alert
									message='Error'
									description={errors.ruc}
									type='error'
									showIcon
								/>
							)}
							<label htmlFor='ruc'>Ruc</label>
							<input
								type='text'
								id='ruc'
								placeholder='Ingrese el ruc'
								name='ruc'
								// eslint-disable-next-line no-template-curly-in-string
								pattern='^[0-9]+$'
								onChange={handleChange}
								onBlur={handleOnblur}
								// eslint-disable-next-line react/no-unknown-property
								maxlength='11'
							/>
						</div>
						<div className='cont'>
							{errors.password && (
								<Alert
									message='Error'
									description={errors.password}
									type='error'
									showIcon
								/>
							)}
							<label htmlFor='password'>Contraseña</label>
							<input
								type='password'
								id='password'
								name='password'
								placeholder='Ingrese la contraseña'
								onChange={handleChange}
								pattern='^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$'
								onBlur={handleOnblur}
							/>
						</div>

						<button type='submit' className='btn-registrar'>
							Registrarte
						</button>
					</form>
				)}
			</div>
			<ModalMessage
				bolAux={bolAux}
				email={form.email}
				setBolAux={setBolAux}
			/>
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
