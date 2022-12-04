import { useState } from "react";
import { Link } from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import "./NavBarStyles.css"

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState(false)
  const handleNav = () => setNav(!nav)
  const handleColor = () => {
    if(window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", handleColor)
  const links = [
    {
      id: 1,
      to: "/",
      link: "Inicio",
    },
    {
      id: 2,
      to: "/sobremi",
      link: "Sobre Mi",
    },
    {
      id: 3,
      to: "/proyectos",
      link: "Proyectos",
    },
    {
      id: 4,
      to: "/contacto",
      link: "Contacto",
    },
  ]


  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>FabiánVera.</h1>
      </Link>
      <ul className={nav ? "nav-menu active" : "nav-menu"}>
          {links.map(({ id, to, link }) => (
            <li key={id}>
              <Link to={to}>{link}</Link>
            </li>
          ))}
      </ul>
      <div onClick={handleNav} className="hamburger">
        {nav ? <FaTimes size={30} style={{ color: "#fff" }} /> : <FaBars size={30} style={{ color: "#fff" }} />}     
      </div>
    </div>
  )
}

export default NavBar