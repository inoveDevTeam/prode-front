import '../assets/styles/logIn.scss'
import logoInove from '../assets/img/iconoinove.png'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [validadorInicio, setValidadorInicio] = useState({ user: '', password: '' })

  const handleChange = (e) => {
    setValidadorInicio((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e)=>{
    console.log(e)
    console.log(e.target.name)
    if(e.target.name === 'iniciarSesion'){
      console.log("Iniciandop secion")
      navigate("/")
    }
    if(e.target.name === 'crearCuenta'){
      console.log("crenadoCuenta")
    }
  }

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
          <input
            type="submit"
            className='inputInicio btn-crearCu'
            value="Crear Cuenta"
            name='crearCuenta'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}