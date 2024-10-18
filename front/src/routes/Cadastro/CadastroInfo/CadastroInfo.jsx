import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CadastroInfo.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";

// Componentes dos inputs
function InputIdade({ idade, setIdade }) {
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

function InputPeso({ peso, setPeso }) {
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    const pesoNumerico = parseFloat(valor);

    if (isNaN(pesoNumerico) || pesoNumerico < 0 || pesoNumerico > 280) {
      setErro("Por favor, digite um número entre 0 e 280.");
    } else {
      setErro("");
      setPeso(valor);
    }
  };

  return (
    <div>
      <input
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

function InputAltura({ altura, setAltura }) {
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    const alturaNumerica = parseFloat(valor);

    if (isNaN(alturaNumerica) || alturaNumerica < 0 || alturaNumerica > 280) {
      setErro("Por favor, digite um número entre 0 e 280.");
    } else {
      setErro("");
      setAltura(valor);
    }
  };

  return (
    <div>
      <input
        className="inputbox-CadInfo"
        type="number"
        value={altura}
        onChange={handleChange}
        placeholder="Digite sua Altura (cm)"
      />
      {erro && <p>{erro}</p>}
    </div>
  );
}

const CadastroInfo = () => {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const location = useLocation();
  const { user } = location.state;
  const navigate = useNavigate();

  const handleNext = () => {
    // Incrementar contUser e enviar as informações capturadas para a próxima tela
    const updatedUser = {
      ...user,
      altura: altura,
      peso: peso,
      idade: idade,
      contUser: (user.contUser || 0) + 1, // Incrementa contUser
    };

    navigate("/cadastro", {
      state: { user: updatedUser },
    });
    console.log(updatedUser);
  };

  return (
    <div>
      <div className="divMaster-CadInfo">
        <img
          src="https://placehold.co/309x683"
          alt=""
          className="col-3 col-lg-3 col-md-6 col-sm-6"
        />
        <div className="formMaster-CadInfo">
          <form className="col-6 col-lg-6 col-md-4 col-sm-3">
            <label className="inputbox-CadInfo">
              <InputAltura altura={altura} setAltura={setAltura} />
            </label>
            <br />
            <br />
            <label className="inputbox-CadInfo">
              <InputPeso peso={peso} setPeso={setPeso} />
            </label>
            <br />
            <br />
            <label className="inputbox-CadInfo">
              <InputIdade idade={idade} setIdade={setIdade} />
            </label>
            <br /> <br />
            <button className="rodela" onClick={handleNext}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroInfo;
