import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../appInfo";
import ButtonLogIn from "./ButtonLogIn";
import ButtonLogOut from "./ButtonLogout";
import IconRanking from '../assets/img/icon-podio.svg'
import IconDevs from '../assets/img/icon-devs3.svg'
import IconPartido from '../assets/img/partido 1 (1).svg'
import '../assets/styles/navBar.scss'

function NavBar({ activo }) {
  const { state } = useContext(AppContext)
  const { userHabilitado, mobile } = state;
  const navigate = useNavigate();
  const redirectTo = (url) => {
    navigate(url)
  }
  if(mobile){
    return (
      <>
        {userHabilitado
          ? <ButtonLogOut />
          : <ButtonLogIn />
        }
        
        <nav className="cont-nav">
          <ul className="nav">
            <li className={activo == "ranking" ?"ranking activo" :"ranking"}>
              <a onClick={() => redirectTo("/ranking")}>
                <img src={IconRanking} />
              </a>
            </li>
            <li className={activo == "partido" ?"partido activo" :"partido"}>
              <a onClick={() => redirectTo("/")}>
                <img className="icon-partido" src={IconPartido} />
              </a>
            </li>
            <li className={activo == "devs" ?"devs activo" :"devs"}>
              <a onClick={() => redirectTo("/devs")}>
                <img src={IconDevs} />
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }else{
    return (
      <>
        {userHabilitado
          ? <ButtonLogOut />
          : <ButtonLogIn />
        }
        <nav className="cont-nav-desk">
          <ul className="nav">
            <li className="ranking">
              <a onClick={() => redirectTo("/ranking")}>
                <img src={IconRanking} />
              </a>
            </li>
            <li className="partido">
              <a onClick={() => redirectTo("/")}>
                <img src={IconPartido} />
              </a>
            </li>
            <li className="devs">
              <a onClick={() => redirectTo("/devs")}>
                <img src={IconDevs} />
              </a>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default NavBar