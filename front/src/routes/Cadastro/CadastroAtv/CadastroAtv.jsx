import React, { useState } from "react";
import "./CadastroAtv.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";

// import CadSexo from '../CadastroSexo/CadastroSexo.jsx'
// import CadastroSexo from "../CadastroSexo/CadastroSexo.jsx";

const CadastroAtv = () => {
 

  return (
    <>
      <BasicHeader />
 
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
            <button className="sexMasc">
              <Link to={"/cadAtiv"}>
                <i className="bi bi-gender-male"></i>
                <h3>Masculino</h3>
              </Link>
            </button>
          </div>
          <div className="sex rotate-vert-center-2">
            <button className="sexFem">
              <Link to={"/cadAtiv"}>
                <i class="bi bi-gender-female"></i>
                <h3>Feminino</h3>
              </Link>
            </button>
          </div>
        </div>

        {/* <div className="cadAtv-escolhaSexo">
          <a href="#">
          <div class="card">
              <div class="card-overlay"></div>
              <div class="card-inner">
              <i class="bi bi-gender-male"></i>
              <h4>Masculino</h4>
              </div>
              </div>
              </a>
              
              <a href="#">
              <div class="card">
              <div class="card-overlay"></div>
              <div class="card-inner">
              <i class="bi bi-gender-female"></i>
              <h4>Feminino</h4>
              </div>
              </div>
              </a>
            </div> */}
          </Link>
        </>
      )}
    </>
  );
}

const CadastroSexo = () => {
  return (
    <>
      <BasicHeader />
      <div className="divMasterCadSex">
        <h3>Qual é o seu nível de Atividade?</h3>
        <BotaoConfirmar />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CadastroSexo;
