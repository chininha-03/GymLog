import React from "react";
import "./CadastroAtv.css";

const CadastroAtv = () => {
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
            <button className="sexMasc">
              <a href="#">
                <i  class="bi bi-gender-male"></i>
                <h3>Masculino</h3>
              </a>
            </button>
          </div>
          <div className="sex rotate-vert-center-2">
            <button className="sexFem">
              <a href="#">
                <i class="bi bi-gender-female"></i>
                <h3>Feminino</h3>
              </a>
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
      </div>
    </>
  );
};

export default CadastroAtv;
