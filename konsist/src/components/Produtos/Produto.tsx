import React from 'react'
import { Link } from 'react-router-dom'
import VideoPlayer from '../Helper/VideoPlayer'
import styles from './Produto.module.css'

type VideoPlayerProps = {
  titulo: string
  desc: string 
  pontos: [] 
  link: string 
  alt: string
  src:string 
  content: string
}

const Produto = ({titulo, desc, pontos, link, alt, src, content}:VideoPlayerProps) => {
  return (
    <div className={styles.produto}>
      {content === 'video' ? <VideoPlayer src={src} /> : <img src={src} alt={alt} /> }
      <div className={styles.info}>
        <div className={styles.titulo}>
          <span></span>
          <h1>{titulo}</h1>    
        </div>
        <p>{desc}</p>
        <div className={styles.todosPontos}>
        <div className={styles.pontos}>
          {pontos.map((ponto:string, index:number)=> (
            <div key={index} className={styles.ponto}>
              <span></span>
              <p>{ponto}</p>  
            </div>
          ))}
          
        </div>
        <Link to={`/produtos/${link}`} className={styles.link}>
            <button>SAIBA MAIS</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Produto