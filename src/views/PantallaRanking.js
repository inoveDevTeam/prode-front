import { useContext } from "react"
import { AppContext } from "../appInfo"

function PantallaRanking(){
  const { state } = useContext(AppContext)
  const { partidos } = state;
  console.log(partidos)
  return(
    <>
      Ranking
    </>
  )
}

export default PantallaRanking