import React from 'react'
import Head from '../Helper/Head'
import Titulo from '../Helper/Titulo'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Head title="Sobre" description="Um pouco da história da KonsistMed." />
      <Titulo subTitulo="um pouco da nossa história" titulo="sobre a konsist" />
      <section className={styles.sobre}>
        <div className={styles.item}>
          <div className={styles.titulo}>
            <span></span>
            <h2>A Konsist</h2>
          </div>
          <p>Atuamos há mais de 10 anos na área de tecnologia da informação em saúde, desenvolvendo sistemas assistenciais para gerenciamento de clínicas médicas de qualquer especialidade.</p>
        </div>
        <div className={styles.item}>
          <div className={styles.titulo}>
            <span></span>
            <h2>Equipe</h2>
          </div>
          <p>A Konsist conta com uma equipe completa de profissionais multidisciplinares, capacitados e experientes para gerar soluções em todos os aspectos que envolvem a operação de um sistema de saúde.
Possuímos equipe técnica multidisciplinar composta de: especialistas em gestão de sistemas de informação, administradores, analistas de sistemas e programadores. Os sócios são técnicos especializados em gestão de sistemas de informação com experiência na gestão em saúde desde 1990, tendo administrado programas de saúde, abrangendo mais de 120.000 vidas assistidas nos diversos modelos de atenção à saúde formulados e ou operacionalizados.</p>
        </div>
        <div className={styles.item}>
          <div className={styles.titulo}>
            <span></span>
            <h2>Processo</h2>
          </div>
          <p>A Konsist busca por meio da inovação gerencial, tecnológica e do relacionamento com seus clientes, otimizar custos reduzindo os gastos das empresas e aumentando sua eficiência, em um permanente exercício de parceria.</p>
        </div>
      </section>
    </>
  )
}

export default Sobre