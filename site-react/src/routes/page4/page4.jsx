import "./page4.css";
import logo from "/img/logo.png";
import { Link } from "react-router-dom";

const Page4 = () => {
  return (
    <>
      {" "}
      <div className="fundinho">
        <div className="log2">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="escrita">
          <h1>
            No geral, esta aplicação tem o potencial de revolucionar a forma
            como as pessoas abordam o condicionamento físico e melhorar o seu
            bem-estar geral.
          </h1>
        </div>
        <div className="mud">
       <Link to={"infoAi"}><div className="left"><i class="bi bi-chevron-left"></i></div> </Link>  
       <Link to={"saibamais"}> <div className="right"><i class="bi bi-chevron-right"></i></div></Link> 
        </div>
      </div>
    </>
  );
};

export default Page4;
