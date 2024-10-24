import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import styles from './Main.module.css'
import Shivamphot from '../images/Shivamphot.png'
import {motion} from 'framer-motion'

const Main = () => {
  return (
   <div className={styles.Main} id='Main'>
      <div className={styles.mainLeft}>
      <div className={styles.mainName}>
        <span className={styles.hello}>Hello! I Am </span>
        <span className={styles.shivam}> Shivam Sharma </span>
        <span className={styles.text}> 
          I am Shivam Sharma from Shamli . Currently pursuing B.Tech in CSIT branch from #AkGEC. And my passion lies in Web Development and i am excited to learn and enhance ny skills and to explore opportunities in this field  </span>
      </div>
      <button className={styles.mainButton}>Hire Me</button>
      <div className={styles.mainIcons}>
        <a href="https://www.instagram.com/shivamsharma6842?igsh=MWpwZG9mYTJyOWt1bw=="> <FaInstagram /></a>
        <a href="https://www.linkedin.com/in/shivam-sharma-450178302"> <FaLinkedin /></a>
        <a href="https://github.com/Student-shivamsharma"><FaSquareGithub /></a>
       
    </div>
    </div>
    <div className={styles.mainRight}>
      <div className="img">
      <img src={Shivamphot} alt="" height = "510px" />
      </div>
    </div>
   </div>
  )
}

export default Main;
