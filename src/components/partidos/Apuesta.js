import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../../appInfo"
import { instancia } from "../interceptors"
import toast from "react-hot-toast"
import Input from "./Input"
import Separador from "../Separador"
import Confirmar from "../../assets/img/Confirmar.svg"
import Editar from "../../assets/img/Editar.svg"
import "../../assets/styles/partidos/apuesta.scss"

function Apuesta({ editable, infoPartido }) {
  const [editar, setEditar] = useState(false)
  const [valorApuesta, setValorApuesta] = useState(
    {
      apuestaEq1: infoPartido.pronostico_equipo_1 === null ? '' : infoPartido.pronostico_equipo_1,
      apuestaEq2: infoPartido.pronostico_equipo_2 === null ? '' : infoPartido.pronostico_equipo_2
    })
  const { state, dispatch } = useContext(AppContext);
  const { userHabilitado } = state;

  const handleChange = (e) => {
    if (e.target.value.length <= 2) {
      setValorApuesta((state) => ({
        ...state,
        [e.target.name]: Math.round(e.target.value),
      }))
    }
  }

  const handleClick = (e) => {
    if (e.target.name === "confirmar") {
      instancia.post(process.env.REACT_APP_PARTIDOS_URL, {
        'partido_id': infoPartido.partido_id,
        'pronostico_equipo_1': valorApuesta.apuestaEq1,
        'pronostico_equipo_2': valorApuesta.apuestaEq2,
      },
      )
        .then((res) => {
          console.log(res)
          setEditar(false)
          toast.success("La apuesta se realizo con exito")
          getPartidos()
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status == 422) {
            toast.error("La apuesta se ha cerrado, por favor recargue la pagina")
          } else {
            toast.error("Ocurrio un error inesperado, por favor recargue la pagina")
          }
          setEditar(false)
        })
    }
    if (e.target.name === "editar" && !editable) {
      toast.error("No puede realizar la apuesta porque el partido ya comenzo")
      setEditar(false)
    } else {
      setEditar(true)
    }
  }

  const getPartidos = () => {
    instancia.get(process.env.REACT_APP_PARTIDOS_URL)
      .then((res) => {
        dispatch({ type: "setPartidos", payload: res.data.data })
      })
      .catch((err) => {
        toast.error("Hubo un error al cargar los partidos, por favor recargue la pagina.")
      })
  }
  return (
    <>
      <div className="apuesta">
        <div className={userHabilitado ? "cont-apuesta" : "cont-apuesta no-edit"}>
          <Input
            value={valorApuesta.apuestaEq1}
            onChange={(e) => {
              handleChange(e)
            }}
            name={"apuestaEq1"}
            editar={editar}
            readOnly={editar ? false : true}
          />
          <Separador />
          <Input
            value={valorApuesta.apuestaEq2}
            onChange={handleChange}
            name={"apuestaEq2"}
            editar={editar}
            readOnly={editar ? false : true}
          />
        </div>
        {userHabilitado
          ?
          <div className="edit">
            {infoPartido.estado == 0
              ?
              ( editar && editable
                ?
                <button
                  className="btn-apuesta btn-confirmar"
                  name="confirmar"
                  onClick={handleClick}
                >
                  <img src={Confirmar} name="confirmar" alt="confirmar" />
                </button>
                :
                <button
                  className="btn-apuesta btn-editar"
                  name="editar"
                  onClick={handleClick}
                >
                  <img src={Editar} name="editar" alt="edit" />
                </button>
              )
              :null
            }
          </div>
          : null
        }
      </div>
    </>
  )
}

export default Apuesta