import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footerMaster">
      <div className="primeiraLista">
        <ul>
          <h2>Consulta LTDA</h2>

          <h3>Fale conosco</h3>
          <li className="mb-3">
            <a href="#" className="letraCor">
              <button className="btn btn-outline-secondary w-100 ">
                <i class="bi bi-instagram p-2"></i>
                INSTAGRAM
              </button>
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="letraCor">
              <button className="btn btn-outline-secondary w-100 ">
                <i class="bi bi-twitter-x p-2 center"></i>
                TWITTER
              </button>
            </a>
          </li>
          <li className="mb-3 ">
            <a href="#" className="letraCor">
              <button className="btn btn-outline-secondary w-100 ">
                <i class="bi bi-facebook p-2 "></i>
                FACEBOOK
              </button>
            </a>
          </li>
        </ul>

        <ul>
          <h3>Escritórios</h3>
          <hr />
          <li>Rua Qualquer, 123</li>
          <li>Rua Qualquer, 123</li>
        </ul>
      </div>
      <div className="segundaLista">
        <img src={logo} alt="Imagem de logo GymLog" className="logo" />
        <ul>
          <h2>Construindo os negócios de amanhã.</h2>
          <li>
            <p>E-mail: emailtest@test.com</p>
          </li>
          <hr />
          <li>
            <a href="#">Termos de Serviço</a>
          </li>
          <li>
            <a href="#">Política e Privacidade</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
