import React from "react"
import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hola, Soy Fabián Vera.</p>
        <h2>Desarrollador Frontend.</h2>
        <div>
          <Link className="btn" to="/proyectos">Proyectos</Link>
          <Link className="btn btn-light" to="/contacto">Contacto</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg