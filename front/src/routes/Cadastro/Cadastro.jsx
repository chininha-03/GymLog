import React, { useState } from "react";
import BasicHeader from "../../components/HeaderBasic/BasicHeader";
import Footer from "../../components/Footer/Footer";
import CadastroAtv from "./CadastroAtv/CadastroAtv";
import CadastroSexo from "./CadastroSexo/CadastroSexo";
import CadastroInfo from "./CadastroInfo/CadastroInfo";
import CadastroNome from "./CadastroNome/CadastroNome";
import { useLocation } from "react-router-dom";

const Cadastro = () => {
  const [contCad, sertContCad] = useState(null);
  const location = useLocation();
  const { user } = location.state;
  console.log(user);

  return (
    <>
      <BasicHeader />
      {user.contUser == 1 && <CadastroAtv />}
      {user.contUser == 2 && <CadastroSexo />}
      {user.contUser == 3 && <CadastroInfo />}
      {user.contUser == 4 && <CadastroNome />}

      <Footer />
    </>
  );
};

export default Cadastro;
