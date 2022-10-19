import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appInfo";
import LoginIcon from '@mui/icons-material/Login';
import "../assets/styles/buttonLogIn.scss"

function ButtonLogIn(){
  const {state} = useContext(AppContext)
  const {mobile} = state
  const navigate = useNavigate();

  const redirectTo = (url)=>{
    navigate(url);
  }

  return(
    <button 
      className={mobile ?"buttonLogIn" : "buttonLogIn-desk"}
      onClick={()=>{redirectTo("/logIn")}}
      >
      <LoginIcon />
      <span>Iniciar Sesion</span>
    </button>
  )
}

export default ButtonLogIn