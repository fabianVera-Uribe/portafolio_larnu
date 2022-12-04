import React from "react"
import "./index.css"
import Inicio from "./routes/Inicio"
import SobreMi from "./routes/SobreMi"
import Proyectos from "./routes/Proyectos"
import Contacto from "./routes/Contacto"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
