import React from "react";
import "./App.css";

import { Outlet } from 'react-router-dom'

const App = () => {
  const apiUrl = `http://www.gym-log.somee.com`;
  return (
    <>
    <Outlet />
    
    </>
  );
};

export default App;
