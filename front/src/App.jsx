<<<<<<< HEAD
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <></>;
}
=======
import React from "react";
import "./App.css";

import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Outlet />
    
    </>
  );
};
>>>>>>> chininha

export default App;
