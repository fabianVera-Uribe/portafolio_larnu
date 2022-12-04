import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection'
import SobreMiContenido from '../components/SobreMiContenido';

const SobreMi = () => {
  return (
    <div>
      <NavBar />
      <HeroSection heading="Sobre Mi." text="Descripción básica de menos de 20 palabras." />
      <SobreMiContenido />
      <Footer />
    </div>
  )
}

export default SobreMi