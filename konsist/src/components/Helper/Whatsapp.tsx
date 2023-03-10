import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '../../assets/whatsappGrande.svg'
import styles from './Whatsapp.module.css'

const Whatsapp = () => {
  return (
    <div className={styles.whatsapp}>
      <Link className={styles.link} to='https://web.whatsapp.com/send?phone=5561985927845&text=' target='_blank'>
      <img src={whatsapp} alt="fale conosco" />
         <div className={styles.info}>
          <p>Fale Conosco</p>
          <p>08h às 18h</p>
          <p>Seg à Sex</p>
        </div>
      </Link>
    </div>
  )
}

export default Whatsapp