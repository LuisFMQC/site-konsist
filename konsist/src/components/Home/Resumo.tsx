import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Resumo.module.css'
import { ReactComponent as Sup} from '../../assets/sup.svg'
import { ReactComponent as Imp} from '../../assets/imp.svg'
import resumo from '../../assets/resumo.jpg'

const Resumo = () => {
  return (
    <div className={styles.resumo}>
      <div className={styles.texto}>
        <h2 className={styles.subTitulo}>APLICAÇÕES COMPLETAS</h2>
        <h1 className={styles.titulo}>apps robutos e de uso muito intuitivo<span>.</span></h1>
        <p className={styles.desc}>Nossas aplicações tem as melhores e mais completas funcionalidades de controle que o mercado pode oferecer devido ao nosso tempo de mercado e ao feedback dos nossos clientes, que sempre utilizamos para melhorar nossos sistemas.</p>
        <Link to="/produtos" className={styles.link}>MAIS SOBRE AS APLICAÇÕES <span className={styles.sub}></span></Link>
        <div className={styles.dif}>
          <div className={styles.dif1}>
            <div className={styles.tituloDif1}>
              <Sup/>
              <h3>Suporte</h3>
            </div>
            <p>Nossa equipe de suporte atende de Seg. à Sex. de 08h às 18h, por telefone, Whatsapp e e-mail. Teremos prazer em auxiliá-lo.</p>
          </div>
          <div className={styles.dif2}>
            <div className={styles.tituloDif2}>
              <Imp/>
              <h3>Implantação Presencial</h3>
            </div>
            <p>A sua empresa terá todo o nosso apoio no pontapé inicial, com treinamentos presenciais e configurações iniciais.</p>
          </div>
        </div>
      </div>
      <img src={resumo} alt="Resumo" className={styles.imgResumo} />
    </div>
  )
}

export default Resumo