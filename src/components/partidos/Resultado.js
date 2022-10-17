import Input from "./Input"
import Separador from "../Separador"
import '../../assets/styles/partidos/resultado.scss'

function Resultado({eq1,eq2}){
  return(
    <div className="resultado">
      <div className="cont-resultado">
        <Input value={eq1} readOnly={true}/>
        <Separador />
        <Input value={eq2} readOnly={true}/>
      </div>
    </div>
  )
}

export default Resultado