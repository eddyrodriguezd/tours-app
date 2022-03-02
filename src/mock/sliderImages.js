const sliderImages = [
	'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
	'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
	'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
	'https://images.unsplash.com/photo-1572099606223-6e29045d7de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
	'https://images.unsplash.com/photo-1609956712666-5f82e5a33da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
];

const destionos = [
	{
		id: '1',
		ciudad: 'piura',
		tags: ['relax', 'playas'],
	},
	{
		id: '2',
		ciudad: 'sullana',
		tags: '2',
	},
];

const services = [
	{
		icon: 'loyalty',
		title: 'Pasajes',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
	{
		icon: 'location_city',
		title: 'Alojamiento',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
	{
		icon: 'dining',
		title: 'Alimentación',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
	{
		icon: 'photo_camera',
		title: 'Fotografía',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
	{
		icon: 'train',
		title: 'Paseo en Tren',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
	{
		icon: 'directions_boat',
		title: 'Paseo en bote',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, fugiat. Inventore aperiam obcaecati, est sed nisi quos? Fuga, est eaque! Quia fuga dicta ratione numquam soluta incidunt fugiat aliquid illo!',
	},
];

const paquete = [
	{
		id: '1',
		title: 'Mancora Inolvidable',
		destination: {
			country: 'Peru',
			state: 'Piura',
			city: 'Mancora',
		},
		n_dias: '4',
		n_noches: '3',
		id_destino: '1',
		img: 'mancora_inolvidable',
		itinerary: [
			{
				day: 'Día 1',
				description: 'Comencemos con tu viaje inolvidable.',
				items: [
					'Recojo en Terminal Terrestre',
					'Traslado al hotel para ubicarnos en nuestras respectivas habitaciones.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde libre.',
					'Cena respectiva (por cuenta del viajero).',
					'Noche Libre.',
				],
			},
			{
				day: 'Día 2',
				description: 'Seguimos con la aventura...',
				items: [
					' Desayuno en hotel (incluido). ',
					'9.00 am - Nos dirigimos a los Manglares de Tumbes.',
					'Zarparemos desde el Puerto 25 para iniciar nuestro recorrido por:',
					'Isla del Amor',
					'Isla de los pajaros',
					'Isla hueso de ballena',
					'Visita al ZOO criadero de cocodrilos',
					'Puerto Pizarro',
					'Playa Punta Sal y playa Zorritos.',
					'City Tour Tumbes.',
					'2:00 pm - Almuerzo en tumbes (por cuenta del viajero).',
					'4:00 pm - Retorno al hotel.',
				],
			},
			{
				day: 'Día 3',
				description: 'Nadando con tortugas',
				items: [
					'El nado con tortugas es en Mancora, en el Muelle de Mancora.',
					'Se le recoge al cliente a las 09.30Am. se dirigen al muelle de Mancora. se suben a un bote que les lleva hasta un muelle flotante, proceden a ponerse chaleco salvavidas e ingresan a nadar con las tortugas por un espacio de 45 minutos, el guia les toma fotos y videos acuaticos. despues de ello, retornan al muelle principal y tienen tiempo libre para hacer deportes acuaticos opcionales por su cuenta, tales como ( paseo en banano, paseo en cuatrimoto, paseo a caballo, entre otros)',
					'Luego tienen tiempo libre por su cuenta para disfrutar de la playa y almorzar por su cuenta en Mancora.',
				],
			},
			{
				day: 'Día 4',
				description: 'Disfruta de la piscina',
				items: [
					'Desayuno.',
					'Mañana libre para compras.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde Playera Libre.',
					'Check Out del hotel.',
					'Fin del servicio.',
				],
			},
		],
	},
	{
		id: '2',
		title: 'Cusco Milenario',
		destination: {
			country: 'Peru',
			state: 'Cusco',
			city: 'Cusco',
		},
		n_dias: '3',
		n_noches: '2',
		id_destino: '1',
		img: 'cusco_milenario',
		itinerary: [
			{
				day: 'Día 1',
				description: 'ARRIBO AL CUSCO / CITY TOUR Y RUINAS ALEDAÑAS',
				items: [
					'Recepción y traslado al hotel con una pequeña explicación de la ciudad y los Tours, tomando un mate de Coca.',
					'Acomodación en el Hotel.',
					'En la tarde City Tour y visita a las ruinas aledañas (incluye entradas). Visitaremos la Plaza de Armas, la Catedral y el Templo del Sol o Korikancha.',
					'Luego, fuera de la ciudad veremos 4 restos arqueológicos como son: Kenko, Tambomachay, Puca Pucara y la impresionante Fortaleza de Sacsayhuamán, construida estratégicamente en una colina con vista a Cusco, famoso por sus enormes piedras talladas, algunas de ellas de pie más de 9 m/30 pies de alto y un peso de más de 350 toneladas.',
					'Luego volvemos a nuestro hotel. (No Comidas).',
				],
			},
			{
				day: 'Día 2',
				description: 'MACHU PICCHU FULL DAY',
				items: [
					'A las 5:00 am aproximadamente, será trasladado hacia la estación de tren y viajara por 3 ½ horas hacia la Ciudadela famosa inca de Machu Picchu, también conocida como "La Ciudad Perdida de los Incas", descubierta por La ciencia en 1911 por el explorador norteamericano Hiram Bingham.',
					'Visitaremos las ruinas alrededor de 3 horas, tiempo durante el cual nuestra guía nos mostrará el Intihuatana, (o "picota De Sol), el Templo del Sol,la Tumba Real, la Casa de los Sacerdotes, los Baños del Inca y el Templo de las Tres Ventanas: todos estos lugares nos permiten vislumbrar atrás en el pasado.Mañana libre para compras.',
					'Tiempo para almorzar. (Almuerzo opcional).',
					'A media tarde tomaremos el tren que nos llevará de regreso al Cusco. Una vez allí, traslado al hotel.(D).',
				],
			},
			{
				day: 'Día 3',
				description: 'SALIDA DEL CUSCO',
				items: [
					'Desayuno en el hotel y a hora coordinada traslado de salida al aeropuerto o terminal de bus. (D).',
				],
			},
		],
	},
	{
		id: '3',
		title: 'Mancora Inolvidable',
		destination: {
			country: 'Peru',
			state: 'Piura',
			city: 'Mancora',
		},
		n_dias: '4',
		n_noches: '3',
		id_destino: '1',
		img: 'mancora_inolvidable',
		itinerary: [
			{
				day: 'Día 1',
				description: 'Comencemos con tu viaje inolvidable.',
				items: [
					'Recojo en Terminal Terrestre',
					'Traslado al hotel para ubicarnos en nuestras respectivas habitaciones.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde libre.',
					'Cena respectiva (por cuenta del viajero).',
					'Noche Libre.',
				],
			},
			{
				day: 'Día 2',
				description: 'Seguimos con la aventura...',
				items: [
					' Desayuno en hotel (incluido). ',
					'9.00 am - Nos dirigimos a los Manglares de Tumbes.',
					'Zarparemos desde el Puerto 25 para iniciar nuestro recorrido por:',
					'Isla del Amor',
					'Isla de los pajaros',
					'Isla hueso de ballena',
					'Visita al ZOO criadero de cocodrilos',
					'Puerto Pizarro',
					'Playa Punta Sal y playa Zorritos.',
					'City Tour Tumbes.',
					'2:00 pm - Almuerzo en tumbes (por cuenta del viajero).',
					'4:00 pm - Retorno al hotel.',
				],
			},
			{
				day: 'Día 3',
				description: 'Nadando con tortugas',
				items: [
					'El nado con tortugas es en Mancora, en el Muelle de Mancora.',
					'Se le recoge al cliente a las 09.30Am. se dirigen al muelle de Mancora. se suben a un bote que les lleva hasta un muelle flotante, proceden a ponerse chaleco salvavidas e ingresan a nadar con las tortugas por un espacio de 45 minutos, el guia les toma fotos y videos acuaticos. despues de ello, retornan al muelle principal y tienen tiempo libre para hacer deportes acuaticos opcionales por su cuenta, tales como ( paseo en banano, paseo en cuatrimoto, paseo a caballo, entre otros)',
					'Luego tienen tiempo libre por su cuenta para disfrutar de la playa y almorzar por su cuenta en Mancora.',
				],
			},
			{
				day: 'Día 4',
				description: 'Disfruta de la piscina',
				items: [
					'Desayuno.',
					'Mañana libre para compras.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde Playera Libre.',
					'Check Out del hotel.',
					'Fin del servicio.',
				],
			},
		],
	},
	{
		id: '4',
		title: 'Mancora Inolvidable',
		destination: {
			country: 'Peru',
			state: 'Piura',
			city: 'Mancora',
		},
		n_dias: '4',
		n_noches: '3',
		id_destino: '1',
		img: 'mancora_inolvidable',
		itinerary: [
			{
				day: 'Día 1',
				description: 'Comencemos con tu viaje inolvidable.',
				items: [
					'Recojo en Terminal Terrestre',
					'Traslado al hotel para ubicarnos en nuestras respectivas habitaciones.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde libre.',
					'Cena respectiva (por cuenta del viajero).',
					'Noche Libre.',
				],
			},
			{
				day: 'Día 2',
				description: 'Seguimos con la aventura...',
				items: [
					' Desayuno en hotel (incluido). ',
					'9.00 am - Nos dirigimos a los Manglares de Tumbes.',
					'Zarparemos desde el Puerto 25 para iniciar nuestro recorrido por:',
					'Isla del Amor',
					'Isla de los pajaros',
					'Isla hueso de ballena',
					'Visita al ZOO criadero de cocodrilos',
					'Puerto Pizarro',
					'Playa Punta Sal y playa Zorritos.',
					'City Tour Tumbes.',
					'2:00 pm - Almuerzo en tumbes (por cuenta del viajero).',
					'4:00 pm - Retorno al hotel.',
				],
			},
			{
				day: 'Día 3',
				description: 'Nadando con tortugas',
				items: [
					'El nado con tortugas es en Mancora, en el Muelle de Mancora.',
					'Se le recoge al cliente a las 09.30Am. se dirigen al muelle de Mancora. se suben a un bote que les lleva hasta un muelle flotante, proceden a ponerse chaleco salvavidas e ingresan a nadar con las tortugas por un espacio de 45 minutos, el guia les toma fotos y videos acuaticos. despues de ello, retornan al muelle principal y tienen tiempo libre para hacer deportes acuaticos opcionales por su cuenta, tales como ( paseo en banano, paseo en cuatrimoto, paseo a caballo, entre otros)',
					'Luego tienen tiempo libre por su cuenta para disfrutar de la playa y almorzar por su cuenta en Mancora.',
				],
			},
			{
				day: 'Día 4',
				description: 'Disfruta de la piscina',
				items: [
					'Desayuno.',
					'Mañana libre para compras.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde Playera Libre.',
					'Check Out del hotel.',
					'Fin del servicio.',
				],
			},
		],
	},
	{
		id: '5',
		title: 'Mancora Inolvidable',
		destination: {
			country: 'Peru',
			state: 'Piura',
			city: 'Mancora',
		},
		n_dias: '4',
		n_noches: '3',
		id_destino: '1',
		img: 'mancora_inolvidable',
		itinerary: [
			{
				day: 'Día 1',
				description: 'Comencemos con tu viaje inolvidable.',
				items: [
					'Recojo en Terminal Terrestre',
					'Traslado al hotel para ubicarnos en nuestras respectivas habitaciones.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde libre.',
					'Cena respectiva (por cuenta del viajero).',
					'Noche Libre.',
				],
			},
			{
				day: 'Día 2',
				description: 'Seguimos con la aventura...',
				items: [
					' Desayuno en hotel (incluido). ',
					'9.00 am - Nos dirigimos a los Manglares de Tumbes.',
					'Zarparemos desde el Puerto 25 para iniciar nuestro recorrido por:',
					'Isla del Amor',
					'Isla de los pajaros',
					'Isla hueso de ballena',
					'Visita al ZOO criadero de cocodrilos',
					'Puerto Pizarro',
					'Playa Punta Sal y playa Zorritos.',
					'City Tour Tumbes.',
					'2:00 pm - Almuerzo en tumbes (por cuenta del viajero).',
					'4:00 pm - Retorno al hotel.',
				],
			},
			{
				day: 'Día 3',
				description: 'Nadando con tortugas',
				items: [
					'El nado con tortugas es en Mancora, en el Muelle de Mancora.',
					'Se le recoge al cliente a las 09.30Am. se dirigen al muelle de Mancora. se suben a un bote que les lleva hasta un muelle flotante, proceden a ponerse chaleco salvavidas e ingresan a nadar con las tortugas por un espacio de 45 minutos, el guia les toma fotos y videos acuaticos. despues de ello, retornan al muelle principal y tienen tiempo libre para hacer deportes acuaticos opcionales por su cuenta, tales como ( paseo en banano, paseo en cuatrimoto, paseo a caballo, entre otros)',
					'Luego tienen tiempo libre por su cuenta para disfrutar de la playa y almorzar por su cuenta en Mancora.',
				],
			},
			{
				day: 'Día 4',
				description: 'Disfruta de la piscina',
				items: [
					'Desayuno.',
					'Mañana libre para compras.',
					'Almuerzo libre (por cuenta del viajero).',
					'Tarde Playera Libre.',
					'Check Out del hotel.',
					'Fin del servicio.',
				],
			},
		],
	},
];

const flyingPoints = [
	{
		horaInicio: '6:25',
		lugarOrigen: 'LIM',
		duracion: '1 h',
		horaFin: '7:25',
		lugarDestino: 'AYP',
		parada: 'Directo',
		clasificacion: 'Adulto',
		precio: '46.93',
	},
	{
		horaInicio: '6:25',
		lugarOrigen: 'LIM',
		duracion: '1 h',
		horaFin: '7:25',
		lugarDestino: 'AYP',
		parada: '1 Parada',
		clasificacion: 'Adulto',
		precio: '46.93',
	},
	{
		horaInicio: '6:25',
		lugarOrigen: 'LIM',
		duracion: '1 h',
		horaFin: '7:25',
		lugarDestino: 'AYP',
		parada: '1 Parada',
		clasificacion: 'Adulto',
		precio: '46.93',
	},
	{
		horaInicio: '6:25',
		lugarOrigen: 'LIM',
		duracion: '1 h',
		horaFin: '7:25',
		lugarDestino: 'AYP',
		parada: '1 Parada',
		clasificacion: 'Adulto',
		precio: '46.93',
	},
];

const pakages = [
	{
		title: 'Aventura',
		img: 'aventura',
	},
	{
		title: 'Gastronomia',
		img: 'gastronomia',
	},
	{
		title: 'Cultura',
		img: 'culture',
	},
	{
		title: 'Excursion',
		img: 'excursion',
	},
	{
		title: 'Naturaleza',
		img: 'naturaleza',
	},
	{
		title: 'Playas',
		img: 'playa',
	},
];

const partners = [
	'civa',
	'colombia_lujo',
	'machu_picchu',
	'mota_turismo',
	'mundi_travel',
	'tatito',
];

export {
	destionos,
	paquete,
	sliderImages,
	flyingPoints,
	services,
	pakages,
	partners,
};
