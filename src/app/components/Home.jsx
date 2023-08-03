"use client"
import React from 'react'
import Styles from '../styles/Home.module.css'
import Image from 'next/image'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className={Styles.container} id='home'>
      <div className={Styles.info}>
        <motion.div className={Styles.fcolumn}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Hello, My Name Is<br />Gustavo.</h2>
          <h3>Systems engineer <a className={Styles.university} href='https://www.tepic.tecnm.mx/'>ITT</a></h3>
        </motion.div>
        <motion.div className={Styles.scolumn}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a href='https://www.linkedin.com/in/gustavo-lemus-637b38258/'>
            <Image className={Styles.profileImage}
              src="/assets/gml.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </a>
        </motion.div>

        <motion.div className={Styles.tcolumn}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className={Styles.position}>WEB <br /><span className={Styles.dev}>DEVELOPER</span></h2>
          <h3 className={Styles.like}>I like to design, create and <br /> learn new things.</h3>
        </motion.div>
      </div>
      <div className={Styles.phrase}>
        <p>I'm Looking for new Opportunities</p>
      </div>
    </div>
  )
}

export default Home