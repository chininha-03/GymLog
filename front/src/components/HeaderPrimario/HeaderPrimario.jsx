import React, { useState, useEffect } from "react";
import "./HeaderPrimario.css"; // Importe o CSS
import minilogo from "../../assets/minilogo.png";
import imgLog from "../../assets/logoExtensa.svg";
import { Link } from "react-router-dom";
const HeaderPrimario = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      {/* Header fixo no topo (apenas em dispositivos móveis) */}
      {isMobile && (
        <div className={`top-header ${isMobileMenuOpen ? "open" : ""}`}>
          <img src={minilogo} alt="" className="loginho" />
          <div className="top-icons" onClick={toggleMobileMenu}>
            <i class="bi bi-list"></i>
          </div>
        </div>
      )}

      {/* Sidebar para telas normais */}
      {!isMobile && (
        <div className="sidebar">
          <img src={imgLog} alt="" className="logo" />
          <div className="searc input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input type="text" name="" id="" />
          </div>

          <div className="button-list">
            <div>
              <Link to={"/treinos"}>
                <button className="biti">
                  <i className="bi bi-house"></i>Treinos
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/rotinas"}>
                <button className="biti">
                  <i className="bi bi-clipboard-minus"></i>Rotinas
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/exercicio"}>
                <button className="biti">
                  <i className="bi bi-question-lg"></i>Exercícios
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/perfil"}>
                <button className="biti">
                  <i className="bi bi-person-fill"></i>Perfil
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/loja"}>
                <button className="biti">
                  <i className="bi bi-shop"></i>Loja
                </button>
              </Link>
            </div>
            <div>
              <Link to={"/configuracoes"}>
                <button className="biti">
                  <i className="bi bi-gear-fill"></i>Configurações
                </button>
              </Link>
            </div>
          </div>
          <div className="footeri">
            <div className="saidin">
              <div className="saida">
                <i
                  className="bi bi-person-circle"
                  style={{
                    fontSize: "40px",
                  }}
                ></i>
                <h2>Perfil</h2>
                <i
                  className="bi bi-box-arrow-right"
                  style={{
                    fontSize: "25px",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu que aparece no mobile */}
      {isMobileMenuOpen && (
        // <div className="mobile-menu">
        //   <div className="button-list">
        //     <div>
        //       <Link to={"/treinos"}>
        //         <button className="biti">
        //           <i className="bi bi-house"></i>Treinos
        //         </button>
        //       </Link>
        //     </div>
        //     <div>
        //       <Link to={"/rotinas"}>
        //         <button className="biti">
        //           <i className="bi bi-clipboard-minus"></i>Rotinas
        //         </button>
        //       </Link>
        //     </div>
        //     <div>
        //       <Link to={"/exercicio"}>
        //         <button className="biti">
        //           <i className="bi bi-question-lg"></i>Exercícios
        //         </button>
        //       </Link>
        //     </div>
        //     <div>
        //       <Link to={"/perfil"}>
        //         <button className="biti">
        //           <i className="bi bi-person-fill"></i>Perfil
        //         </button>
        //       </Link>
        //     </div>
        //     <div>
        //       <Link to={"/loja"}>
        //         <button className="biti">
        //           <i className="bi bi-shop"></i>Loja
        //         </button>
        //       </Link>
        //     </div>
        //     <div>
        //       <Link to={"/configuracoes"}>
        //         <button className="biti">
        //           <i className="bi bi-gear-fill"></i>Configurações
        //         </button>
        //       </Link>
        //     </div>
        //   </div>
        // </div>
        <div class="cardes">
          <ul>
            <li class="iso-pro">
              <span></span>
              <Link to={"/treino"}>
                <span></span>
                <span></span>
                <i className="bi bi-house"></i>
                {/* colocar class i em vez do clas svg */}
              </Link>
              <div class="text">Treinos</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <Link to={"/rotinas"}>
                <span></span>
                <span></span>

                <i className="bi bi-clipboard-minus"></i>
              </Link>

              <div class="text">Rotinas</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <Link to={"/exercicio"}>
                <span></span>
                <span></span>
                <i className="bi bi-question-lg"></i>
              </Link>
              <div class="text">Exercios</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <Link to={"/perfil"}>
                <span></span>
                <span></span>
                <i className="bi bi-person-fill"></i>
              </Link>

              <div class="text">Perfil</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <Link to={"/loja"}>
                <span></span>
                <span></span>
                <i className="bi bi-shop"></i>
              </Link>
              <div class="text">Loja</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <Link to={"/configuracoes"}>
                <span></span>
                <span></span>
                <i className="bi bi-gear-fill"></i>
              </Link>

              <div class="text">Configurações</div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderPrimario;
