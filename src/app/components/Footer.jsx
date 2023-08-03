import React from 'react'
import Styles from '../styles/Footer.module.css'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.copy}>Copyright © By Gustavo Marin Lemus | All Rights Reserved</h2>
      <h3 className={Styles.sapere}>Immanuel kant - "Dare To Think"</h3>
      <div className={Styles.socialMedia}>
        <a href="https://github.com/GusLDev"><FontAwesomeIcon icon={faGithub} className={Styles.icon} /></a>
        <a href='https://www.linkedin.com/in/gustavo-lemus-637b38258/'><FontAwesomeIcon icon={faLinkedin} className={Styles.icon} /></a>
        <a href="https://www.facebook.com/gustavo.lemus.5492216"><FontAwesomeIcon icon={faFacebook} className={Styles.icon} /></a>

      </div>
    </div>
  )
}

export default Footer