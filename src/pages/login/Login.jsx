/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/order */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Loading from './components/loading/Loading';
import { clearErrors, login } from '../../store/actions';
import { Alert, message } from 'antd';
import validate from '../../helpers/validate';
import './Login.css';

const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const [alert, setAlert] = useState(false);
	const [bolAux, setBolAux] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { error, loading, isAuthenticated } = useSelector((state) => state);

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
		if (Object.keys(errors).length === 0) {
			dispatch(login(form));
			setBolAux(true);
			message.success('Login Successful', 3, navigate('/dashboard'));
		} else {
			setAlert(true);
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
	};

	useEffect(() => {
		if (error && bolAux) {
			message.error(error, 3);
			dispatch(clearErrors());
			setBolAux(false);
		}

		if (isAuthenticated) {
			navigate('/dashboard');
		}
	}, [error, isAuthenticated, navigate]);

	return (
		<div className='content__login'>
			{loading ? (
				<Loading />
			) : (
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
							{errors.email && (
								<Alert
									message='Error'
									description={errors.email}
									type='error'
									showIcon
								/>
							)}
							<label htmlFor='email'>Correo electrónico </label>

							<input
								type='email'
								id='email'
								name='email'
								placeholder='Ingrese su correo o su nombre de usuario'
								onChange={handleChange}
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
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
								onChange={handleChange}
								pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$'
								onBlur={handleOnblur}
							/>
						</div>
						<div className='botton'>
							<Link to='/registro' className='btn-register'>
								Registrate
							</Link>
							<Link to='/' className='botton_link'>
								¿Olvidaste tu contraseña?
							</Link>
						</div>

						<button type='submit' className='btn-registrar'>
							Ingresar
						</button>
					</form>
				</div>
			)}
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
