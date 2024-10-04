import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Home from './routes/Home'
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./routes/login/Login.jsx";
<<<<<<< HEAD
import Register from "./routes/Register/register.jsx";
=======
import CadastroAtv from "./routes/Cadastro/CadastroAtv/CadastroAtv.jsx";
>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: ,
    children: [
      // {path: "/Home", element: < Home  />}
      { path: "/login", element: <Login /> },
<<<<<<< HEAD
      { path: "/register", element: <Register /> },
=======
      { path: "/cadAtiv", element: <CadastroAtv /> },

>>>>>>> eab4ecd8367586f2c375e5dfddd110ddee274290
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
