const FlyingPointsCard = ({
	lugarOrigen,
	duracion,
	lugarDestino,
	parada,
	clasificacion,
	precio,
	horaInicio,
	horaFin,
}) => (
	<article className='flying-card'>
		<div className='flying-card-body color-principal'>
			<div>
				<span className='title-size-26'>
					{horaInicio} <span className='color-gray'>{lugarOrigen}</span>{' '}
				</span>
			</div>
			<div className='color-gray'>
				<div>
					<span className='title-size-14'>Duración</span>
				</div>
				<div>
					<span className='title-size-16'>{duracion}</span>
				</div>
			</div>
			<div>
				<span className='title-size-26'>{horaFin} </span>
				<sup className='title-size-14'>+1</sup>
				<span className='title-size-26 color-gray'>{lugarDestino}</span>
			</div>
		</div>
		<hr />
		<div className='flying-card-footer '>
			<span className='title-size-16 color-secondary'>{parada}*</span>
			<div>
				<div>
					<span className='title-size-14 color-gray'>
						{clasificacion} desde
					</span>
				</div>
				<div>
					<span className='title-size-20'>
						USD
						{precio}
					</span>
				</div>
			</div>
			<a href='/' className='button__link'>
				Seleccionar
			</a>
		</div>
	</article>
);

export default FlyingPointsCard;
