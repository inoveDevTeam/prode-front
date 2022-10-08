import '../../assets/styles/ranking/cardRanking.scss'
import User from '../../assets/img/user 1.svg'
import Puntos from './Puntos'


function CardRanking() {
  return (
    <>
    <div className="cont-ranking" >
      <Puntos color={'normal'}/>
      <div className='cont-user'>
        <img src={User} alt="user"/>
        <p>Nombre user</p>
      </div>
      <Puntos color={''}/>
    </div>

    </>
  )
}

export default CardRanking