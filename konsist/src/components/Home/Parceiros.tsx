import React from 'react'
import styles from './Parceiros.module.css'
import orizon from '../../assets/orizon.png'
import hasest from '../../assets/hasest.png'
import tuotempo from '../../assets/tuotempo.png'
import saitec from '../../assets/saitec.png'
import skyone from '../../assets/skyone.png'
import seat from '../../assets/seat.png'
import nexodata from '../../assets/nexodata.png'
import aws from '../../assets/aws.svg'
import { Link } from 'react-router-dom'

const Parceiros = () => {
  return (
    <section className={styles.parceiros} id="parceiros" aria-label="Nossos Parceiros">
      <h1 className={styles.titulo}>nossos parceiros<span className={styles.ponto}>.</span></h1>

      <ul>
        <li>
          <Link className={styles.link} to='https://www.orizonbrasil.com.br/' target="_blank">
            <img src={orizon} alt="orizon"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.linkedin.com/company/hasest/about/' target="_blank">
            <img src={hasest} alt="hasest"/>
          </Link>
        </li>
        <li>
        <Link className={styles.link} to='https://aws.amazon.com/pt/' target="_blank">
            <img src={aws} alt="saitec"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://saitec.com.br/' target="_blank">
            <img src={saitec} alt="saitec"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.tuotempo.com.br/' target="_blank">
            <img src={tuotempo} alt="tuotempo"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://skyone.solutions/' target="_blank">
            <img src={skyone} alt="skyone"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://www.seat.ind.br/' target="_blank">
            <img src={seat} alt="seat"/>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to='https://mevosaude.com.br/' target="_blank">
            <img src={nexodata} alt="nexodata"/>
          </Link>
        </li>
      </ul>
    </section>
  )}

export default Parceiros