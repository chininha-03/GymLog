// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// // import Home from './routes/Home'
// import "./index.css";

// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/js/bootstrap";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Login from "./routes/login/Login.jsx";
// import CadastroAtv from "./routes/Cadastro/CadastroAtv/CadastroAtv.jsx";
// import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
// import Home from "./routes/login/Home.jsx";
// import ErrorPage from "./routes/ErrorPage/Error.jsx";
// import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";
// import CadastroInfo from "./routes/Cadastro/CadastroInfo/CadastroInfo.jsx";
// import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
// import Home from "./routes/login/Home.jsx";
// import ErrorPage from "./routes/ErrorPage/Error.jsx";
// import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";
// import Testeheader from "./routes/Deletar/testeheader.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/", element: <Home /> },
//       { path: "/login", element: <Login /> },
//       { path: "/cadSexo", element: <CadastroAtv /> },
//       { path: "/teste", element: <Testeheader /> },
//       { path: "/cadAtiv", element: <CadastroSexo /> },
//       { path: "/cadNome", element: <CadastroNome /> },
//       { path: "/cadSexo", element: <CadastroAtv /> },
//       { path: "/cadAtiv", element: <CadastroSexo /> },
//       { path: "/cadNome", element: <CadastroNome /> },
//       { path: "/cadInfo", element: <CadastroInfo /> },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Home from './routes/Home'
import "./index.css";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Primeiras páginas de cadastro
import Login from "./routes/login/Login.jsx";
import CadastroAtv from "./routes/Cadastro/CadastroAtv/CadastroAtv.jsx";
import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
import Home from "./routes/login/Home.jsx";
import ErrorPage from "./routes/ErrorPage/Error.jsx";
import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";
import CadastroInfo from "./routes/Cadastro/CadastroInfo/CadastroInfo.jsx";

// Páginas com todo o conteúdo
import Treino from "./routes/Pages/Treino/Treino.jsx";
import Rotina from "./routes/Pages/Rotinas/Rotina.jsx";
import Perfil from "./routes/Pages/Perfil/Perfil.jsx";
import Loja from "./routes/Pages/Loja/Loja.jsx";
import Exercicios from "./routes/Pages/Exercicios/Exercicios.jsx";
import Configuracoes from "./routes/Pages/Configuracoes/Configuracoes.jsx";
import SingIn from "./routes/login/SignIN/SingIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/singin", element: <SingIn /> },
      { path: "/home", element: <Home /> },
      { path: "/cadSexo", element: <CadastroAtv /> },
      { path: "/cadAtiv", element: <CadastroSexo /> },
      { path: "/cadNome", element: <CadastroNome /> },
      { path: "/cadInfo", element: <CadastroInfo /> },

      { path: "/treino", element: <Treino /> },
      { path: "/rotina", element: <Rotina /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/loja", element: <Loja /> },
      { path: "/exercicio", element: <Exercicios /> },
      { path: "/configuracoes", element: <Configuracoes /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
