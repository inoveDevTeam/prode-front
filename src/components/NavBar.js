import { Link } from "react-router-dom";
import '../assets/styles/navBar.scss'
import IconPartido from '../assets/img/icon-partido.svg'
import IconRanking from '../assets/img/icon-podio.svg'
import IconDevs from '../assets/img/icon-devs3.svg'
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const redirectTo =(url)=>{
    navigate(url)
  }
  return (
    <nav className="cont-nav">
      <ul className="nav">
        <li className="ranking">
          <a
            onClick={() => redirectTo("/ranking")}
          >
            <img src={IconRanking} />
          </a>
        </li>
        <li className="partido">
          <a onClick={() => redirectTo("/")}>
            <img src={IconPartido} />
          </a>
        </li>
        <li className="devs">
          <a
            onClick={() => redirectTo("/devs")}
          >
            <img src={IconDevs} />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar