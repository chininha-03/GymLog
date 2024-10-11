import React from "react";
import "./BasicHeader.css";

import logoExtensa from "../../assets/logoExtensa.svg";
import { useLocation, useNavigate } from "react-router-dom";

const BasicHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="divHeader">
        <button onClick={() => navigate(-1)} class="btn btn-outline-dark ms-4">
          <i class="bi bi-arrow-left"></i>
        </button>
        <img
          src={logoExtensa}
          alt="Ícone: À esquerda, dentro de um quadrado com bordas arredondadas e contorno branco, há um ícone de um haltere. O haltere é preto e possui um disco laranja em cada ponta. Texto: À direita do ícone, em letras maiúsculas e negrito, está escrito 'Gym Ultra'. A cor das letras é preta. A primeira letra, 'G', é um pouco maior que as demais e possui um formato mais arredondado."
        />
      </div>
    </>
  );
};

export default BasicHeader;
