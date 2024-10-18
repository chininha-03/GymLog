import React, { useState } from "react";
import "./Login.css";
import LoginExtensa from "../../assets/logoExtensa.svg";
import ImgLogin from "../../assets/imgLogin.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "./fireBase"; // Importações do Firebase configurado

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Função para login via e-mail/senha
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
      navigate("/treino"); // Redireciona para a tela de treino
    } catch (error) {
      setError("Credenciais inválidas");
      console.error(error);
    }
  };

  // Função para login com Google usando Firebase
  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuário logado:", user);
        setUser(user);
        // localStorage.setItem("infos", user);

        // Redireciona para a página de treino após login bem-sucedido
        // navigate("/treino", { state: { user } });
        navigate("/cadastro", {
          state: {
            user: {
              email: user.email,
              googleName: user.displayName,
              googlePhotoURL: user.photoURL,
              sexo: null,
              atividade: null,
              displayName: null,
              photoURL: null,
              contUser: 1,
              Alt: null, 
              peso: null,
              idade: null,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Erro no login com Google:", error);
        setError("Erro ao fazer login com o Google.");
      });
  };

  return (
    <div className="row conti divMaster">
      <div className="d-lg-block">
        <img className="img-fluid" src={LoginExtensa} alt="Logo GymLog" />
        <div className="login-parte">
          <form
            onSubmit={handleSubmit}
            className="col-lg-6 col-sm-12 col-md-12"
          >
            <div className="btnInteracao">
              <h3>LogIn</h3>

              {/* Botão para login com Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline-secondary m-2"
              >
                <i className="bi bi-google"></i>
                <span className="ps-4 fw-semibold">Login com Google</span>
              </button>

              <button className="btn btn-outline-secondary mb-5">
                <i className="bi bi-apple"></i>
                <span className="ps-4 fw-semibold">Login com Apple</span>
              </button>
            </div>

            <div className="inputMaster">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="floatingInputGroup1"
                  />
                  <label htmlFor="floatingInputGroup1">E-mail</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">***</span>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="inputPassword6"
                  />
                  <label htmlFor="floatingInputGroup1">Senha</label>
                </div>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Lembrar de mim
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Entrar
            </button>
          </form>

          <img className="img-fluid col-lg-6" src={ImgLogin} alt="GymLog" />
        </div>
      </div>
    </div>
  );
};

export default Login;
