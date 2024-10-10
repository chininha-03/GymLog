import React from "react";

async function fetchData() {
  const url = "http://www.gym-log.somee.com";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

const Home = () => {
  return (
    <div>
      <div>
        <h1>Página Inicial</h1>
        <Link to="/sobre">Ir para Sobre</Link>
      </div>
    </div>
  );
};

export default Home;
