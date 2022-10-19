import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appInfo";
import LogoutIcon from '@mui/icons-material/Logout';
import "../assets/styles/buttonLogIn.scss"

function ButtonLogOut(){
  const {state} = useContext(AppContext)
  const {mobile} = state
  const navigate = useNavigate();

  return(
    <button 
      className={mobile ?"buttonLogIn" : "buttonLogIn-desk"}
      onClick={()=>{
        localStorage.removeItem("userAgeRedBull");
        window.location.reload();
      }}
      >
      <LogoutIcon />
      <span>Cerrar Sesion</span>
    </button>
  )
}

export default ButtonLogOut