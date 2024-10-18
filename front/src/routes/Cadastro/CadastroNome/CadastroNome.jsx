import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CadastroNome.css";
import BasicHeader from "../../../components/HeaderBasic/BasicHeader";
import Footer from "../../../components/Footer/Footer";
import Buton1 from "../../../components/buton1/buton1";

const CadastroNome = () => {
  const [displayName, setDisplayName] = useState("");
  const [photo, setPhoto] = useState(null); // Estado para armazenar a foto
  const fileInputRef = useRef(null); // Referência para o input de arquivo
  const location = useLocation();
  const { user } = location.state;
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result); // Atualiza o estado com a URL da imagem
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Simula o clique no input de arquivo
  };

  const handleNext = () => {
    // Navegar para a página /treino com as informações atualizadas
    const updatedUser = {
      ...user,
      displayName: displayName,
      photoURL: photo,
      contUser: (user.contUser || 0) + 1,
    };

    navigate("/treino", {
      state: { user: updatedUser },
    });

    console.log(updatedUser);
  };

  return (
    <>
      <div className="cadNome-master">
        <div className="cardNameFt">
          <div className="photo-container">
            <img
              src={
                photo ||
                "https://via.placeholder.com/300x300.png?text=Sua+Foto+Aqui"
              }
              alt="Foto do usuário"
              className="user-photo"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="fileInput"
              style={{ display: "none" }} // Oculta o input de arquivo
            />
            <button onClick={handleButtonClick} className="upload-btn">
              Escolher Foto
            </button>
          </div>
          <h1>Nome:</h1>
          <div className="cardinpt">
            <input
              type="text"
              placeholder="Nome"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="cardbtnnn">
            <button className="rodela" onClick={handleNext}>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroNome;
