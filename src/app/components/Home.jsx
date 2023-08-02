"use client"
import React from 'react'
import Styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Home = () => {
  return (
    <div className={Styles.container} id='home'>
      <div className={Styles.info}>
        <div className={Styles.fcolumn}>
          <h2>Hello, My Name Is<br />Gustavo.</h2>
          <h3>Systems engineer <a className={Styles.university} href='https://www.tepic.tecnm.mx/'>ITT</a></h3>
        </div>
        <div className={Styles.scolumn}>
          <a href='https://www.linkedin.com/in/gustavo-lemus-637b38258/'>
            <Image className={Styles.profileImage}
              src="/assets/gml.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div className={Styles.tcolumn}>
          <h2 className={Styles.position}>FRONT-END <br /><span className={Styles.dev}>DEVELOPER</span></h2>
          <h3>I like to design, create and <br /> learn new things.</h3>
        </div>
      </div>
      <div className={Styles.phrase}>
      <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=2000&pause=2000&color=000000&center=true&vCenter=true&width=800&lines=I'M+LOOKING+FOR+NEW+OPPORTUNITIES;I'D+LIKE+TO+BE+YOUR+DEVELOPER" alt="Typing SVG" /></a>
      </div> 
    </div>
  )
}

export default Home