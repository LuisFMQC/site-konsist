import React from "react";
import Head from "./Helper/Head";
import Clientes from "./Home/Clientes";
import Intro from "./Home/Intro";
import NossosProdutos from "./Home/NossosProdutos";
import Parceiros from "./Home/Parceiros";
import Resumo from "./Home/Resumo";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site da empresa KonsistMed." />
      <Intro />
      <NossosProdutos />
      <Parceiros/>
      <Resumo/>
      <Clientes/>
    </section>
  );
};

export default Home;
