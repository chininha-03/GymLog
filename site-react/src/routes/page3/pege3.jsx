import React from "react";
import "./pege3.css";

import logo from "../../assets/logo.svg";
import mulherAcademia from "../../assets/mulherAcademia.jpg";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <>
      <div className="row content">
        <div className="d-none d-lg-block col-lg-4  ">
          <img
            className="iii"
            src={mulherAcademia}
            alt="Imagem de mulher fazendo academia"
          />
        </div>

        <div className="d-none d-lg-block col-lg-3 conteudoText">
          <h6>
            Nosso aplicativo aborda o <br />
            desafio de manter rotinas de <br />
            treino consistentes, oferecendo <br />
            uma plataforma fácil de usar <br />
            com personalização baseada em IA. <br />
            Ele fornece um conjunto abrangente de <br />
            recursos para apoiar os usuários <br />
            em suas jornadas de condicionamento <br />
            físico, incluindo consultas com <br /> especialistas e diversas
            calculadoras de <br />
            condicionamento físico.
          </h6>
        </div>

        <div className="d-none d-lg-block col-lg-4 conteudoText">
          <h4>
            O aplicativo Gym Log se destaca pela fusão <br /> inovadora de
            tecnologia <br />
            avançada e expertise em fitness,
            <br /> apoiado por um modelo de negócios <br />
            sustentável através de compras <br /> integradas e parcerias com{" "}
            <br /> 
            profissionais da área.
          </h4>
        </div>
        <div className="d-none d-lg-block col-lg-1 gap-">
          <img className="imgh" src={logo} alt="" />
        </div>
        <div className="card-footer d-lg-flex  d-none  kkk">
          <Link to={"/intro"}>
            <button className="btn">
              {" "}
              <i class="bi bi-chevron-left"></i>
            </button>
          </Link>

          <Link to={"/info"}>
            <button className="btn">
              {" "}
              <i class="bi bi-chevron-right"></i>
            </button>
          </Link>
        </div>
        <div className="d-lg-none d-lg-block col-12 fundinhi ">
          <h4>
            O aplicativo Gym Log se destaca pela fusão <br /> inovadora de
            tecnologia <br />
            avançada e expertise em fitness,
            <br /> apoiado por um modelo de negócios <br />
            sustentável através de compras <br /> integradas e parcerias com{" "}
            <br />
            profissionais da área.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Page3;
