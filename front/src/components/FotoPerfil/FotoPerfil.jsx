import React, { useState } from "react";
import './FotoPerfil.css'

function FotoPerfil() {
  const [imagem, setImagem] = useState(null);

  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  return (
    <div className="fotoPerfil">
      <input type="file" onChange={handleImageChange} placeholder="Adicionar"/>
      {imagem && <img src={URL.createObjectURL(imagem)} alt="Foto de perfil" />}
    </div>
  );
}
export default FotoPerfil;
