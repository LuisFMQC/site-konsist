import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Produtos from "./components/Produtos/Produtos";
import Contato from "./components/Contato/Contato";
import Sobre from "./components/Sobre/Sobre";
import Orcamento from "./components/Orcamento/Orcamento";
import Whatsapp from "./components/Helper/Whatsapp";
import ScrollToTop from "./components/Helper/ScrollToTop";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Whatsapp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/orcamento" element={<Orcamento />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
