import React from "react"
import "./FooterStyles.css"
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa"

const Footer = () => {
  return (
    <div className ="footer">
      <div className="izquierda">
        <div className="ubicacion">
          <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}} />
          <div>
          <p>Villa Alemana, Valparaíso.</p>
          <p>Chile.</p>
          </div>
        </div>
        <div className="mail">
          <h4>
            <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />
            fvera.dev@gmail.com
          </h4>
        </div>
      </div>
      <div className="derecha">
        <div className="redes">
          <FaLinkedin size={20} style={{color: "#fff", marginRight:"2rem"}} />
          <FaGithub size={20} style={{color: "#fff", marginRight:"2rem"}} />
        </div>
      </div>
    </div>
  )
}

export default Footer