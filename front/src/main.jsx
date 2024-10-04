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

import Login from "./routes/login/Login.jsx";
import CadastroAtv from "./routes/Cadastro/CadastroAtv/CadastroAtv.jsx";
import CadastroSexo from "./routes/Cadastro/CadastroSexo/CadastroSexo.jsx";
import Home from "./routes/login/Home.jsx";
import ErrorPage from "./routes/ErrorPage/Error.jsx";
import CadastroNome from "./routes/Cadastro/CadastroNome/CadastroNome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cadSexo", element: <CadastroAtv /> },
      { path: "/cadAtiv", element: <CadastroSexo /> },
      { path: "/cadNome", element: <CadastroNome /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
