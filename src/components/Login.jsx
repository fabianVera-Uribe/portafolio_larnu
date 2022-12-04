import axios from "axios";
import {  useState } from "react";
import Inicio from "../routes/Inicio";

function Login() {
  const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";

  const [values, setValues] = useState({
    email: "fvera.uribe@gmail.com",
    discordId: "438501128498577423",
  });

  const [logged, setLogged] = useState(false);


  const handleChange = (e) => {
    console.log(e);

    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const login = () => {
    axios
      .post(`${baseUrl}/auth/login`, values)
      .then((res) => {
        console.log(res);
        console.log(res.data.token);
        return res.data.token;
      })
      .then((token) => {
        setLogged(true);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    login();
  };

  const Form = () => {
    return (
      <form className="form" onSubmit={submit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={values.email || ""}
          placeholder="Email"
          onChange={handleChange}
          id="email"
          required
        />

        <label htmlFor="id">DiscordID: </label>
        <input
          type="text"
          name="discordId"
          placeholder="DiscordId"
          value={values.discordId || ""}
          onChange={handleChange}
          id="id"
          required
        />

        <button className="btn" type="submit">Login</button>
      </form>
    );
  };



  return <div className="App">{logged ? <Inicio /> : <Form />}</div>;
}

export default Login;