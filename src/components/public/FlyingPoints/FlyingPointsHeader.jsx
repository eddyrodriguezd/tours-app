const Header = function () {
	return (
		<section className='flying-header'>
			<div className='flying-header-top'>
				<div className='flying-check'>
					<p>
						<input type='checkbox' id='test' />
						<label htmlFor='test'>Aéreos</label>
					</p>
					<p>
						<input type='checkbox' id='test2' />
						<label htmlFor='test2'>Terrestres</label>
					</p>
				</div>
				<input type='text' name='' id='' placeholder='Fecha de Inicio' />
				<a href='/' className='button__link'>
					Buscar
				</a>
			</div>
			<div className='flying-header-option'>
				<select name='categorias' className='title-size-16'>
					<option>Precio</option>
					<option>Más Vendido</option>
				</select>
			</div>
		</section>
	);
};

export default Header;
