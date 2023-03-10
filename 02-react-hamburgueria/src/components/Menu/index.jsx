import React from 'react'
import logo from 'assets/imagens/logo.png'
import MenuLink from 'components/MenuLink'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <header>
        <div className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
                <img src={logo} alt="" />
            </div>
            <nav className={styles.cabecalho__links}>
                <MenuLink to="/">Home</MenuLink>
                <MenuLink to="/sobrenos">Sobre Nós</MenuLink>
                <MenuLink to="/contato">Contato</MenuLink>
                <MenuLink to="/cardapio">Cardápio</MenuLink>
            </nav>
        </div>
    </header>
  )
}
