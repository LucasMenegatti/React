import React from 'react'
import styles from './Contato.module.scss'

export default function Contato() {
  return (
    <section className={styles.contato}>
        <div className={styles.contato__div}>
            <h2>Contato</h2>
            <ul>
                <li>Telefone: (16) 3456-7890</li>
                <li>E-mail: hamburguerwd@abcdef.com.br</li>
                <li>Whatsapp: (16) 9 9999-9999</li>
            </ul>
            <form action="" id='form-contato'>
                <input type="text" id="nome" placeholder="Nome" /><br />
                <span className={`${styles.errosFormulario} ${styles.erroOculto}`} id="erro-nome">*Campo NOME é obrigatório</span>
                <input type="email" id="email" placeholder="E-mail" /><br />
                <span className={`${styles.errosFormulario} ${styles.erroOculto}`} id="erro-email">*Campo E-MAIL é obrigatório</span>
                <input type="text" id="assunto" placeholder="Assunto" /><br />
                <span className={`${styles.errosFormulario} ${styles.erroOculto}`} id="erro-assunto">*Campo ASSUNTO é obrigatório</span>
                <textarea rows="4" id="mensagem" name="mensagem" placeholder="Digite aqui a sua mensagem"></textarea><br />
                <span className={`${styles.errosFormulario} ${styles.erroOculto}`} id="erro-mensagem">*Campo MENSAGEM é obrigatório</span>
                <button className={styles.botaoEnviar} type="submit">Enviar</button>
            </form>
        </div>
        <div className={styles.contato__div}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4399.779070934799!2d-47.932365658200325!3d-21.98223188839963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876fb799a433f%3A0xa0ac3fffc8b5f135!2sUnicep%20-%20Centro%20Universit%C3%A1rio%20Central%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1652618270313!5m2!1spt-BR!2sbr" title="A" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section> 
  )
}
