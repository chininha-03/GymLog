// import React, { useState, useEffect } from "react";
// import "./Login.css";
// import LoginExtensa from "../../assets/logoExtensa.svg";
// import ImgLogin from "../../assets/imgLogin.png";
// import axios from "axios";
// import { useGoogleLogin } from "@react-oauth/google";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   1;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://api-gym-log.somee.com/identity/login",
//         {
//           email,
//           password,
//         }
//       );

//       console.log(response.data); // Manipular a resposta do servidor (token, etc.)
//     } catch (error) {
//       setError("Credenciais inválidas");
//       console.error(error);
//     }
//   };

//   //autentificação do google
//   // const responseGoogle =(response)=>{
//   // console.log(response)
//   // }
//   const [user, setUser] = useState(null);

//   const handleLogin = () => {
//     // URL de autenticação do Google (substitua por sua URL)
//     const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth?";
//     const clientId =
//       "403831315372-7g18g5pat3tk1o32mipjmrj1p0g9r4qv.apps.googleusercontent.com"; // Substitua pelo seu Client ID do Google
//     const redirectUri = "http://localhost:8080"; // URL de redirecionamento da sua aplicação
//     const scope = "profile email";

//     const url = `${googleAuthUrl}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&prompt=consent`;

//     window.open(url, "_blank");
//   };

//   useEffect(() => {
//     // Verificar se há um código de autorização na URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get("code");
//     if (code) {
//       // Aqui você faria uma requisição para o seu backend
//       // para trocar o código de autorização por um token de acesso
//       // e obter as informações do usuário
//       fetch("/api/google-login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ code }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setUser(data);
//           console.log(user);
//         })
//         .catch((error) => {
//           console.error("Erro ao obter informações do usuário:", error);
//         });
//     }
//   }, []);

//   return (
//     <>
//       <div className="row conti divMaster">
//         <div className="d-lg-block">
//           <img
//             className="img-fluid"
//             src={LoginExtensa}
//             alt="Imagem da logo oficial do aplicativo, escrito GymLog"
//           />
//           <div className="login-parte">
//             <form
//               onSubmit={handleSubmit}
//               className="col-lg-6 col-sm-12 col-md-12"
//             >
//               <div className="btnInteracao">
//                 <h3>LogIn</h3>

//                 {/* <useGoogleLogin
//                clienteId="403831315372-7g18g5pat3tk1o32mipjmrj1p0g9r4qv.apps.googleusercontent.com"
//                buttonText="Continuar com o Google"
//                onSuccess={responseGoogle}
//                onFailure={responseGoogle}
//                /> */}

//                 <button
//                   onClick={handleLogin}
//                   className="btn btn-outline-secondary m-2"
//                 >
//                   <i className="bi bi-google "></i>
//                   <a href="#" className="ps-4 fw-semibold">
//                     Login com Google
//                   </a>
//                 </button>
//                 <button className="btn btn-outline-secondary mb-5">
//                   <i className="bi bi-apple "></i>
//                   <a href="#" className="ps-4 fw-semibold">
//                     Login com Apple
//                   </a>
//                 </button>
//               </div>
//               <div className="inputMaster">
//                 <div className="input-group mb-3">
//                   <span className="input-group-text">
//                     {" "}
//                     <i className="bi bi-envelope-at-fill"></i>
//                   </span>
//                   <div className="form-floating ">
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="form-control"
//                       id="floatingInputGroup1"
//                     />
//                     <label for="floatingInputGroup1">E-mail</label>
//                   </div>
//                 </div>

//                 <div className="input-group mb-3 ">
//                   <span className="input-group-text"> ***</span>
//                   <div className="form-floating">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       id="inputPassword6"
//                     />
//                     <label for="floatingInputGroup1">Senha</label>
//                   </div>
//                 </div>
//                 <div className="mb-3 form-check">
//                   <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="exampleCheck1"
//                   />
//                   <label className="form-check-label" for="exampleCheck1">
//                     Lembrar de mim
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-outline-primary">
//                 Entrar
//               </button>
//               <div></div>
//             </form>

//             <img
//               className="img-fluid col-lg-6"
//               src={ImgLogin}
//               alt="Imagem da logo oficial do aplicativo, escrito GymLog"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import "./Login.css";
// import LoginExtensa from "../../assets/logoExtensa.svg";
// import ImgLogin from "../../assets/imgLogin.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
// import { initializeApp } from "firebase/app"; // Firebase
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Autenticação do Firebase

