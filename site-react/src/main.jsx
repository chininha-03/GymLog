import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <App />,
    // errorElement: ,
    children:[
      {path: "/", element: <App />},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
