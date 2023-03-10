import React, { Children, useState } from 'react';
import styles from './Stories.module.css';
import Timeout from './Timeout';
import { Link } from 'react-router-dom';
import VideoPlayer from '../Helper/VideoPlayer';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const Stories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [currentThumb, setCurrentThumb] = useState(0);
  const [video, setVideo] = useState({});
  let videoRef = React.useRef(null);
  const [duration, setDuration] = useState('');
  const [idTimeout, setIdTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const stories = [
    {
      id: 1,
      src: video1,
      titulo: 'Módulo Atendimento',
      desc: 'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios variados',
        'Integração Faturamento',
      ],
      modulo: 'atendimento',
    },
    {
      id: 2,
      src: video2,
      titulo: 'Módulo Faturamento',
      desc: 'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios variados',
        'Integração Faturamento',
      ],
      modulo: 'faturamento',
    },
    {
      id: 3,
      src: video1,
      titulo: 'Módulo Financeiro',
      desc: 'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios variados',
        'Integração Faturamento',
      ],
      modulo: 'financeiro',
    },
    {
      id: 4,
      src: video1,
      titulo: 'Módulo Estoque',
      desc: 'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios variados',
        'Integração Faturamento',
      ],
      modulo: 'estoque',
    },
    {
      id: 5,
      src: video1,
      titulo: 'Módulo NFS-e',
      desc: 'Nosso módulo de atendimento conta com diversas funcionalidades essenciais para o bom funcionamento da sua clínica e sua gestão de dados indispensáveis para definição de métricas.',
      pontos: [
        'Controle de Agenda',
        'Prontuário Eletrônico',
        'Relatórios variados',
        'Integração Faturamento',
      ],
      modulo: 'nfse',
    },
  ];

  const handleNextStory = () => {
    if (currentStory === stories.length - 1) {
      setCurrentStory(0);
      video.currentTime = 0;
    } else {
      setCurrentStory(currentStory + 1);
      video.currentTime = 0;
    }
  };

  const handleBackStory = () => {
    if (currentStory === 0) {
      setCurrentStory(stories.length - 1);
      video.currentTime = 0;
    } else {
      setCurrentStory(currentStory - 1);
      video.currentTime = 0;
    }
  };

  function handleLoadMetadata() {
    setVideo(videoRef.current);
    setDuration(videoRef.current.duration);
  }

  React.useEffect(() => {
    clearTimeout(idTimeout);
    autoStory();
  }, [duration, currentStory]);

  React.useEffect(() => {
    handleLoadMetadata();
  }, []);

  function autoStory() {
    if (duration) {
      setIsLoading(false);
    }
    let newIdTimeout = setTimeout(() => {
      handleNextStory();
      setCurrentThumb(currentStory);
    }, duration * 1000);
    setIdTimeout(newIdTimeout);
  }

  return (
    <>
      <div
        className={
          isLoading ? `${styles.stories} ${styles.loading}` : styles.stories
        }
      >
        <div className={styles.storyContainer}>
          <video
            autoPlay
            loop
            muted
            ref={videoRef}
            type="video/mp4"
            src={stories[currentStory].src}
            className={styles.video}
            onLoadedMetadata={handleLoadMetadata}
          />
        </div>
        <div className={styles.navButtons}>
          <div className={styles.slideThumb}>
            {stories.map((el, index) => (
              <span key={index}>
                <span
                  key={currentStory}
                  className={`${styles.thumbItem} ${
                    index === currentStory ? `${styles.active}` : ''
                  }`}
                  style={{ animationDuration: `${duration}s` }}
                ></span>
              </span>
            ))}
          </div>
          <button onClick={handleBackStory}>Anterior</button>
          <button onClick={handleNextStory}>Próximo</button>
        </div>
      </div>
      <div className={styles.modulo}>
        {isLoading ? (
          <div></div>
        ) : (
          <>
            <div className={styles.tituloMarc}>
              <span className={styles.marcHorz}></span>
              <h1 className={styles.titulo}>{stories[currentStory].titulo}</h1>
            </div>
            <p className={styles.desc}>{stories[currentStory].desc}</p>
            <div className={styles.pontos}>
              {stories[currentStory].pontos.map((ponto, index) => (
                <div key={index} className={styles.marcador}>
                  <span className={styles.marcVert}></span>
                  <p className={styles.ponto}>{ponto}</p>
                </div>
              ))}
            </div>
            <Link
              to={`/produtos/${stories[currentStory].modulo}`}
              className={styles.saibaMaisLink}
            >
              <button className={styles.saibaMais}>SAIBA MAIS</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Stories;
