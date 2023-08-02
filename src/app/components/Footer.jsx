import React from 'react'
import Styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={Styles.container}>
        <h2 className={Styles.copy}>Copyright © By Gustavo Marin Lemus | All Rights Reserved</h2>
        <h3 className={Styles.sapere}>Immanuel kant - "I dare you to think"</h3>
    </div>
  )
}

export default Footer