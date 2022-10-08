import CardRanking from "./CardRanking"
import { useContext } from "react";
import { AppContext } from "../../appInfo"

function PuntuacionUser() {
  const { state } = useContext(AppContext);
  const { userHabilitado } = state;
  return (
    <>
      {userHabilitado
      ?
        <article className="rank-user">
        <div className="cont-tit-punt">
          <h3>Tu Puntuación</h3>
        </div>
        <CardRanking podio={'normal'} />
      </article>
      : null  
    }
    </>
  )
}

export default PuntuacionUser