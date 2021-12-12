import {Arequipa, Cajamarca, Chiclayo, Cuzco, Ica, Iquitos, Lima, Piura, Tarapoto} from './../../../assets/destinations';
import DestinationCard from './DestinationCard';

export default function DestinationCardsGrid() {
    const destinations = [
        { name: "Arequipa", image: Arequipa },
        { name: "Cajamarca", image: Cajamarca },
        { name: "Chiclayo", image: Chiclayo },
        { name: "Cuzco", image: Cuzco },
        { name: "Ica", image: Ica },
        { name: "Iquitos", image: Iquitos },
        { name: "Lima", image: Lima },
        { name: "Piura", image: Piura },
        { name: "Tarapoto", image: Tarapoto },
      ];

    return (
        <div>
            {destinations.map((item) =>
                <DestinationCard name={item.name} img={item.image}/>
            )}
        </div>
    )
}