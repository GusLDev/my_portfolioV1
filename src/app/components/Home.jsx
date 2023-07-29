import React from 'react'
import Styles from '../styles/Home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={Styles.container}>
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
        <p>I'M Looking for new opportunities</p>
      </div>
    </div>
  )
}

export default Home