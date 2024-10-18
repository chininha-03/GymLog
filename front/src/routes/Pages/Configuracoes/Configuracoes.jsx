import React, { StrictMode, useState } from "react";

import "./Configuracoes.css";
import HeaderPrimario from "../../../components/HeaderPrimario/HeaderPrimario";
import { Link } from "react-router-dom";
import ConfigPerfil from "./RotasConfig/ConfigPerfil";

const Configuracoes = () => {
  return (
    <>
      <div className="divMasteri">
        <HeaderPrimario />
        <div className="TOTI">
          <div className="SEMITOTI">
            <div>
              <div></div>
              <div></div>
            <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuracoes;
