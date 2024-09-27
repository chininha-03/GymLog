import React from "react";
import "./CadastroAtv.css";

const CadastroAtv = () => {
  return (
    <>
      <div className="cadAtv-master">
        <div className="cadAtv-text">
          <h3>Qual é o seu sexo biologico?</h3>
          <h5>
            Seu sexo biologico determmina as necessecidades energeticas do seu
            corpo, <br />
            sua resposta sera utilizada para realizar o calculo da taxa
            metabolica basal{" "}
          </h5>
        </div>
        {/* <div className="cadAtv-escolhaSexo">
          <button>
            <a href="#">
              <h3>Masculino</h3>
              <i class="bi bi-gender-male"></i>
            </a>
          </button>
          <button>
            <a href="#">
              <h3>Feminino</h3>
              <i class="bi bi-gender-female"></i>
            </a>
          </button> */}

        <div className="cadAtv-escolhaSexo">
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
        </div>
      </div>
    </>
  );
};

export default CadastroAtv;
