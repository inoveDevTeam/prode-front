import CardDesarrollador from "../components/devs/CardDesarrollador"
import Structure from "../components/Structure"
import '../assets/styles/devs/pantallaDevs.scss';

function PantallaDevs() {
  return (
    <Structure>
      <div className="containerPP">
        <div className="contpp-devs">
          <CardDesarrollador
            nombre={"Johana Rangel"}
            papel={"Back End"}
            redes={{
              linkedIn: 'https://www.linkedin.com/in/johana-rangel-5156a895/',
              mail: 'johanarang@hotmail.com',
              gitHub: 'https://github.com/RGJohana'
              }}
          />
          <CardDesarrollador
            nombre={"Santiago Barrios"}
            papel={"Front End"}
            redes={{
              linkedIn: 'https://www.linkedin.com/in/santiago-juan-barrios/',
              mail: 'santibarrios2000@gmail.com',
              gitHub: 'https://github.com/SantiRagnar'
              }}
          />
        </div>
      </div>
    </Structure>
  )
}

export default PantallaDevs