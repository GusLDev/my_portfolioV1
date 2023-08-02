"use client"
import React, { useRef } from 'react';
import Styles from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vrycw3j','template_ktm8lyh', form.current, '_Fe0fwVajImJXN9Kf')
          .then ((result) => {
              console.log(result.text);
                form.current.reset()
              alert("Correo enviado")
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className={Styles.container} id='contact'>
            <h2 className={Styles.title}>Contact<span className={Styles.me}>Me!</span></h2>
            <form className={Styles.formContainer} ref={form} onSubmit={sendEmail}>
                <div className={Styles.firstRow}>
                    <input type="text" placeholder='FULLNAME' className={Styles.input} name='full_name'/>
                    <input type="text" placeholder='EMAIL ADDRESS' className={Styles.input} name='email_address'/>
                </div>
                <div className={Styles.secondRow}>
                    <input type="text" placeholder='MOBILE NUMBER' className={Styles.input} name='mobile_number'/>
                    <input type="text" placeholder='EMAIL SUBJECT' className={Styles.input} name='email_subject'/>
                </div>
                <div className={Styles.thirdRow}>
                    <textarea placeholder='YOUR MESSAGE' className={Styles.message} name='message'></textarea>
                </div>
                <button type="submit" className={Styles.send}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact