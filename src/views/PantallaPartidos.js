import Banner from "../components/Banner"
import CardPartidos from "../components/partidos/CardPartidos"
import { Toaster } from 'react-hot-toast';
import '../assets/styles/partidos/pantallaPartidos.scss'
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Structure from "../components/Structure";

function PantallaPartidos() {

  useEffect(() => {
    // postUser();
  }, [])

  //https://github.com/InoveAlumnos/ecommerce_backend_python/blob/main/marvel/marvel/settings.py

  /* const postUser = () => {
    axios.post(process.env.REACT_APP_LOGIN_URL, {
      username: 'santiago',
      password: 'prode1234'
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  } */

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