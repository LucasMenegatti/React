import React from 'react'
import styles from './Card.module.scss'

export default function Card({ imagem, titulo, descricao }) {
  return (
    <div class={styles.card}>
        <span className={styles.card__imagem}>
            <img src={imagem} alt="" />
        </span>
        <span className={styles.card__texto}>
            <h3>{titulo}</h3><br />
            <p>{descricao}</p>
        </span>
    </div>
  )
}
