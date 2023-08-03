"use client"
import React from 'react'
import Styles from '../styles/Work.module.css'
import Image from 'next/image'
import { motion } from "framer-motion";
const Work = () => {
  return (
    <div className={Styles.container} id='works'>
      <motion.div className={Styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={Styles.titles}>
          <h2 className={Styles.latest}>My Latest Works</h2>
          <a className={Styles.git} href='https://github.com/GusLDev'>EXPLORE MY PROFILE</a>
        </div>
      </motion.div>
      <motion.div className={Styles.works}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
      >
        <a href="https://www.naayaritours.com/">
          <figure className={Styles.card}>
            <Image className={Styles.workImage}
              src="/assets/NaayariTours.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div className={Styles.cap}>
              <h3 className={Styles.title}>Naayari Tours Web Site</h3>
              <p className={Styles.desc}>
                We create a web site for Naayari Tours dedicated to
                reservations for their clients.
              </p>
            </div>
          </figure>
        </a>
      </motion.div>
    </div>
  )
}

export default Work