import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";


const Header = () => {

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
    <header className={styles.header} id="header">
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Konsist - Home">
          <Logo />
        </Link>
        <div className={styles.menu}>
          <Link className={currentRoute === "/produtos" ? styles.selected : styles.item} to="/produtos">
            Produtos
          </Link>
          <span className={styles.sep}></span>
          <Link className={currentRoute === "/sobre" ? styles.selected : styles.item} to="/sobre">
            Sobre
          </Link>
          <span className={styles.sep}></span>
          <Link className={currentRoute === "/contato" ? styles.selected : styles.item } to="/contato">
            Contato
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/#parceiros" onClick={() => setSetor("parceiros") }>
            Parceiros
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/#clientes" onClick={() => setSetor("clientes")}>
            Clientes
          </Link>
        </div>
        <Link
          className={styles.button}
          to="http://www.konsist.com.br/aplicativos/TeamViewerQSKonsist.exe"
        >
          <button className={styles.button}>BAIXAR ACESSO REMOTO</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
