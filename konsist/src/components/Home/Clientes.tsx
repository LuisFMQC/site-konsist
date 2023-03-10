import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Clientes.module.css'
import ibed from '../../assets/Clientes/ibed.svg'
import ibo from '../../assets/Clientes/ibo.svg'
import iped from '../../assets/Clientes/iped.svg'
import matsumoto from '../../assets/Clientes/matsumoto.svg'
import redecor from '../../assets/Clientes/redecor.svg'
import olhar from '../../assets/Clientes/olhar.svg'
import amai from '../../assets/Clientes/amai.svg'
import anamaia from '../../assets/Clientes/anamaia.svg'
import asmepro from '../../assets/Clientes/asmepro.svg'
import ceol from '../../assets/Clientes/ceol.svg'
import ceuta from '../../assets/Clientes/ceuta.svg'
import coopanest from '../../assets/Clientes/coopanest.svg'

const Clientes = () => {
  return (
    <section className={styles.clientes} id="clientes" aria-label="Nossos clientes">
      <h1 className={styles.titulo}>alguns clientes<span className={styles.ponto}>.</span></h1>

      <ul>
        <li>
          <Link className={styles.link} to='https://www.orizonbrasil.com.br/' target="_blank">
            <img src={anamaia} alt="orizon"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.linkedin.com/company/hasest/about/' target="_blank">
            <img src={amai} alt="hasest"/>
          </Link>
        </li>
        <li>
        <Link className={styles.link} to='https://aws.amazon.com/pt/' target="_blank">
            <img src={asmepro} alt="saitec"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://saitec.com.br/' target="_blank">
            <img src={ceuta} alt="saitec"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.tuotempo.com.br/' target="_blank">
            <img src={ceol} alt="tuotempo"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://skyone.solutions/' target="_blank">
            <img src={coopanest} alt="skyone"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.seat.ind.br/' target="_blank">
            <img src={ibed} alt="seat"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={ibo} alt="nexodata"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={iped} alt="nexodata"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={matsumoto} alt="nexodata"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={olhar} alt="nexodata"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={redecor} alt="nexodata"/>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Clientes