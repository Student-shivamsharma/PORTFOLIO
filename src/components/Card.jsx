import React from 'react'
import styles from './Card.module.css'
import { SiCodesignal } from "react-icons/si";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
const Card = ({heading , details}) => {
  return (
    <div className={styles.card} id='Card'>
      <MdEmojiEvents className={styles.trophy}/>
      <span>{heading}</span>
      <span>{details}</span>
      <button className={styles.btn}>Click</button>
    </div>
  )
}

export default Card
