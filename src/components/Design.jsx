import React from 'react'
import styles from './Design.module.css'
import wave from '../images/wave.png'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
const Design = () => {
  return (
    <div className={styles.design} id='Design'>
    <img src={wave} alt="" style={{width : '100%' , padding : 0}} />
    <div className={styles.content}>
      <span className={styles.email}>sharmashivamss005897@gmail.com</span>
      <div className={styles.icons}>
        <FaInstagram color='white' size='8.3rem'/>
        <FaLinkedin  color='white' size='8.3rem'/>
        <FaSquareGithub  color='white' size='8.3rem'/>
      </div>
    </div>
    </div>
  )
}

export default Design
