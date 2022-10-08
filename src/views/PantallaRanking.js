import { useContext } from "react"
import { AppContext } from "../appInfo"
import Banner from "../components/Banner";
import '../assets/styles/ranking/pantallaRanking.scss'
import CardRanking from "../components/ranking/CardRanking";
import Structure from "../components/Structure";
import PuntuacionUser from "../components/ranking/PuntuacionUser";
import { Divider } from "@mui/material";
import Separador from "../components/Separador";
import CardPodio from "../components/ranking/CardPodio";


function PantallaRanking() {
  const { state } = useContext(AppContext)
  const { ranking } = state;

  return (
    <Structure>
      <div className="containerPP">
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-ranking">
          <article className="cont-tit">
            <h1>Ranking</h1>
          </article>
          <PuntuacionUser />
          <article className="rank-global">
            <div className="cont-tit-punt">
              <h3>Puntuación Global</h3>
            </div>
            <div className="cont-card-ranking">
              <div className="cont-podio">
                <CardPodio
                  podio={'oro'}
                  posicion={1}
                  puntos={10}
                />
                <CardPodio
                  podio={'plata'}
                  posicion={2}
                  puntos={9}
                />
                <CardPodio
                  podio={'bronce'}
                  posicion={3}
                  puntos={8}
                />
              </div>
              <CardRanking />
              <CardRanking />
              <CardRanking />
              <CardRanking />
              <CardRanking />

            </div>
          </article>
        </section>
      </div>

    </Structure>
  )
}

export default PantallaRanking