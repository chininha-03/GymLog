import React, { useState } from "react";
import "./CadastroNome.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";
import Buton1 from "../../../components/buton1/buton1";

const CadastroNome = () => {
  return (
    <>
      <BasicHeader />
      <div className="cadNome-master">
        <div className="cardNameFt">
          <div className="roda-Fto">
            <i className="bi bi-person-add"></i>
          </div>
          <h1>Nome:</h1>
          <div className="cardinpt">
            <input type="text" placeholder="Nome" />
          </div>
          <div className="cardbtnnn">
            <Buton1 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CadastroNome;