import React from 'react'
import Styles from '../styles/Work.module.css'
import Image from 'next/image'
const Work = () => {
  return (
    <div className={Styles.container} id='works'>
      <div className={Styles.header}>
        <div className={Styles.titles}>
          <h2 className={Styles.latest}>My Latest Works</h2>
          <a className={Styles.git} href='https://github.com/GusLDev'>EXPLORE MY PROFILE</a>
        </div>
      </div>
      <div className={Styles.works}>
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
      </div>
    </div>
  )
}

export default Work