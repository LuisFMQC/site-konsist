import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Konsist - Home">
          <Logo />
        </Link>
        <div className={styles.menu}>
          <Link className={styles.item} to="/produtos">
            Produtos
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/sobre">
            Sobre
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/contato">
            Contato
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/parceiros">
            Parceiros
          </Link>
          <span className={styles.sep}></span>
          <Link className={styles.item} to="/clientes">
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
