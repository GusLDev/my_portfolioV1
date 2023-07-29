import React from 'react'
import Styles from '../styles/Work.module.css'


const Work = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        < div className={Styles.titles}>
          <h2 className={Styles.latest}>My Latest Works</h2>
          <h3 className={Styles.look}>Take a look!</h3>
        </div>
          <a className={Styles.git} href='https://github.com/GusLDev'>EXPLORE MY PROFILE</a>
      </div>
      <div className={Styles.works}>

      </div>
    </div>
  )
}

export default Work