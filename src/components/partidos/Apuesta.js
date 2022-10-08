import Input from "./Input"
import Separador from "../Separador"
import "../../assets/styles/partidos/apuesta.scss"
import { useEffect, useState } from "react"
import Editar from "../../assets/img/Editar.svg"
import Confirmar from "../../assets/img/Confirmar.svg"
import { useContext } from "react";
import { AppContext } from "../../appInfo"
//import toast from "react-hot-toast"

function Apuesta() {
  const [editar, setEditar] = useState(false)
  const [valorApuesta, setValorApuesta] = useState({ apuestaEq1: '0', apuestaEq2: '0' })
  const { state } = useContext(AppContext);
  const { userHabilitado } = state;

  const handleChange = (e) => {
    setValorApuesta((state) => ({
      ...state,
      [e.target.name]: Math.round(e.target.value),
    }))
  }

  const handleClick = (e) => {
    console.log(e)
    if (e.target.name === "confirmar") {
      console.log("confirmando apuesta")
    }
    setEditar(!editar)
  }

  console.log("valor Apuesta", valorApuesta)

  return (
    <>
      <div className="apuesta">
        <div className={userHabilitado ?"cont-apuesta" : "cont-apuesta no-edit"}>
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
            {editar
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
                <img src={Editar} alt="edit" />
              </button>
            }

          </div>
        : null  
      }
      </div>
    </>
  )
}

export default Apuesta