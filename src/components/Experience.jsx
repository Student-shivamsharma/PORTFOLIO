import React from 'react'
import styles from './Experience.module.css'
const Experience = () => {
  return (
   <div className={styles.experience} id='Experience'>
    <div className={styles.achieve}>
      <div className={styles.circle}>8+</div>
      <span>years</span>
      <span>Experience</span>
    </div>

    <div className={styles.achieve}>
      <div className={styles.circle}>20+</div>
      <span>years</span>
      <span>Experience</span>
    </div>

    <div className={styles.achieve}>
      <div className={styles.circle}>8+</div>
      <span>years</span>
      <span>Experience</span>
    </div>
    
   </div>
  )
}

export default Experience
