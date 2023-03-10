import Card from 'components/Card'
import React from 'react'
import styles from './Cardapio.module.scss'
import cards from './Cardapio.json'

export default function Cardapio() {
  return (
    <>
      <h2 className={styles.cardapio__titulo}>Conheça nosso Cardápio</h2>    
      <section className={styles.cardapio__cards}>
        {cards.map((card) => {
          return (
            <Card imagem={card.imagem} titulo={card.titulo} descricao={card.descricao} />
          )
        })}
      </section>
    </>
  )
}
