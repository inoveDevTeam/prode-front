import { useContext, useEffect } from "react";
import { AppContext } from "../appInfo";
import { instancia } from "../components/interceptors";
import toast from 'react-hot-toast';
import Banner from "../components/Banner"
import CardPartidos from "../components/partidos/CardPartidos"
import Structure from "../components/Structure";
import '../assets/styles/partidos/pantallaPartidos.scss'

function PantallaPartidos() {
  const { state, dispatch } = useContext(AppContext);
  const { partidos } = state;

  useEffect(() => {
    getPartidos()
  }, [])

  const getPartidos = () => {
    instancia.get(process.env.REACT_APP_PARTIDOS_URL)
      .then((res) => {
        dispatch({ type: "setPartidos", payload: res.data.data })
      })
      .catch((err) => {
        toast.err("Hubo un error al cargar los partidos")
      })
  }

  return (
    <Structure activo={'partido'}>
      <div className="containerPP">
        <section className="contpp-banner">
          <Banner />
        </section>
        <section className="contpp-partidos">
          <article className="cont-tit">
            <h1>Partidos</h1>
          </article>
          <article className="cont-partidos">
            {partidos.length > 0
              ?
              partidos?.map(partido => (
                <CardPartidos infoPartido={partido} />
              ))
              : <p>Debe loguearse para ver los partidos</p>
            }
          </article>
        </section>
      </div>
    </Structure>
  )
}

export default PantallaPartidos