import React from 'react'
import styles from './FooterSub.module.scss'

import reactIcon from './react.png'
import rrdIcon from './react-router.png'
import sassIcon from './sass.png'

export default function FooterSub() {
  return (
    <div className={styles.footerSub}>
        <p>Site refatorado utilizando as seguintes teconologias:</p>
        <ul>
          <li><img src={reactIcon} alt="" /></li>
          <li><img src={rrdIcon} alt="" /></li>
          <li><img src={sassIcon} alt="" /></li>
        </ul>
    </div>
  )
}
