import "./FormStyles.css"

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Tu nombre</label>
        <input type="text" />
        <label>Tu Email</label>
        <input type="email" />
        <label>Asunto</label>
        <input type="text" />
        <label>Mensaje</label>
        <textarea rows="6" placeholder="Escribe tu mensaje aquí" />

        <button className="btn">Enviar</button>
      </form>
    </div>
  )
}

export default Form