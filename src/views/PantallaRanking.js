import { useContext, useEffect, useState } from "react"
import { AppContext } from "../appInfo"
import { instancia } from "../components/interceptors";
import toast from 'react-hot-toast';
import Banner from "../components/Banner";
import CardPodio from "../components/ranking/CardPodio";
import CardRanking from "../components/ranking/CardRanking";
import PuntuacionUser from "../components/ranking/PuntuacionUser";
import Structure from "../components/Structure";
import '../assets/styles/ranking/pantallaRanking.scss'

function PantallaRanking() {
  const [arrRankingGlobalPodio, setArrRankingGlobalPodio] = useState([])
  const [arrRankingGlobal, setArrRankingGlobal] = useState([])
  const { state, dispatch } = useContext(AppContext)
  const { ranking, userHabilitado } = state;

  useEffect(() => {
    getRanking()
  }, [])

  useEffect(() => {
    if (ranking.ranking) {
      setArrRankingGlobalPodio(ranking.ranking.slice(0, 3))
      setArrRankingGlobal(ranking.ranking.slice(3))
    }
  }, [ranking])

  const posiciones = {
    1: 'oro',
    2: 'plata',
    3: 'bronce'
  }

  const getRanking = () => {
    instancia.get(process.env.REACT_APP_RANKING_URL)
      .then(res => {
        dispatch({ type: "setRanking", payload: res.data })
      })
      .catch(err =>
        toast.error("Hubo un error al cargar los ranking, por favor recargue la pagina.")
      )
  }

  return (
    <Structure activo={'ranking'}>
      <div className="containerPP">
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-ranking">
          <article className="cont-tit">
            <h1>Ranking</h1>
          </article>
          <PuntuacionUser />
          {userHabilitado
            ?
            <article className="rank-global">
              <div className="cont-tit-punt">
                <h3>Puntuación Global</h3>
              </div>
              <div className="cont-card-ranking">
                <div className="cont-podio">
                  {arrRankingGlobalPodio.map((rank) => (
                    <CardPodio
                      nombre={rank.username}
                      podio={posiciones[rank.posicion]}
                      posicion={rank.posicion}
                      puntos={rank.puntaje_total}
                    />
                  ))}
                </div>
                {arrRankingGlobal.map((rank) =>
                  <CardRanking
                    nombre={rank.username}
                    podio={posiciones[rank.posicion]}
                    posicion={rank.posicion}
                    puntos={rank.puntaje_total}
                  />
                )}
              </div>
            </article>
            : <p className="sin-dato">Debe loguearse para ver el ranking</p>
          }
        </section>
      </div>

    </Structure>
  )
}

export default PantallaRanking