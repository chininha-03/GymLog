import React, { useState } from "react";
import "./CadastroSexo.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";

//

function BotaoConfirmar() {
  const [isConfirmButtonVisible, setIsConfirmButtonVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    setIsConfirmButtonVisible(true);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    console.log(`Confirmed option: ${selectedOption}`);
  };

  return (
    <>
      <div className="divBtn-Acionar">
        <button
          className="UseBtn"
          onClick={() => handleButtonClick("Sedentário")}
        >
          <span>Sedentário</span>
        </button>
        <button
          className="UseBtn"
          onClick={() => handleButtonClick("Pouco Ativo")}
        >
          <span>Pouco Ativo</span>
        </button>
        <button className="UseBtn" onClick={() => handleButtonClick("Ativo")}>
          <span>Ativo</span>
        </button>
      </div>
      {isConfirmButtonVisible && (
        <>
          <p className="textBtn-CadSex">
            Você selecionou: <strong>{selectedOption}</strong>
          </p>
          <br />
          <Link to={"/cadNome"}>
            <button
              className="btn-confirmarCadSex btnConfirmacao-Intro"
              onClick={handleConfirm}
            >
              <h7>Confirmar</h7>
            </button>
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
