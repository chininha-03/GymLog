import React, { useState } from "react";

import "./Perfil.css";
import FotoPerfil from "../../../components/FotoPerfil/FotoPerfil.jsx";

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



const Perfil = () => {
  return (
    <>
      <div class="container">
        <div class="profile-header">
      <FotoPerfil/>
          
          <img
            src="profile-athlete.jpg"
            alt="Foto de perfil de um atleta sorrindo, vestindo roupas de treino"
            class="profile-photo"
          />
        </div>
        <div class="profile-info">
          <h1 class="profile-name">João Silva</h1>
          <p class="profile-bio">
            Apaixonado por fitness e vida saudável. Treinador pessoal e
            entusiasta de CrossFit.
          </p>
        </div>
        <div class="content-area">
          <div class="posts">
            <h2>Postagens Recentes</h2>
            <div class="post">
              <div class="post-header">
                <img
                  src="profile-athlete.jpg"
                  alt="Foto de perfil de João Silva"
                  class="post-avatar"
                />
                <div class="post-info">
                  <strong>João Silva</strong> • 2h atrás
                </div>
              </div>
              <p class="post-content">
                Hoje foi dia de bater recordes pessoais! Superação é o nome do
                jogo. 💪🏋️‍♂️ #FitnessMotivation #PersonalTrainer
              </p>
            </div>
            <div class="post">
              <div class="post-header">
                <img
                  src="profile-athlete.jpg"
                  alt="Foto de perfil de João Silva"
                  class="post-avatar"
                />
                <div class="post-info">
                  <strong>João Silva</strong> • 1d atrás
                </div>
              </div>
              <p class="post-content">
                Novo vídeo no canal! Confira 5 exercícios essenciais para
                fortalecer o core. Link na bio! 🎥👇 #WorkoutTips #CoreStrength
              </p>
            </div>
          </div>
          <div class="calendar">
            <h2>Calendário de Treinos</h2>
            <div id="calendar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
