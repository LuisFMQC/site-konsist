import React from 'react'
import styles from './Titulo.module.css'

const Titulo = ({titulo, subTitulo}:any) => {
  return (
    <div className={styles.divTitulo}>
      <h2 className={styles.subTitulo}>{subTitulo}</h2>
      <h1 className={styles.titulo}>{titulo} <span>.</span></h1>
    </div>
  )
}

export default Titulo