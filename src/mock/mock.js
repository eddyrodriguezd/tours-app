import Aventura from './categories/assets/aventura.jpg';
import Bienestar from './categories/assets/bienestar.jpg';
import Cultura from './categories/assets/cultura.jpg';
import Excursionismo from './categories/assets/excursionismo.jpg';
import Naturaleza from './categories/assets/naturaleza.jpg';
import Playa from './categories/assets/playa.jpg';

import Arequipa from './destinations/assets/arequipa.jpg';
import Cajamarca from './destinations/assets/cajamarca.jpg';
import Chiclayo from './destinations/assets/chiclayo.jpg';
import Cuzco from './destinations/assets/cuzco.jpg';
import Ica from './destinations/assets/ica.jpg';
import Iquitos from './destinations/assets/iquitos.jpg';
import Lima from './destinations/assets/lima.jpg';
import Piura from './destinations/assets/piura.jpg';
import Tarapoto from './destinations/assets/tarapoto.jpg';

const categories = [
	{ id: 1, name: 'Aventura', image: Aventura },
	{ id: 2, name: 'Bienestar', image: Bienestar },
	{ id: 3, name: 'Cultura', image: Cultura },
	{ id: 4, name: 'Excursionismo', image: Excursionismo },
	{ id: 5, name: 'Naturaleza', image: Naturaleza },
	{ id: 6, name: 'Playa', image: Playa },
];

const destinations = [
	{ id: 1, name: 'Arequipa', image: Arequipa },
	{ id: 2, name: 'Cajamarca', image: Cajamarca },
	{ id: 3, name: 'Chiclayo', image: Chiclayo },
	{ id: 4, name: 'Cuzco', image: Cuzco },
	{ id: 5, name: 'Ica', image: Ica },
	{ id: 6, name: 'Iquitos', image: Iquitos },
	{ id: 7, name: 'Lima', image: Lima },
	{ id: 8, name: 'Piura', image: Piura },
	{ id: 9, name: 'Tarapoto', image: Tarapoto },
];

export default { categories, destinations };
