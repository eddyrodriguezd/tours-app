import { Link } from 'react-router-dom';
import '../../Login.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Logout = () => (
	<div className='content__login'>
		<div className='formLogin'>
			<form action='' method='post'>
				<Link to='/'>
					<img src='assets/img/logo/logo.png' alt='Logo' />
				</Link>

				<legend className='legend_text'>Registar nueva cuenta</legend>

				<div className='cont'>
					<label htmlFor='user'>Usuario</label>
					<input
						type='text'
						id='user'
						placeholder='Ingrese el nombre de usuario'
					/>
				</div>
				<div className='cont'>
					<label htmlFor='telphone'>Telefono</label>
					<input
						type='tel'
						id='telphone'
						placeholder='Ingrese su Telefono'
					/>
				</div>
				<div className='cont'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' placeholder='Ingrese su Email' />
				</div>
				<div className='cont'>
					<label htmlFor='password'>Contraseña</label>
					<input
						type='password'
						id='password'
						placeholder='Ingrese su contraseña'
					/>
				</div>

				<button type='button' className='btn-registrar'>
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

export default Logout;
