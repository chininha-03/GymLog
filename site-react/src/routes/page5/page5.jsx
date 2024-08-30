import "./page5.css";
import logo from "../../../public/img/logo.png";
import Footer from "../../components/Footer/footer";


const Page5 = () => {
  return (
    <>
      {" "}
      <div className="cont">
        <div className="in">
          <img src="https://placehold.co/478x478" alt="" />
          <div className="info">
            <h2>Vamos com a<br/>B&W!</h2>
            <h3>Revolucionar o seu ambiente de<br/> &nbsp treino!</h3>
            <button>Baixar App</button>
            <button>Visitar o App Web</button>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
         
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page5;
