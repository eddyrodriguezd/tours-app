import Slider from '../public/Slider/SliderComponent';
import ItineraryPanel from '../public/Itinerary/ItineraryPanel';
import '../public/Itinerary/Itinerary.css';

const Itinerary = () => (
	<>
		<Slider />
		<div className='container-itinerary'>
			<main className='container-body'>
				<h2>Itinerario del Viaje</h2>
				<ItineraryPanel
					titulo='Día 1'
					description='Comencemos con tu viaje inolvidable.'>
					<ul className='aling-left'>
						<li> Recojo en Terminal Terrestre </li>
						<li>
							Traslado al hotel para ubicarnos en nuestras respectivas
							habitaciones.
						</li>
						<li>Almuerzo libre (por cuenta del viajero).</li>
						<li>Tarde libre.</li>
						<li>Cena respectiva (por cuenta del viajero).</li>
						<li>Noche Libre.</li>
					</ul>
				</ItineraryPanel>
				<ItineraryPanel
					titulo='Día 2'
					description='Seguimos con la aventura...'>
					<ul className='aling-left'>
						<li> Desayuno en hotel (incluido). </li>
						<li>9.00 am - Nos dirigimos a los Manglares de Tumbes.</li>
						<li>
							Zarparemos desde el Puerto 25 para iniciar nuestro recorrido
							por:
						</li>
						<li>Isla del Amor</li>
						<li>Isla de los pajaros</li>
						<li>Isla hueso de ballena</li>
						<li>Visita al ZOO criadero de cocodrilos</li>
						<li>Puerto Pizarro</li>
						<li>Playa Punta Sal y playa Zorritos.</li>
						<li>City Tour Tumbes.</li>
						<li>2:00 pm - Almuerzo en tumbes (por cuenta del viajero).</li>
						<li>4:00 pm - Retorno al hotel.</li>
					</ul>
				</ItineraryPanel>
				<ItineraryPanel titulo='Día 3' description='Nadando con tortugas'>
					<ul className='aling-left'>
						<li>
							El nado con tortugas es en Mancora, en el Muelle de Mancora.
						</li>
						<li>
							Se le recoge al cliente a las 09.30Am. se dirigen al muelle de
							Mancora. se suben a un bote que les lleva hasta un muelle
							flotante, proceden a ponerse chaleco salvavidas e ingresan a
							nadar con las tortugas por un espacio de 45 minutos, el guia
							les toma fotos y videos acuaticos. despues de ello, retornan
							al muelle principal y tienen tiempo libre para hacer deportes
							acuaticos opcionales por su cuenta, tales como ( paseo en
							banano, paseo en cuatrimoto, paseo a caballo, entre otros)
						</li>
						<li>
							Luego tienen tiempo libre por su cuenta para disfrutar de la
							playa y almorzar por su cuenta en Mancora.
						</li>
					</ul>
				</ItineraryPanel>
				<ItineraryPanel titulo='Día 4' description='Disfruta de la piscina'>
					<ul className='aling-left'>
						<li>Desayuno.</li>
						<li>Mañana libre para compras.</li>
						<li>Almuerzo libre (por cuenta del viajero).</li>
						<li>Tarde Playera Libre.</li>
						<li>Check Out del hotel.</li>
						<li>Fin del servicio.</li>
					</ul>
				</ItineraryPanel>
			</main>
			{/* <NavLink to="/">Home</NavLink> */}
		</div>
	</>
);

export default Itinerary;
