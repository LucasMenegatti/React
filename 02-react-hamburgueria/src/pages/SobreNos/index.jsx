import React from 'react'
import styles from './SobreNos.module.scss'

import imgFachada from './fachada.jpg'
import imgInterna01 from './01-interna.webp'
import imgInterna02 from './02-batata.webp'
import imgInterna03 from './03-hamburguer.webp'
import imgInterna04 from './04-milk-shake.webp'

export default function SobreNos() {
  return (
    <>
    <section className={styles.sobreNos}>
        <div className={styles.sobreNos__texto}>
            <h2>Conheça a nossa <strong>História!</strong></h2>
            <p>Os fãs de programação precisam conhecer essa hamburgueria. Além da decoração no ambiente, você pode aproveitar lanches deliciosos,  várias tecnologias, realizar programação, escolher seu hamburguer da sua linguagem favorita.</p><br/>
            <p>Se você é apaixonado por um hambúrguer com tecnologia, chegou ao lugar certo. A Web Design Hamburgueria é considerada uma das principais referências no assunto. Isso porque, além de um Hamburguer simplesmente maravilhoso, você tem a opção de "brincar" com VS Code e criar seu site totalmente amador grátis, e ve-lô sendo analisado por outros fregueses.</p>
        </div>
        <div className={styles.sobreNos__imagem}>
            <img src={imgFachada} alt="" />
        </div>
    </section>
    <section className={styles.imagensBaixo}>
        <div className={styles.imagensBaixo__imagens}>
            <img src={imgInterna01} alt="" />
            <img src={imgInterna02} alt="" />
        </div>
        <div className={styles.imagensBaixo__imagens}>
            <img src={imgInterna03} alt="" />
            <img src={imgInterna04} alt="" />
        </div>
    </section>
    </>
  )
}
