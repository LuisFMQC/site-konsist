import React from "react";
import { Link } from "react-router-dom";
import styles from "./Intro.module.css";
import intro from "../../assets/intro.jpg";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.infoIntro}>
        <h1 className={styles.tituloIntro}>
          Saúde para o seu negócio<span className={styles.ponto}>.</span>
        </h1>
        <p className={styles.descIntro}>
          Atuamos{" "}
          <span className={styles.destaqueIntro}>há mais de 10 anos</span> na
          área de tecnologia da informação em saúde,{" "}
          <span className={styles.destaqueIntro}>desenvolvendo sistemas</span>{" "}
          para gerenciamento de{" "}
          <span className={styles.destaqueIntro}> clínicas médicas</span> de
          qualquer especialidade.
        </p>
        <Link to="/orcamento">
          <button className={styles.orcButton}>SOLICITE UM ORÇAMENTO</button>
        </Link>
      </div>
      <img src={intro} alt="intro" className={styles.imgIntro} />
    </div>
  );
};

export default Intro;
