import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: ,
    children:[
      {path: "/", element: <Home />},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
