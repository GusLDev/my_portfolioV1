import React from 'react'
import Styles from '../styles/Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={Styles.container}>
      <Link href = "#home" className={Styles.name}>
        GML
      </Link>
      <ul className={Styles.list}>
        <li className={Styles.item}><Link href = "#home">Home</Link></li>
        <li className={Styles.item}><Link href = "#works">Works</Link></li>
        <li className={Styles.item}><Link href = "#skills">Skills</Link></li>
        <li className={Styles.item}><Link href = "#testimonials">Testimonials</Link></li>
        <li className={Styles.itemImage}>
        <Link href = "#contact">
        <FontAwesomeIcon icon={faPhone} className={Styles.contact}/>
        </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header