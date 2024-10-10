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
                  <i class="bi bi-google "></i>
                  <a href="#" className="ps-4 fw-semibold">
                    Login com Google
                  </a>
                </button>
                <button className="btn btn-outline-secondary mb-5">
                  <i class="bi bi-apple "></i>
                  <a href="#" className="ps-4 fw-semibold">
                    Login com Apple
                  </a>
                </button>
              </div>
              <div className="inputMaster">
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    {" "}
                    <i class="bi bi-envelope-at-fill"></i>
                  </span>
                  <div class="form-floating ">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="form-control"
                      id="floatingInputGroup1"
                    />
                    <label for="floatingInputGroup1">E-mail</label>
                  </div>
                </div>

                <div class="input-group mb-3 ">
                  <span class="input-group-text"> ***</span>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="inputPassword6"
                    />
                    <label for="floatingInputGroup1">Senha</label>
                  </div>
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Lembrar de mim
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-outline-primary">
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
