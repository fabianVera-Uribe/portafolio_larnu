import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import WorkCard from '../components/WorkCard';

const Proyectos = () => {
  return (
    <div>
      <NavBar />
      <HeroSection heading="proyectos." text="alguno de mis proyectos." />
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Proyectos