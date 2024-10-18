import React from "react";

import "./Treino.css";
import HeaderPrimario from "../../../components/HeaderPrimario/HeaderPrimario";
import calendario from "../../../assets/calendario.png";
import { useLocation } from "react-router-dom";
const Treino = () => {
  const location = useLocation();
  const { user } = location.state;
  // console.log(location.state
  console.log(user.photoURL);
  const exercicios = [
    {
      id: 1,

      imgTreino: "https://placehold.co/100x100",

      tituloTreino: "Agachamento (Barra)",

      musculo: "Quadríceps",
    },

    {
      id: 25,

      imgTreino: "https://placehold.co/100x100",

      tituloTreino: "Agachamento",

      musculo: "Quadríceps",
    },
  ];
  const treinos = [
    {
      id: 1,

      tituloTreino: "Quinta bíceps/tríceps",
    },

    {
      id: 25,

      tituloTreino: "Quinta bíceps/tríceps",
    },
    {
      id: 26,

      tituloTreino: "Quinta bíceps/tríceps",
    },
  ];
  // const user = localStorage.getItem("infos");

  return (
    <>
      <HeaderPrimario />
      <div className="ContDireita">
        <div className="total">
          <h1>Seus Treinos </h1>
          <div className="subtotal">
            <div className="dats">
              <div className="carddats">
                <div>
                  <h3>Quinta bíceps/tríceps</h3>
                  <h4>20/05/2023</h4>
                  <h4>21:30</h4>
                </div>
                <img src={calendario} alt="" />
              </div>
              <div className="sequen">
                <div className="seque">
                  <h2>Tempo:</h2>
                  <h3>x</h3>
                </div>
                <div className="seque">
                  <h2>Volume:</h2>
                  <h3>x</h3>
                </div>
                <div className="seque">
                  <h2>Sequencia</h2>
                  <div className="seq">
                    <i className="bi bi-fire"></i>
                    <h3>x</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                id="MAPEAMENTO"
                className="d-flex flex-column gap-6 ms-5 mt-5"
                style={{}}
              >
                <h3>Exercício:</h3>
                <div
                  style={{
                    borderBottom: "2px solid black",
                    paddingBottom: "60px",
                    height: "300px",
                    width: "100%",
                    gap: "30px",
                  }}
                >
                  {exercicios.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex  gap-4 align-items-center"
                      style={{
                        padding: "20px",
                      }}
                    >
                      <img className="" src={item.imgTreino} alt="" />

                      <div>
                        <h3>{item.tituloTreino}</h3>

                        <p>{item.musculo}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="envi">
                  <i className="bi bi-hand-thumbs-up"></i>
                  <i className="bi bi-share"></i>
                  <i className="bi bi-chat"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conts">
          <div className="pps">
            <div className="container-mini">
              <img
                className="ftperfil"
                src={user.photoURL}
                alt={user.displayName}
              />
              <h3 className="text-center fs-5">{user.displayName}</h3>
            </div>
            <div className="container-menor">
              <h2>Seus treinos</h2>
              {treinos.map((item) => (
                <div
                  key={item.id}
                  className="d-flex rounded-pill border border-3 border-warning-subtle   align-items-center"
                  style={{
                    padding: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <img className="" src={item.imgTreino} alt="" />

                  <div>
                    <h3>{item.tituloTreino}</h3>

                    {/* <p>{item.musculo}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Treino;
