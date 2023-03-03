import React, { useState } from "react";
import styles from "./Stories.module.css";
import intro from "../../assets/intro.jpg";

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      src: intro,
      titulo: "Módulo Atendimento",
      desc: "Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.",
      pontos: [
        "Controle de Agenda",
        "Prontuário Eletrônico",
        "Relatórios variados",
        "Integração Faturamento",
      ],
    },
  ];

  const handleNextStory = () => {
    if (currentStory === stories.length - 1) {
      setCurrentStory(0);
    } else {
      setCurrentStory(currentStory + 1);
    }
  };

  const handleBackStory = () => {
    if (currentStory === 0) {
      setCurrentStory(stories.length - 1);
    } else {
      setCurrentStory(currentStory - 1);
    }
  };

  function autoStory() {
    setTimeout(() => {
      handleNextStory();
    }, 3000);
  }

  autoStory();

  return (
    <>
      <div className={styles.stories}>
        <div className={styles.storyContainer}>
          <img src={stories[currentStory].src} alt="Story" />
        </div>
        <div className={styles.navButtons}>
          <button onClick={handleBackStory}>Anterior</button>
          <button onClick={handleNextStory}>Próximo</button>
        </div>
      </div>
      <div className={styles.modulo}>
        <h1 className={styles.titulo}>{stories[currentStory].titulo}</h1>
        <p className={styles.desc}>{stories[currentStory].desc}</p>
        <div className={styles.pontos}>
          <p className={styles.ponto}>{stories[currentStory].pontos[0]}</p>
          <p className={styles.ponto}>{stories[currentStory].pontos[1]}</p>
          <p className={styles.ponto}>{stories[currentStory].pontos[2]}</p>
          <p className={styles.ponto}>{stories[currentStory].pontos[3]}</p>
        </div>
      </div>
    </>
  );
};

export default Stories;
