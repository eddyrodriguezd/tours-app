import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Alert, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../../../../store/actions';
import Loading from '../../loading/Loading';
/* eslint-disable jsx-a11y/label-has-associated-control */
import validate from '../../../../../helpers/validate';
import ModalMessage from '../../modalMessage/ModalMessage';

const Users = () => {
	const [form, setForm] = useState({ email: '', password: '' });
	const { error, loading, isAuthenticated, user } = useSelector(
		(state) => state
	);
	const [errors, setErrors] = useState({});
	const [alert, setAlert] = useState(false);
	const [bolAux, setBolAux] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleOnblur = (e) => {
		handleChange(e);
		setErrors(validate(form));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate(form));
		if (
			Object.keys(errors)[0] === 'ruc' &&
			Object.keys(errors).length === 1
		) {
			dispatch(register(form));
			setBolAux(true);
		} else {
			setAlert(true);
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
		// se.target.reset();
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
								description='Ingrese todos los campos'
								type='error'
								showIcon
								closable
							/>
						)}
						<legend className='legend_text'>Registrate</legend>

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
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
								placeholder='Ingrese su correo o su nombre de usuario'
								onChange={handleChange}
								onBlur={handleOnblur}
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
								pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$'
								onChange={handleChange}
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

export default Users;
