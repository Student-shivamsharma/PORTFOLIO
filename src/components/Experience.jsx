import React from 'react'
import styles from './Experience.module.css'
const Experience = () => {
  return (
   <div className={styles.experience} id='Experience'>
    <div className={styles.achieve}>
      <div className={styles.circle}>80+</div>
      <span>Score</span>
      <span>in 10th</span>
    </div>

    <div className={styles.achieve}>
      <div className={styles.circle}>91+</div>
      <span>Score</span>
      <span>in 12th</span>
    </div>

    <div className={styles.achieve}>
      <div className={styles.circle}>8.95</div>
      <span>Score</span>
      <span>in 1st Sem</span>
    </div>
    
   </div>
  )
}

export default Experience
