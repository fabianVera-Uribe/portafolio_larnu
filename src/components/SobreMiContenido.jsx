import { Link } from "react-router-dom"
import "./SobreMiContenidoStyles.css"
import Introbg from "../assets/intro-bg.jpg"

const SobreMiContenido = () => {
  return (
    <div className="sobremi">
      <div className="izquierda">
        <h2>¿Quién Soy?</h2>
        <p>Frontend Developer... blablbla.</p>
        <Link to="/contacto">
          <button className="btn">Contacto</button>
        </Link>
      </div>

      <div className="derecha">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={Introbg} alt="pic" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={Introbg} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SobreMiContenido