import React from 'react'
import styles from './Footer.module.scss'

import logo from 'assets/imagens/logo.png'
import fbIcon from './facebook.png'
import inIcon from './instagram.png'
import wpIcon from './whatsapp.png'
import ytIcon from './youtube.png'
import FooterSub from 'components/FooterSub'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.footer__logo}>
            <img src={logo} alt="" />
            <h3>Tecnologia e Sabor Aliados!</h3>
            <p>Hamburgeria Web Design, fundada em 2000, juntamos as ideias de 3 grandes mentes alunos da engenharia da computação, para trazer à vocês o que há de melhor se tratando de hambúrgueres, tecnologia e criatividade.</p>
        </div>
        <div className={styles.footer__links}>
            <ul className={styles.footer__links__lista}>
                <li><a className={styles.footer__links__lista__link} href="./index.html">Home</a></li>
                <li><a className={styles.footer__links__lista__link} href="./sobreNos.html">Sobre Nós</a></li>
                <li><a className={styles.footer__links__lista__link} href="./contato.html">Contato</a></li>
                <li><a className={styles.footer__links__lista__link} href="./cardapio.html">Cardápio</a></li>
            </ul>
            <ul className={styles.footer__links__sociais}>
                <li><a href="#"><img src={fbIcon} alt="" /></a></li>
                <li><a href="#"><img src={inIcon} alt="" /></a></li>
                <li><a href="#"><img src={ytIcon} alt="" /></a></li>
                <li><a href="#"><img src={wpIcon} alt="" /></a></li>
            </ul>
        </div>
        <div className={styles.footer__video}>
            <iframe src="https://www.youtube.com/embed/JQFYEKijFIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </footer>
    <FooterSub />
    </>
  )
}
