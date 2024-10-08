import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Home from './routes/Home'
import "./index.css";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/login/Login.jsx";
import CadastroAtv from "./routes/Cadastro/CadastroAtv/CadastroAtv.jsx";
import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
import Home from "./routes/login/Home.jsx";
import ErrorPage from "./routes/ErrorPage/Error.jsx";
import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";
import CadastroInfo from "./routes/Cadastro/CadastroInfo/CadastroInfo.jsx";
import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
import Home from "./routes/login/Home.jsx";
import ErrorPage from "./routes/ErrorPage/Error.jsx";
import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";
import Testeheader from "./routes/Deletar/testeheader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/home", element: <Home /> },
      { path: "/cadSexo", element: <CadastroAtv /> },
      { path: "/cadAtiv", element: <CadastroSexo /> },
      { path: "/cadNome", element: <CadastroNome /> },
      { path: "/cadInfo", element: <CadastroInfo /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
