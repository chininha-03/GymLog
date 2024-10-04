import React from "react";
import "./Error.css";

import { useLocation, useNavigate } from "react-router-dom";

// document.addEventListener("mousemove", (e) => {
//   const illustration = document.querySelector(".error-illustration");
//   const rect = illustration.getBoundingClientRect();
//   const centerX = rect.left + rect.width / 2;
//   const centerY = rect.top + rect.height / 2;

//   const deltaX = (e.clientX - centerX) / 20;
//   const deltaY = (e.clientY - centerY) / 20;

//   illustration.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
// });

// const errorSign = document.querySelector(".error-sign");
// let hue = 0;

// function animateErrorSign() {
//   hue = (hue + 1) % 360;
//   errorSign.style.color = `hsl(${hue}, 100%, 50%)`;
//   requestAnimationFrame(animateErrorSign);
// }

// animateErrorSign();

function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="divMaster">
      <div class="error-container">
        <div class="error-illustration">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pc-display-horizontal computer"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25" />
          </svg>
          <div class="error-sign">!</div>
        </div>
        <h1 className="text-error-h1">Ops! Algo deu errado</h1>
        <p className="text-error-p">
          Desculpe, mas parece que encontramos um problema. Nossa equipe de
          tecnologia já foi notificada e está trabalhando para resolver isso o
          mais rápido possível.
        </p>
        <button onClick={() => navigate(-1)} class="btn-error">
          Voltar à página anterior
        </button>
        <div class="error-code">Erro 500</div>
      </div>
      {/* <button onClick={() => navigate(-1)} class="btn">Voltar à página inicial</button> */}
    </div>
  );
}
export default ErrorPage;
