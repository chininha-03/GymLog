import React, { useState } from "react";
import "./CadastroSexo.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";

//

const CadastroSexo = () => {
  const location = useLocation();
  const { user } = location.state;

  const navigate = useNavigate();

  const handleNext = (escolha) => {
    navigate("/cadastro", {
      state: {
        user: { ...user, atividade: escolha, contUser: user.contUser + 1 },
      },
    });
    console.log(user);
  };
  return (
    <>
      <div className="divMasterCadSex">
        <h3>Qual é o seu nível de Atividade?</h3>
        <div className="divBtn-Acionar">
          <button className="UseBtn" onClick={() => handleNext("Sedentário")}>
            <span>Sedentário</span>
          </button>
          <button className="UseBtn" onClick={() => handleNext("Pouco Ativo")}>
            <span>Pouco Ativo</span>
          </button>
          <button className="UseBtn" onClick={() => handleNext("Ativo")}>
            <span>Ativo</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CadastroSexo;
