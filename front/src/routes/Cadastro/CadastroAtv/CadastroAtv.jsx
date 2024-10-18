import React, { useState } from "react";
import "./CadastroAtv.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import CadSexo from '../CadastroSexo/CadastroSexo.jsx'
// import CadastroSexo from "../CadastroSexo/CadastroSexo.jsx";

const CadastroAtv = () => {
  const location = useLocation();
  const { user } = location.state;

  const navigate = useNavigate();

  const handleNext = (escolha) => {
    
    // navigation("/cadAtiv", {state:{sexo:}})
    navigate("/cadastro", {
      state: {
        user: { ...user, sexo: escolha, contUser: user.contUser + 1 },
        
      },
    });
    console.log(user);
  };

  return (
    <>
      <div className="cadAtv-master">
        <div className="cadAtv-text ">
          <h3 className="">Qual é o seu sexo biologico?</h3>
          <h5>
            Seu sexo biologico determmina as necessecidades energeticas do seu
            corpo, <br />
            sua resposta será utilizada para realizar o calculo da taxa
            metabolica basal{" "}
          </h5>
        </div>
        <div className="cadAtv-escolhaSexo">
          <div className="sex rotate-vert-center">
            <button className="sexMasc" onClick={() => handleNext("Masculino")}>
              <i className="bi bi-gender-male"></i>
              <h3>Masculino</h3>
            </button>
          </div>
          <div className="sex rotate-vert-center-2">
            <button className="sexFem" onClick={() => handleNext("Feminino")}>
              <i className="bi bi-gender-female"></i>
              <h3>Feminino</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroAtv;