// // Configuração do Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBc4LNllxBW6xiWh0n70Hyj0zdrMkgePMY",
//   authDomain: "gymlog-88c72.firebaseapp.com",
//   projectId: "gymlog-88c72",
//   storageBucket: "gymlog-88c72.appspot.com",
//   messagingSenderId: "313002956763",
//   appId: "1:313002956763:web:6df4b44d4fcd678e83b9fe",
//   measurementId: "G-HWK8SPJEWM",
// };

// // Inicializa o Firebase
// const app = initializeApp(firebaseConfig);

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate(); // Instancia useNavigate

//   // Função para login via e-mail/senha
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api-gym-log.somee.com/identity/login",
//         {
//           email,
//           password,
//         }
//       );
//       console.log(response.data); // Manipular a resposta do servidor (token, etc.)
//       navigate("/treino"); // Redireciona para a tela de treino
//     } catch (error) {
//       setError("Credenciais inválidas");
//       console.error(error);
//     }
//   };

//   // Função para login com Google usando Firebase
//   const handleGoogleLogin = () => {
//     const auth = getAuth(); // Obtém a instância de autenticação do Firebase
//     const provider = new GoogleAuthProvider(); // Provedor de login com Google

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log("Usuário logado:", user);
//         setUser(user);
//         // Redireciona para a página de treino com as informações do usuário
//         navigate("/treino", { state: { user } });
//       })
//       .catch((error) => {
//         console.error("Erro no login com Google:", error);
//       });
//   };

//   return (
//     <div className="row conti divMaster">
//       <div className="d-lg-block">
//         <img className="img-fluid" src={LoginExtensa} alt="Logo GymLog" />
//         <div className="login-parte">
//           <form
//             onSubmit={handleSubmit}
//             className="col-lg-6 col-sm-12 col-md-12"
//           >
//             <div className="btnInteracao">
//               <h3>LogIn</h3>

//               {/* Botão para login com Google */}
//               <button
//                 type="button"
//                 onClick={handleGoogleLogin}
//                 className="btn btn-outline-secondary m-2"
//               >
//                 <i className="bi bi-google"></i>
//                 <span className="ps-4 fw-semibold">Login com Google</span>
//               </button>

//               <button className="btn btn-outline-secondary mb-5">
//                 <i className="bi bi-apple"></i>
//                 <span className="ps-4 fw-semibold">Login com Apple</span>
//               </button>
//             </div>

//             <div className="inputMaster">
//               <div className="input-group mb-3">
//                 <span className="input-group-text">
//                   <i className="bi bi-envelope-at-fill"></i>
//                 </span>
//                 <div className="form-floating">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-control"
//                     id="floatingInputGroup1"
//                   />
//                   <label htmlFor="floatingInputGroup1">E-mail</label>
//                 </div>
//               </div>

//               <div className="input-group mb-3">
//                 <span className="input-group-text">***</span>
//                 <div className="form-floating">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     id="inputPassword6"
//                   />
//                   <label htmlFor="floatingInputGroup1">Senha</label>
//                 </div>
//               </div>

//               <div className="mb-3 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label className="form-check-label" htmlFor="exampleCheck1">
//                   Lembrar de mim
//                 </label>
//               </div>
//             </div>

//             <button type="submit" className="btn btn-outline-primary">
//               Entrar
//             </button>
//           </form>

//           <img className="img-fluid col-lg-6" src={ImgLogin} alt="GymLog" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import LoginExtensa from "../../assets/logoExtensa.svg";
import ImgLogin from "../../assets/imgLogin.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import { initializeApp } from "firebase/app"; // Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Autenticação do Firebase

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBc4LNllxBW6xiWh0n70Hyj0zdrMkgePMY",
  authDomain: "gymlog-88c72.firebaseapp.com",
  projectId: "gymlog-88c72",
  storageBucket: "gymlog-88c72.appspot.com",
  messagingSenderId: "313002956763",
  appId: "1:313002956763:web:6df4b44d4fcd678e83b9fe",
  measurementId: "G-HWK8SPJEWM",
};

// Inicializa o Firebase
initializeApp(firebaseConfig);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Instancia useNavigate

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
  const handleGoogleLogin = () => {
    const auth = getAuth(); // Obtém a instância de autenticação do Firebase
    const provider = new GoogleAuthProvider(); // Provedor de login com Google

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuário logado:", user);
        setUser(user);
        localStorage.setItem("infos", user);

        // Redireciona para a página de treino após login bem-sucedido
        navigate("/treino");
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

            <Link to="/singin" className="mt-5">
              <button type="button" className="btn btn-outline-primary w-100">
                Criar Conta
              </button>
            </Link>
          </form>

          <img className="img-fluid col-lg-6" src={ImgLogin} alt="GymLog" />
        </div>
      </div>
    </div>
  );
};

export default Login;
