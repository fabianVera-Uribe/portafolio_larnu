import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Form from '../components/Form';


const Contacto = () => {
  return (
    <div>
      <NavBar />
      <HeroSection heading="contacto." text="contácteme para mejorar la apariencia de su página web" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contacto