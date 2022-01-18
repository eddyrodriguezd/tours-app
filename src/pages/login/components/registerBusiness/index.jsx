import { Link } from 'react-router-dom';
import '../../Login.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const LogoutBusines = () => (
	<div className='content__login'>
		<div className='formLogin'>
			<form action='' method='post'>
				<Link to='/'>
					<img src='assets/img/logo/logo.png' alt='Logo' />
				</Link>

				<legend className='text'> Iniciar Sesion como Empresa</legend>
				<div className='cont'>
					<label htmlFor='razon'>Razón Social</label>
					<input
						type='text'
						id='razon'
						placeholder='Ingrese la Razon Social'
					/>
				</div>
				<div className='cont'>
					<label htmlFor='ruc'>Ruc</label>
					<input type='text' id='ruc' placeholder='Ingrese la Contraseña' />
				</div>
				<div className='cont'>
					<label htmlFor='description'>Descripción</label>
					<textarea
						type='text'
						id='description'
						cols='50'
						rows='5'
						placeholder='Escribe la descripción'
					/>
				</div>
				<div className='cont'>
					<label htmlFor='telphone'>Teléfono</label>
					<input
						type='tel'
						id='telphone'
						placeholder='Ingrese número de Telefono'
					/>
				</div>
				<button type='button' className='btn-registrar'>
					Registrarte
				</button>
			</form>
		</div>
		<div className='imgBackground' />
	</div>
);

export default LogoutBusines;
