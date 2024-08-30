import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Pege2 from './routes/page2/pege2'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Page4 from './routes/page4/page4'
import Page5 from './routes/page5/page5'
import Page3 from './routes/page3/pege3'

const router = createBrowserRouter([
  {
  path: "/",
    element: <App />,
    // errorElement: ,
    children:[
      {path: "/", element: <  Home />},
      {path: "/intro", element: <Pege2/>},
      {path: "/infoAi", element: <Page3/>},
      {path: "/info", element: <Page4/>},
      {path: "/saibamais", element: <Page5/>},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
