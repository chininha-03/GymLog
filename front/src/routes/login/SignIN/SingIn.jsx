import React, { useState } from "react";
import "./SingIn.css";
import Footer from "../../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../fireBase"; // Importações do Firebase configurado
import axios from 'axios';
const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api-gym-log.somee.com/identity/register",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Redireciona para a página desejada em caso de sucesso
        navigate("/cadastro", {
          state: {
            user: {
              email: email,
              password: password,
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
      } else {
        alert("Erro ao fazer login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
      alert("Ocorreu um erro ao tentar fazer login.");
    }
  };

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
    <>
      <div className="divMaster-SingIn">
        <form className="form-SingIn" onSubmit={handleLogin}>
          <p className="title">Registrar </p>
          <p className="message">
            Cadastre-se agora e tenha acesso ao nosso aplicativo.{" "}
          </p>
         
            {/* <label for="validationDefault01">
              <input
                className="input-SignIn"
                type="text"
                placeholder=""
                required
                id="validationDefault01"
              />
              <span>Nome</span>
            </label> */}
       

          <label for="validationDefault03">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-SignIn"
              type="email"
              placeholder=""
              required
              id="validationDefault03"
            />
            <span>Email</span>
          </label>

          <label for="validationDefault04">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-SignIn"
              type="password"
              placeholder=""
              required
              id="validationDefault04"
            />
            <span>Senha</span>
          </label>

          <div className="form-check">
            <button
              style={{
                width: "80%",
              }}
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline-secondary m-2"
            >
              <i className="bi bi-google"></i>
              <span className="ps-4 fw-semibold">Login com Google</span>
            </button>
            <label className="form-check-label" for="invalidCheck2">
              Concordar com os termos e condições
            </label>
          </div>
          <Link to="/treino" className="submit shadow-pop-bl mb-3">
            <input type="submit" className="" />
          </Link>
        </form>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default SingIn;
