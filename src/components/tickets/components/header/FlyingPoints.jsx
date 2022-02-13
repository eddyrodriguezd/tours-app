import { Radio, Space } from 'antd';

const Header = ({ onChangeFn }) => (
	<section className='flying-header'>
		<div className='flying-header-top'>
			<div className='flying-check'>
				<Radio.Group
					onChange={(e) => onChangeFn('transport', e.target.value)}>
					<Space direction='vertical'>
						<Radio value='plane'>Aéreos</Radio>
						<Radio value='bus'>Terrestres</Radio>
					</Space>
				</Radio.Group>
			</div>
			<input type='text' name='' id='' placeholder='Ciudad de origen' />
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

export default Header;
