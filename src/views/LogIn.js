import '../assets/styles/logIn.scss'
import logoInove from '../assets/img/iconoinove.png'
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from '../appInfo';

export default function LogIn() {
  const navigate = useNavigate();
  const [validadorInicio, setValidadorInicio] = useState({ user: '', password: '' })
  const { state, dispatch } = useContext(AppContext);
  const { user, userHabilitado } = state;

  const handleChange = (e) => {
    setValidadorInicio((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const postUser = () => {
    axios.post(process.env.REACT_APP_LOGIN_URL, {
      username: validadorInicio.user,
      password: validadorInicio.password
    })
      .then((res) => {
        dispatch({type: "setUser", payload: res.data });
        dispatch({type: "setUserHabilitado", payload: true });
        localStorage.setItem('userAgeRedBull', JSON.stringify(user))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmit = (e)=>{
    if(e.target.name === 'iniciarSesion'){
      postUser()
      navigate("/")
    }
    if(e.target.name === 'crearCuenta'){
      console.log("crenadoCuenta")
    }
  }

  console.log(user)
  console.log(userHabilitado)

  return (
    <div className='contPP'>
      <div className="cont-login">
        <div className='cont-logo'>
          <img src={logoInove} alt='logo inove' />
          <h3>Age-RedBull</h3>
        </div>
        <div className='form-login'>
          <input
            type="text"
            className='inputInicio inp-user'
            placeholder='Usuario'
            name='user'
            value={validadorInicio.user}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="password"
            className='inputInicio inp-pass'
            placeholder='Contraseña'
            name='password'
            value={validadorInicio.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className='cont-bts'>
          <input
            type="submit"
            className='inputInicio btn-inicioSes'
            value="Iniciar Sesion"
            name='iniciarSesion'
            onClick={handleSubmit}
          />
          {/* 
          <input
            type="submit"
            className='inputInicio btn-crearCu'
            value="Crear Cuenta"
            name='crearCuenta'
            onClick={handleSubmit}
          /> */}
        </div>
      </div>
    </div>
  )
}