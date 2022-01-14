import FlyingPointsCard from '../public/FlyingPoints/FlyingPointsCard';
import FlyingPointsHeader from '../public/FlyingPoints/FlyingPointsHeader';
import { flyingPoints } from '../../mock/sliderImages';
import '../public/FlyingPoints/FlyingPointsCard.css';

const Flyingpoints = () => (
	<div className='container-flyingpoints'>
		<main className='container-body'>
			<FlyingPointsHeader />
			<section className='flying-cards'>
				{flyingPoints.map((e) => (
					<FlyingPointsCard
						horaInicio={e.horaInicio}
						lugarOrigen={e.lugarOrigen}
						duracion={e.duracion}
						horaFin={e.horaFin}
						lugarDestino={e.lugarDestino}
						parada={e.parada}
						clasificacion={e.clasificacion}
						precio={e.precio}
					/>
				))}
			</section>
		</main>
	</div>
);

export default Flyingpoints;
