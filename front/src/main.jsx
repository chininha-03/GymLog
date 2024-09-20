import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Home from './routes/Home'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './routes/login/Login.jsx'


const router = createBrowserRouter([
  {
  path: "/",
    element: <App />,
    // errorElement: ,
    children:[
      // {path: "/Home", element: < Home  />}
      {path: "/login", element: < Login  />}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
