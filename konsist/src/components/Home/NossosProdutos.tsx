import React from "react";
import Stories from "../Stories/Stories";
import styles from "./NossosProdutos.module.css";
const NossosProdutos = () => {
  return (
    <div className={styles.produtos}>
      <h1 className={styles.tituloProd}>
        nossos produtos<span>.</span>
      </h1>
      <Stories />
    </div>
  );
};

export default NossosProdutos;
