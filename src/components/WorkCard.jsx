import "./WorkCardStyles.css"
import proyectob from "../assets/proyecto-blanco.png"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
      <h2 className="proyectos-heading">Proyectos</h2>
      <div className="proyectos-container">
        <div className="proyectos-card">
          <img src={proyectob} alt="imagen proyecto" />
          <h3 className="titulo">titulo</h3>
          <div className="detalles">
            <p>breve descripcion del proyecto</p>
            <div className="btn-proyectos">
              <NavLink to="#" className="btn">Ver</NavLink>
              <NavLink to="#" className="btn btn-light">Repo</NavLink>
            </div>
          </div>
        </div>

        <div className="proyectos-card">
          <img src={proyectob} alt="imagen proyecto" />
          <h3 className="titulo">titulo</h3>
          <div className="detalles">
            <p>breve descripcion del proyecto</p>
            <div className="btn-proyectos">
              <NavLink to="#" className="btn">Ver</NavLink>
              <NavLink to="#" className="btn btn-light">Repo</NavLink>
            </div>
          </div>
        </div>

        <div className="proyectos-card">
          <img src={proyectob} alt="imagen proyecto" />
          <h3 className="titulo">titulo</h3>
          <div className="detalles">
            <p>breve descripcion del proyecto</p>
            <div className="btn-proyectos">
              <NavLink to="#" className="btn">Ver</NavLink>
              <NavLink to="#" className="btn btn-light">Repo</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard