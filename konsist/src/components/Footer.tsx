import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logofooter } from "../assets/logofooter.svg";
import { ReactComponent as Fone } from "../assets/fone.svg";
import { ReactComponent as Whatsapp } from "../assets/whatsapp.svg";
import { ReactComponent as Whatsappmini } from "../assets/whatsappmini.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Endereco } from "../assets/endereco.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

    const [currentRoute, setCurrentRoute] = React.useState("");
    const [setor, setSetor] = React.useState("");
    const location = useLocation();

    React.useEffect(() => {
      setCurrentRoute(location.pathname);
      if (setor === 'parceiros' || setor === 'clientes') {
        scrollToElement(setor)
        }
      }
      , [location, setor]);

    function scrollToElement(id: string) {
      if(location.pathname !== '/')
        setSetor(id);
      else if(location.pathname === "/"){
        setSetor('');
        const element = document.getElementById(id);
        if (element){
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      }

  return (
    <footer className={styles.footer}>
      <Link
        className={styles.logofooter}
        to="/"
        onClick={() => scrollToElement("header")}
        aria-label="Konsist - Home - Footer"
      >
        <Logofooter />
      </Link>
      <div className={styles.contatoDiv}>
        <h2 className={styles.informacoes}>CONTATO</h2>
        <div className={styles.dadosContato}>
          <div className={styles.contatoIconsDiv}>
            <Fone className={styles.contatoIcons} id="fone" />
            <Whatsappmini className={styles.contatoIcons} id="whatsapp" />
            <Email className={styles.contatoIcons} id="email" />
            <Endereco className={styles.endereco} />
          </div>
          <p className={styles.itemContato}>
            (61)3321-3833 <br />
            (61)98592-7845 (somente Whatsapp) <br /> suporte@konsist.com.br{" "}
            <br /> <br />
            STN Conjunto M Entrada B Sala 213 <br /> Centro Cl??nico Vital Brazil
            - Asa Norte <br /> Bras??lia - DF
          </p>
        </div>
        <div className={styles.media}>
          <Link
            className={styles.itemMedia}
            to="https://www.facebook.com/konsistsistemas"
            target={"_blank"}
          >
            <Facebook />
          </Link>
          <Link
            className={styles.itemMedia}
            to="https://www.instagram.com/konsistsistemas/"
            target={"_blank"}
          >
            <Instagram />
          </Link>
          <Link
            className={styles.itemMedia}
            to="https://web.whatsapp.com/send?phone=5561985927845&text=Ol??,%20gostaria%20de%20solicitar%20um%20or??amento%20das%20aplica????es%20KonsistMed%2E"
            target={"_blank"}
          >
            <Whatsapp />
          </Link>
        </div>
      </div>
      <div className={styles.infoDiv}>
        <h2 className={styles.informacoes}>INFORMA????ES</h2>
        <nav className={styles.nav}>
          <Link className={currentRoute === "/produtos" ? styles.selected : styles.itemInfo} to="/produtos">
            Produtos
          </Link>
          <Link className={currentRoute === "/sobre" ? styles.selected : styles.itemInfo} to="/sobre">
            Sobre
          </Link>
          <Link className={currentRoute === "/contato" ? styles.selected : styles.itemInfo} to="/contato">
            Contato
          </Link>
          <Link className={styles.itemInfo} to="/#parceiros" onClick={() => setSetor("parceiros") }>
            Parceiros
          </Link>
          <Link className={styles.itemInfo} to="/#clientes" onClick={() => setSetor("clientes") }>
            Clientes
          </Link>
        </nav>
      </div>
      <p className={styles.copyright}>
        Konsist Servi??os Empresariais ?? Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
