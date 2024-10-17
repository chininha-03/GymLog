import React, { useState } from "react";

import "./Perfil.css";
import FotoPerfil from "../../../components/FotoPerfil/FotoPerfil.jsx";
import HeaderPrimario from "../../../components/HeaderPrimario/HeaderPrimario.jsx";

// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: "dayGridMonth",
//     headerToolbar: {
//       left: "prev,next today",
//       center: "title",
//       right: "dayGridMonth,timeGridWeek,timeGridDay",
//     },
//     events: [
//       {
//         title: "Treino de Força",
//         start: "2023-05-15T10:00:00",
//         end: "2023-05-15T11:30:00",
//       },
//       {
//         title: "Cardio",
//         start: "2023-05-17T18:00:00",
//         end: "2023-05-17T19:00:00",
//       },
//       {
//         title: "Yoga",
//         start: "2023-05-19T08:00:00",
//         end: "2023-05-19T09:00:00",
//       },
//     ],
//   });
//   calendar.render();
// });

function ImagemPaisagem() {
  const [imagemPaisagem, setImagemPaisagem] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // Verificação básica do tipo de arquivo
      if (file.type.startsWith("image/")) {
        setImagemPaisagem(e.target.result);
      } else {
        // alert("Por favor, selecione um arquivo de imagem.");
      }
    };

    reader.onerror = (error) => {
      console.error("Erro ao ler o arquivo:", error);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="position-absolute">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: imagemPaisagem ? "none" : "block" }}
      />
      {imagemPaisagem && (
        <img
          src={
            imagemPaisagem ||
            "https://via.placeholder.com/300x300.png?text=Sua+Foto+Aqui"
          }
          alt="Foto de paisagem"
          style={{ height: "250px" }}
        />
      )}
    </div>
  );
}

const Perfil = () => {
  return (
    <>
      <div className="divMaster">
        <HeaderPrimario />
        <div className="container">
          <div className="profile-header">
            <div className="fotosPerfilAndPaisagem position-relative ">
              <ImagemPaisagem />
              <FotoPerfil />
            </div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Paulo Joca</h1>
            <p className="profile-bio">
              Apaixonado por fitness e vida saudável. Treinador pessoal e
              entusiasta de CrossFit.
            </p>
          </div>
          <div className="content-area">
            <div className="posts">
              <h2>Postagens Recentes</h2>
              <div className="post">
                <div className="post-header">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Foto de perfil de João Silva"
                    className="post-avatar"
                  />
                  <div className="post-info">
                    <strong>João Silva</strong> • 2h atrás
                  </div>
                </div>
                <p className="post-content">
                  Hoje foi dia de bater recordes pessoais! Superação é o nome do
                  jogo. 💪🏋️‍♂️ #FitnessMotivation #PersonalTrainer
                </p>
              </div>
              <div className="post">
                <div className="post-header">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Foto de perfil de João Silva"
                    className="post-avatar"
                  />
                  <div className="post-info">
                    <strong>João Silva</strong> • 1d atrás
                  </div>
                </div>
                <p className="post-content">
                  Novo vídeo no canal! Confira 5 exercícios essenciais para
                  fortalecer o core. Link na bio! 🎥👇 #WorkoutTips
                  #CoreStrength
                </p>
              </div>
            </div>
            <div className="calendar">
              <h2>Calendário de Treinos</h2>
              <div id="calendar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
