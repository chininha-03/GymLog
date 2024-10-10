import React, { useState } from "react";

import "./CadastroInfo.css";

import "./CadastroInfo.css";
import { ThemeProvider } from "../../../components/DarkOrLightTheme/ProvedorTema/ProvedorTema";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";

// FAZENDO OS INPUTS COM LIMITAÇÕES

function InputIdade() {
  const [idade, setIdade] = useState("");
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    const idadeNumerica = parseInt(valor);

    if (isNaN(idadeNumerica) || idadeNumerica < 0 || idadeNumerica > 120) {
      setErro("Idade inválida. Por favor, digite um número entre 0 e 120.");
    } else {
      setErro("");
      setIdade(valor);
    }
  };

  return (
    <div>
      <input
        className="inputbox-CadInfo"
        type="number"
        value={idade}
        onChange={handleChange}
        placeholder="Digite sua idade"
      />
      {erro && <p>{erro}</p>}
    </div>
  );
}

function Inputpeso() {
  const [peso, setpeso] = useState("");
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    const pesoNumerica = parseInt(valor);

    if (isNaN(pesoNumerica) || pesoNumerica < 0 || pesoNumerica > 280) {
      setErro("Por favor, digite um número entre 0 e 280.");
    } else {
      setErro("");
      setpeso(valor);
    }
  };

  return (
    <div>
      <input
        // step="0.1"
        className="inputbox-CadInfo"
        type="number"
        value={peso}
        onChange={handleChange}
        placeholder="Digite seu Peso (Kg)"
      />
      {erro && <p>{erro}</p>}
    </div>
  );
}

function InputAltura() {
  const [Altura, setAltura] = useState("");
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    const AlturaNumerica = parseInt(valor);

    if (isNaN(AlturaNumerica) || AlturaNumerica < 0 || AlturaNumerica > 280) {
      setErro("Por favor, digite um número entre 0 e 280.");
    } else {
      setErro("");
      setAltura(valor);
    }
  };

  return (
    <div>
      <input
        // step="0.1"
        className="inputbox-CadInfo"
        type="number"
        value={Altura}
        onChange={handleChange}
        placeholder="Digite seu Altura (Kg)"
      />
      {erro && <p>{erro}</p>}
    </div>
  );
}
// --------------------------------------------------------------------------- //

const CadastroInfo = () => {
  return (
    <>
      <div>
        <BasicHeader />
        <div className="divMaster-CadInfo">
          <img src="https://placehold.co/309x683" alt="" className="col-3 col-lg-3 col-md-6 col-sm-6" />
          <div className="formMaster-CadInfo">
            <form className="col-6 col-lg-6 col-md-4 col-sm-3">
              <label class="inputbox-CadInfo">
                <InputAltura />
              </label>
              <br />
              <br />
              <label class="inputbox-CadInfo">
                <Inputpeso />
              </label>
              <br />
              <br />
              <label class="inputbox-CadInfo">
                <InputIdade />
                <p id="mensagem"></p>
              </label>
              <br /> <br />
              <button className="btn-do-marcus">
                <h3>Btn marcus</h3>
              </button>
            </form>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default CadastroInfo;
