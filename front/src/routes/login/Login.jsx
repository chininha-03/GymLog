import React, { useState } from "react";
import "./Login.css";
import LoginExtensa from "../../assets/logoExtensa.svg";
import ImgLogin from "../../assets/imgLogin.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-gym-log.somee.com/identity/login",
        {
          email,
          password,
        }
      );

      console.log(response.data); // Manipular a resposta do servidor (token, etc.)
    } catch (error) {
      setError("Credenciais inválidas");
      console.error(error);
    }
  };

  return (
    <>
      <div className="row conti divMaster">
        <div className="d-lg-block">
          <img
            className="img-fluid"
            src={LoginExtensa}
            alt="Imagem da logo oficial do aplicativo, escrito GymLog"
          />
          <div className="login-parte">
            <form
              onSubmit={handleSubmit}
              className="col-lg-6 col-sm-12 col-md-12"
            >
              <div className="btnInteracao">
                <h3>LogIn</h3>
                <button className="btn btn-outline-secondary m-2">
                  <i className="bi bi-google "></i>
                  <a href="#" className="ps-4 fw-semibold">
                    Login com Google
                  </a>
                </button>
                <button className="btn btn-outline-secondary mb-5">
                  <i className="bi bi-apple "></i>
                  <a href="#" className="ps-4 fw-semibold">
                    Login com Apple
                  </a>
                </button>
              </div>
              <div className="inputMaster">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    {" "}
                    <i className="bi bi-envelope-at-fill"></i>
                  </span>
                  <div className="form-floating ">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="floatingInputGroup1"
                    />
                    <label for="floatingInputGroup1">E-mail</label>
                  </div>
                </div>

                <div className="input-group mb-3 ">
                  <span className="input-group-text"> ***</span>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="inputPassword6"
                    />
                    <label for="floatingInputGroup1">Senha</label>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Lembrar de mim
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Entrar
              </button>
            </form>

            <img
              className="img-fluid col-lg-6"
              src={ImgLogin}
              alt="Imagem da logo oficial do aplicativo, escrito GymLog"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
