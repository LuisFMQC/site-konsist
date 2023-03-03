import React from "react";
import Head from "./Helper/Head";
import Intro from "./Home/Intro";
import NossosProdutos from "./Home/NossosProdutos";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Home do site da empresa KonsistMed." />
      <Intro />
      <NossosProdutos />
    </section>
  );
};

export default Home;
