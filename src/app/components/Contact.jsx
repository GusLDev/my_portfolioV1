import React from 'react'
import Styles from '../styles/Contact.module.css'
const Contact = () => {
    return (
        <div className={Styles.container}>
            <h2 className={Styles.title}>Contact<span className={Styles.me}>Me!</span></h2>
            <form className={Styles.formContainer}>
                <div className={Styles.firstRow}>
                    <input type="text" placeholder='FULLNAME' className={Styles.input} />
                    <input type="text" placeholder='EMAIL ADDRESS' className={Styles.input} />
                </div>
                <div className={Styles.secondRow}>
                    <input type="text" placeholder='MOBILE NUMBER' className={Styles.input} />
                    <input type="text" placeholder='EMAIL SUBJECT' className={Styles.input} />
                </div>
                <div className={Styles.thirdRow}>
                    <textarea placeholder='YOUR MESSAGE' className={Styles.message}></textarea>
                </div>
                <button className={Styles.send}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact