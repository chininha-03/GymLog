import React, { useRef, useState } from "react";
import "./FotoPerfil.css";

const PhotoCircle = () => {
  const [photo, setPhoto] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
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
        />
        <button onClick={handleButtonClick} className="upload-btn">
          Escolher Foto
        </button>
      </div>
    </div>
  );
};

// const PhotoCircle = () => {
//   const [photo, setPhoto] = useState(null);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();   

//       reader.onload = (e) => {
//         setPhoto(e.target.result);   

//       };
//       reader.readAsDataURL(file);
//     }

//     // Limpa o input após a seleção do arquivo
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   return (
//     <div className="photo-circle-container">
//       {photo ? (
//         <img src={photo} alt="Foto de perfil" className="profile-photo" />
//       ) : (
//         <label htmlFor="photo-input" className="photo-circle-label">
//           <span>Escolher foto</span>
//           <input
//             type="file"
//             id="photo-input"
//             accept="image/*"
//             onChange={handleFileChange}
//             ref={fileInputRef}

//           />
//         </label>
//       )}
//     </div>
//   );
// };

function FotoPerfil() {
  // const [imagem, setImagem] = useState(null);

  // const handleImageChange = (event) => {
  //   setImagem(event.target.files[0]);
  // };

  return (
    <div>
      {/* <input type="file" onChange={handleImageChange} placeholder="Adic" />
      {imagem && <img src={URL.createObjectURL(imagem)} alt="Foto de perfil" />} */}
      <PhotoCircle />
    </div>
  );
}
export default FotoPerfil;
