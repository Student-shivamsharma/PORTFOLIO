import React, { useState } from 'react'
import styles from './Contact.module.css'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useRef } from 'react';
const Contact = () => {

  const form = useRef();
  const [msg , setMsg] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_57yy6sb', 'template_ayfl0n6', form.current, {
        publicKey: 'snIdLRvgnyZ3ABOGu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMsg(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <p className={styles.touch}>Get in Touch</p>
   <div className={styles.contactForm} id='Contact'>
    <div className={styles.left}>
      <div className={styles.awesome}>
        <span>Let's talk</span>
        <span style={{"font-size" : "2rem" , "font-weight" : "bolder"}}>Contact me</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, est.</span>
        <span><i><MdMessage/></i>shivam2311155@akgec.ac.in</span>
        <span><i><IoCall/></i>+91 9105636155</span>
        <span><i><FaLocationCrosshairs/></i>U.P India</span>
        
      </div>
    </div>


  <div className={styles.right}>
    <form action="" ref={form} onSubmit={sendEmail}>
      <input type="text"  placeholder='Name' className={styles.name} style={{"padding" : "5px"}} />
      <input type="email"  placeholder='Email' className={styles.email} style={{"padding" : "5px"}} />
      <textarea name="maessage" className={styles.user} placeholder='Message me'></textarea>
      <input type="submit" value="send" className="button" style={{"padding" : "5px"}}/>
      <span>{msg && "Thanks for Contacting"}</span>
    </form>
  </div>

   </div>

   </>
  )
}

export default Contact
