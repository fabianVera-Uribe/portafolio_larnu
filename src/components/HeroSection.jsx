import "./HeroSectionStyles.css"

const HeroSection = ({heading, text}) => {
  return (
    <div className="hero-section">
      <div className="heading">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default HeroSection