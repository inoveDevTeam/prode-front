import Banner from "../components/Banner"
import CardPartidos from "../components/partidos/CardPartidos"
import { Toaster } from 'react-hot-toast';
import '../assets/styles/partidos/pantallaPartidos.scss'
import axios from "axios";
import { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Structure from "../components/Structure";
import { AppContext } from "../appInfo";
import { instancia } from "../components/interceptors";

function PantallaPartidos() {
  const { state } = useContext(AppContext);
  const { user } = state;

  useEffect(() => {
    getPartidos()
  }, [])

  const getPartidos = () => {
    instancia.get(process.env.REACT_APP_PARTIDOS_URL)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Structure>
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
    </Structure>
  )
}

export default PantallaPartidos