import '../../Login.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Logout = () => (
	<div className='content__login'>
		<div className='formLogin'>
			<form action='' method='post'>
				<img src='assets/img/logo/logo.png' alt='' />
				<legend className='text'>Registar nueva cuenta</legend>

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
		<div className='imgBackground' />
	</div>
);

export default Logout;
