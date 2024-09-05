import "./page2.css";
import logo from "../../../public/img/logo.png";
import { Link } from "react-router-dom";
const Pege2 = () => {
  return (
    <>
      {" "}
      {/*       
      <div className="conti">
        <div className="row ">
          <div className="d-none d-lg-block col-lg-7 ">
            <div className="text">
              <h2>
                Transforme cada
                <br /> gota de suor em
                <br /> progresso. Vá
                <br /> além na academia <br />
                com o Gym Log e <br />
                alcance seu
                <br /> melhor a cada
                <br /> treino
              </h2>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg ">
            <div className="img">
              <img src="https://placehold.co/487x585" alt="" />
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-1">
            <div className="log">
              <img src={logo} alt="" />
              <Link to={"/infoAi"}>
                <button className="btn">
                  {" "}
                  <i class="bi bi-chevron-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row  conti">
        <div className="d-none d-lg-block col-lg-7 text ">
          <h2>
            Transforme cada
            <br /> gota de suor em
            <br /> progresso. Vá
            <br /> além na academia <br />
            com o Gym Log e <br />
            alcance seu
            <br /> melhor a cada
            <br /> treino
          </h2>
        </div>

        <div className="d-none d-lg-block col-lg">
          <img src="https://placehold.co/487x585" alt="" />
        </div>
        <div className="d-none d-lg-block col-lg-1 ">
          <img className="imgh" src={logo} alt="" />
          
        </div>
        <div className="card-footer kk">
       
        <Link to={"/"}>
                <button className="btn">
                  {" "}
                  <i class="bi bi-chevron-left"></i>
                </button>
              </Link>
       
       
        <Link to={"/infoAi"}>
                <button className="btn">
                  {" "}
                  <i class="bi bi-chevron-right"></i>
                </button>
              </Link>
        </div>

        <div className="d-lg-none d-lg-block col-12 khj">
        <h2>
            Transforme cada
            <br /> gota de suor em
            <br /> progresso. Vá
            <br /> além na academia <br />
            com o Gym Log e <br />
            alcance seu
            <br /> melhor a cada
            <br /> treino
          </h2>
        </div>
      </div>
    </>
  );
};

export default Pege2;
