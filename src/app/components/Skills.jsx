import React from 'react'
import Styles from '../styles/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faReact, faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.skillTitle}>FRONT-END SKILLS</h2>
            <div className={Styles.frontContainer}>
                <div className={Styles.skillContainer}>
                    <div className={Styles.skillbx}>
                    <FontAwesomeIcon icon={faHtml5} className={Styles.icon} />
                        <p className={Styles.skill}>HTML</p>
                        <p className={Styles.experience}>Expert</p>
                    </div>
                </div>
                <div className={Styles.skillContainer}>
                    <div className={Styles.skillbx}>
                    <FontAwesomeIcon icon={faCss3} className={Styles.icon}/>
                        <p className={Styles.skill}>CSS</p>
                        <p className={Styles.experience}>Intermediate</p>
                    </div>
                </div>
                <div className={Styles.skillContainer}>
                    <div className={Styles.skillbx}>
                    <FontAwesomeIcon icon={faJs} className={Styles.icon} />
                        <p className={Styles.skill}>JavaScript</p>
                        <p className={Styles.experience}>Intermediate-Basic</p>
                    </div>
                </div>
                <div className={Styles.skillContainer}>
                    <div className={Styles.skillbx}>
                    <FontAwesomeIcon icon={faReact} className={Styles.icon} />
                        <p className={Styles.skill}>ReactJs</p>
                        <p className={Styles.experience}>Intermediate-Basic</p>
                    </div>
                </div>
                <div className={Styles.skillContainer}>
                    <div className={Styles.skillbx}>
                        <FontAwesomeIcon icon={faBootstrap} className={Styles.icon}/>
                        <p className={Styles.skill}>Bootstrap</p>
                        <p className={Styles.experience}>Intermediate</p>
                    </div>
                </div>
            </div>
            <div className={Styles.backContainer}>

            </div>
        </div>
    )
}

export default Skills