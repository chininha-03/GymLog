import React, { StrictMode, useState } from "react";

import "./Configuracoes.css";
import HeaderPrimario from "../../../components/HeaderPrimario/HeaderPrimario";
import { Link } from "react-router-dom";
import ConfigPerfil from "./RotasConfig/ConfigPerfil";

const Configuracoes = () => {
  return (
    <>
      <div className="d-flex">
        <HeaderPrimario />
        <div className="container row border border-secondary d-flex">
          <div className="col-12 d-flex">
            <nav>
              <ul className="border border-white p-0 links-config">
                <li>
                  <Link className="link-direct fw-bolder" to="/confPerfil">
                    Perfil <i className="bi bi-caret-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link-direct fw-bolder">
                    Alerta <i className="bi bi-caret-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link-direct fw-bolder">
                    Privacidade <i className="bi bi-caret-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link-direct fw-bolder">
                    Idioma <i className="bi bi-caret-right"></i>
                  </Link>
                </li>
                <li>
                  <Link className="link-direct fw-bolder">
                    Política<i className="bi bi-caret-right"></i>
                  </Link>
                </li>
                <ul className="d-flex flex-column border-top border-white idio-config text-start m-2">
                  <l1>
                    <h4>Preferências</h4>
                  </l1>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      Peso
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Escolher</option>
                      <option value="1">Kg</option>
                      <option value="2">lbs</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      for="inputGroupSelect01"
                    >
                      Distância
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Escolher</option>
                      <option value="1">Km</option>
                      <option value="2">Mi</option>
                    </select>
                  </div>
                </ul>
              </ul>
            </nav>
            <ConfigPerfil/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuracoes;
