import FlyingPointsCard from "./../components/public/FlyingPoints/FlyingPointsCard";
import FlyingPointsHeader from "./../components/public/FlyingPoints/FlyingPointsHeader";
import "./../components/public/FlyingPoints/FlyingPointsCard.css";
function Flyingpoints() {
  return (
    <>
      <div className="container-flyingpoints">
        <main className="container-body">
          <FlyingPointsHeader />
          <section className="flying-cards">
            <FlyingPointsCard
              horaInicio="6:25"
              lugarOrigen="LIM"
              duracion="1 h"
              horaFin="7:25"
              lugarDestino="AYP"
              parada="Directo"
              clasificacion="Adulto"
              precio="46.93"
            />
            <FlyingPointsCard
              horaInicio="6:25"
              lugarOrigen="LIM"
              duracion="1 h"
              horaFin="7:25"
              lugarDestino="AYP"
              parada="1 Parada"
              clasificacion="Adulto"
              precio="46.93"
            />
            <FlyingPointsCard
              horaInicio="6:25"
              lugarOrigen="LIM"
              duracion="1 h"
              horaFin="7:25"
              lugarDestino="AYP"
              parada="1 Parada"
              clasificacion="Adulto"
              precio="46.93"
            />
            <FlyingPointsCard
              horaInicio="6:25"
              lugarOrigen="LIM"
              duracion="1 h"
              horaFin="7:25"
              lugarDestino="AYP"
              parada="1 Parada"
              clasificacion="Adulto"
              precio="46.93"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default Flyingpoints;
