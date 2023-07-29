import React from 'react'
import Styles from '../styles/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.name}>
        GML
      </div>
      <ul className={Styles.list}>
        <li className={Styles.item}>Home</li>
        <li className={Styles.item}>Works</li>
        <li className={Styles.item}>Skills</li>
        <li className={Styles.item}>Experience</li>
        <li className={Styles.itemImage}>
          <FontAwesomeIcon icon={faPhone} className={Styles.contact}/>
        </li>
      </ul>
    </div>
  )
}

export default Header