import React from "react";
import styles from "./Services.module.css";
import { SiCodesignal } from "react-icons/si";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import Card from "./Card";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className={styles.services} id="Services">

     <div className={styles.text}>
        <span className={styles.awes}>My Awesome</span>
        <span className={styles.service}>Services</span>
        <span className={styles.lorem}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          <br />
          Lorem ipsum dolor sit amet. magni!
        </span>
           <button className={styles.CV}>Download CV</button>
     </div>

      <div className={styles.cards}>

        <motion.div 
         initial = {{left : "25rem"}}
         whileInView={{left : "23rem"}}
         transition={transition}
        >
          <Card
            heading={"Devloper"}
            details={"html , css, js , react js ,hello , react jshejmffh"}
          ></Card>
        </motion.div>

        <motion.div
          initial = {{left : "-11rem" , top:"12rem"}}
          whileInView={{left : "2.3rem"}}
          transition={transition}
        >
          <Card
            heading={"Devloper"}
            details={"Figma , Sketch, PhotoShop , Adobe , excel md"}
          />
        </motion.div>

        <motion.div 
          initial = {{top : "19rem" , left : "25rem"}}
          whileInView={{left : "18rem"}}
          transition={transition}
        >
          <Card
            emoji={MdEmojiEvents}
            heading={"Devloper"}
            details={"Figma , Sketch, PhotoShop , Adobe , Adobe xd"}
          />
        </motion.div>

        <div className="blur" style={{ background: "red" }}></div>
      </div>
    </div>
  );
};

export default Services;
