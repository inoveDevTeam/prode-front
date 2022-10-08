import Apuesta from "../partidos/Apuesta"
import Resultado from "../partidos/Resultado"

import '../../assets/styles/partidos/cardPartidos.scss'

function CardPartidos() {
  return (
    <div className="cont-cardPartido">
      <div className="cont-nomEquipos">
        <div className="equipo">
          <p>Equipo 1</p>
        </div>
        <div className="equipo">
          <p>Equipo 2</p>
        </div>
      </div>
      <div className="cont-datosPartido">
        <div className="cont-dato">
          <div className="cont-date">
            <p>Mar 15, septiembre 2022 18:30</p>
          </div>
          <div className="cont-obs">
            Observaciones
          </div>
        </div>
        <div className="cont-estado">
          <p>no jugado</p>
        </div>
      </div>
      <div className="cont-resul-apu">
        <Apuesta />
        <Resultado />
        {/* <div className="cont-puntosObt">
          <p>Puntos Obtenidos</p>
          <Input />
        </div> */}
      </div>
    </div>
  )
}

export default CardPartidos