import { useState } from "react";
import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
// import imd from "../assets/img/page1.jpg"
const Home = () => {
  return (
    <div>
      <div className="jsdfakg ">
        <div className="bw">
          {" "}
          <h1>B&W</h1>{" "}
        </div>
        <div className="textmeio">
          {" "}
          <h2>Esteja<br/> preparado <br/>para o futuro.</h2>
          <Link to={"/intro"}>
            {" "}
            <button className="btn btn-outline-secondary">saiba mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
