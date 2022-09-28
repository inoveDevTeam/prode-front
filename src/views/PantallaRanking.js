import { useContext } from "react"
import { AppContext } from "../appInfo"
import Banner from "../components/Banner";
import '../assets/styles/pantallaRanking.scss'
import CardRanking from "../components/CardRanking";

function PantallaRanking() {
  const { state } = useContext(AppContext)
  const { ranking } = state;

  return (
    <>
      <div className="containerPP">
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-ranking">
          <article className="cont-tit">
            <h1>Ranking</h1>
          </article>
          <article className="rank-user">
            <div className="cont-tit-punt">
              <h3>Tu Puntuación</h3>
            </div>
            <CardRanking />
          </article>
          <article className="rank-global">
            <div className="cont-tit-punt">
              <h3>Puntuación Global</h3>
            </div>
            <div className="cont-card-ranking">
              <CardRanking podio={'oro'}/>
              <CardRanking podio={'plata'}/>
              <CardRanking podio={'bronce'}/>
              <CardRanking podio={'normal'}/>
            </div>
          </article>
        </section>
      </div>

    </>
  )
}

export default PantallaRanking