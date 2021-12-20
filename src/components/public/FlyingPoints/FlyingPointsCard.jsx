const FlyingPointsCard = function (props) {
	const { horaInicio, horaFin } = this.props;

	return (
		<article className='flying-card'>
			<div className='flying-card-body color-principal'>
				<div>
					<span className='title-size-26'>
						{horaInicio}{' '}
						<span className='color-gray'>{props.lugarOrigen}</span>{' '}
					</span>
				</div>
				<div className='color-gray'>
					<div>
						<span className='title-size-14'>Duración</span>
					</div>
					<div>
						<span className='title-size-16'>{props.duracion}</span>
					</div>
				</div>
				<div>
					<span className='title-size-26'>{horaFin} </span>
					<sup className='title-size-14'>+1</sup>
					<span className='title-size-26 color-gray'>
						{props.lugarDestino}
					</span>
				</div>
			</div>
			<hr />
			<div className='flying-card-footer '>
				<span className='title-size-16 color-secondary'>
					{props.parada}*
				</span>
				<div>
					<div>
						<span className='title-size-14 color-gray'>
							{props.clasificacion} desde
						</span>
					</div>
					<div>
						<span className='title-size-20'>
							USD
							{props.precio}
						</span>
					</div>
				</div>
				<a href='/' className='button__link'>
					Seleccionar
				</a>
			</div>
		</article>
	);
};

export default FlyingPointsCard;
