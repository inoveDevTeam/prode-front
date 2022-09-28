import '../assets/styles/cardRanking.scss'
import User from '../assets/img/user 1.svg'

function CardRanking({podio}) {
  return (
    <>
    <div className="cont-ranking">
      <div className={`cont-posicion ${podio}`}  >
        <p>#0000</p>
      </div>
      <div className='cont-user'>
        <img src={User} alt="user"/>
        <p>Nombre user</p>
      </div>
      <div className='cont-puntos'>
        <p>0000</p>
      </div>
    </div>

    </>
  )
}

export default CardRanking