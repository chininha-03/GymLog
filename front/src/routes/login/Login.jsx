import "./Login.css";
import LoginExtensa from "../../assets/logoExtensa.svg";
import ImgLogin from "../../assets/imgLogin.png";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const novoLogin = {
        email,
        password,
        useCookies: false,
        useSessionCookies: false,
      }; // Adicione outros campos conforme necessário
      const response = await axios.post(
        "http://api-gym-log.somee.com/identity/login",
        novoLogin
      );
      console.log("Usuario encontrado com sucesso:", response.data);
      // Limpar os campos do formulário após o cadastro
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <div>
      <div>
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
                  {/* <button className="btn btn-outline-secondary m-2">
                    <i className="bi bi-google "></i>
                    <a href="#" className="ps-4 fw-semibold">
                      Login com Google
                    </a>
                  </button> */}
                  <button class="iibutton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 256 262"
                    >
                      <path
                        fill="#4285F4"
                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      ></path>
                      <path
                        fill="#EB4335"
                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      ></path>
                    </svg>
                    Continue with Google
                  </button>

                  <button class="eebutton">
                    <svg
                      stroke="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                    >
                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                      <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        id="SVGRepo_tracerCarrier"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>{" "}
                      </g>
                    </svg>
                    Continue with Apple
                  </button>
                </div>
                <div className="inputMaster">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      {" "}
                      <i className="bi bi-envelope-at-fill"></i>
                    </span>
                    <div classNameo="form-floating ">
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
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Lembrar de mim
                    </label>
                  </div>
                </div>
                <Link to={"/register"}>Não tem uma conta?Se registrar</Link>
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
      </div>
    </div>
  );
};

export default Login;
