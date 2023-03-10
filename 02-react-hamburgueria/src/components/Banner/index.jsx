import React from 'react'
import styles from './Banner.module.scss'
import ImagemHamburguer from './imagem-banner.png'

export default function Banner() {
  return (
    <section className={styles.banner}>
        <div className={styles.banner__texto}>
            <h1>O Hambúrguer mais <strong>delicioso</strong> que você já experimentou</h1>
        </div>
        <div className={styles.banner__imagem}>
            <img src={ImagemHamburguer} alt="" />
        </div>
    </section>
  )
}
