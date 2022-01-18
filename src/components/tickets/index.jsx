import FlyingPointsCard from './components/card/FlyingPoints';
import FlyingPointsHeader from './components/header/FlyingPoints';
import { flyingPoints } from '../../mock/sliderImages';
import './components/card/FlyingPoints.css';

const Flyingpoints = () => (
	<div className='container-flyingpoints'>
		<div className='container-body'>
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
		</div>
	</div>
);

export default Flyingpoints;
