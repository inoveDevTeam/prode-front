import Banner from "../components/Banner"
import CardPartidos from "../components/CardPartidos"
import { Toaster } from 'react-hot-toast';
import '../assets/styles/pantallaPartidos.scss'

function PantallaPartidos() {
  return (
    <>
      <div className="containerPP">
        <Toaster />
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-partidos">
          <article className="cont-tit">
            <h1>Partidos</h1>
          </article>
          <article className="cont-partidos">
            <CardPartidos />
          </article>
        </section>
      </div>
    </>
  )
}

export default PantallaPartidos