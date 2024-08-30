import "./page2.css";
import logo from "../../../public/img/logo.png"
import { Link } from "react-router-dom";
const Pege2 = () => {
  return (
    <>
      {" "}
      <div className="conti">
        <div  className="text">
          <h2>Transforme cada<br/> gota de suor em<br/> progresso. Vá<br/> além na academia <br/>com o Gym Log e <br/>alcance seu<br/> melhor a cada<br/> treino</h2>
        </div>
        <div  className="img">
          <img src="https://placehold.co/487x585" alt="" />
        </div>
        <div className="log">
          <img src={logo} alt="" />
      <Link to={"/infoAi"}><button className="btn">   <i class="bi bi-chevron-right"></i></button></Link>
        </div>
      </div>
    </>
  );
};

export default Pege2;
