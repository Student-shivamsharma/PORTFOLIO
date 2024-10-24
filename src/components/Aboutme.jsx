import React from 'react'
import styles from './Aboutme.module.css'
import amazon from '../images/amazon.webp';
const Aboutme = () => {
  return (
    <>
     <h1 className={styles.head} id="Aboutme"> 
          About me
        </h1>
<div className={styles.about} >
    <div className={styles.background}>
      <h2>Background</h2>
      Education:

- Class X: SDS Convent School, CBSE Board (2020)
    - Percentage: 80%
    - Batch: Corona Batch (2020)

- Class XII: Arpan Public School, CBSE Board (2023)
    - Percentage: 91.34%

- Currently Pursuing: Bachelor of Technology (B.Tech)
    - Institute: Ajay Kumar Garg Engineering College (AKGEC)


    </div>
   
     <div className={styles.exp}>
     <h2>Experience</h2>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum recusandae, odit quis quaerat ullam optio molestias et, asperiores minima officia nulla tenetur veniam labore at id dolores. Et, velit est?
      </span>
     </div>

    <div className={styles.skills}>
    <h2>My Skills</h2>
    <div className={styles.skillitems} >HTML :<div className={styles.t1}></div></div>
    <div className={styles.skillitems}>C :<div className={styles.t2} ></div></div>
    <div className={styles.skillitems}>CSS:<div className={styles.t3}></div></div>
    <div className={styles.skillitems}>C++:<div className={styles.t4}></div></div>
    <div className={styles.skillitems}>JAVASCRIPT:<div className={styles.t5}></div></div>
    <div className={styles.skillitems}>REACT JS:<div className={styles.t6}></div></div>
      </div>
</div>
  </>
  )
}

export default Aboutme
