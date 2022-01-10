import './sesion.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/LogoImage/logo.png';
/* eslint-disable jsx-a11y/label-has-associated-control */

const Login = () => (
	<div className='content__login'>
		<div className='formLogin'>
			<form action='' method='post'>
				<img src={Logo} alt='' />
				<div className='switch-button'>
					<input
						type='checkbox'
						id='check'
						className='switch-button__checkbox'
					/>
					<label htmlFor='check' className='switch-button__label' />
					<h4 className='text'>Iniciar Sesion como Empresa</h4>
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
					<a href='./' className='btn-ingresar'>
						Ingresar
					</a>
					<Link to='/registrate' className='btn-registrar'>
						Registrarte
					</Link>
				</div>
			</form>
		</div>
		<div className='imgBackground' />
	</div>
);

export default Login;
