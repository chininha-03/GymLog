// ESTE HEADER ESTARÁ PRESENTE O CONTEÚDO DA PÁGINA, NO DESENVOLVIMENTO DO SITE

import React from "react";
import "./HeaderPrimario.css";
import imgLog from "../../assets/logoExtensa.svg";
import { Link } from "react-router-dom";
const HeaderPrimario = () => {
  return (
    <>
      <div className="MasterHeader">
        <img src={imgLog} alt="" />
        <div className="searc input-group">
          <span className="input-group-text" id="basic-addon1">
            <i class="bi bi-search"></i>
          </span>
          <input type="text" name="" id="" />
        </div>
        <div>
          <Link to={"./treinos"}>
            <h2></h2>
            <button className="biti">
              {" "}
              <i class="bi bi-house"></i>Treinos
            </button>
          </Link>
        </div>
        <div>
          <Link to={"./rotinas"}>
            <button className="biti">
              <i class="bi bi-clipboard-minus"></i>
              <h2>Rotinas</h2>
            </button>
          </Link>
        </div>
        <div>
          <Link to={"./exercicio"}>
            <button className="biti">
              <i class="bi bi-question-lg"></i>
              <h2>Exercícios</h2>
            </button>
          </Link>
        </div>
        <div>
          <Link to={"./perfil"}>
            <button className="biti">
              <i class="bi bi-person-fill"></i>
              <h2>Perfil</h2>
            </button>
          </Link>
        </div>
        <div>
          <Link to={"./loja"}>
            <button className="biti">
              <i class="bi bi-shop"></i>
              <h2>Loja</h2>
            </button>
          </Link>
        </div>
        <div>
          <Link to={"./configuracoes"}>
            <button className="biti">
              <i class="bi bi-gear-fill"></i>
              <h2>Configurações</h2>
            </button>
          </Link>
        </div>

        <div className="saidin">
          <div className="saida">
            <i
              class="bi bi-person-circle"
              style={{
                fontSize: "40px",
              }}
            ></i>
            <h2>Perfil</h2>
            <i
              class="bi bi-box-arrow-right"
              style={{
                fontSize: "25px",
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPrimario;
