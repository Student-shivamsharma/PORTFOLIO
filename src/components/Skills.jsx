import React from "react";
import styles from "./Skills.module.css";
import { SiCodesignal } from "react-icons/si";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import Card from "./Card";
import { motion } from "framer-motion";

const Skills = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className={styles.Skills} id="Skills">

     <div className={styles.text}>
        <span className={styles.awes}>My Awesome</span>
        <span className={styles.service}>Skills</span>
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
            details={"html , css, js : These are some skills whih i learn first for developer"}
          ></Card>
        </motion.div>

        <motion.div
          initial = {{left : "-11rem" , top:"12rem"}}
          whileInView={{left : "2.3rem"}}
          transition={transition}
        >
          <Card
            heading={"Learner"}
            details={"C , C++ : Currently , Also known about C , C++ and practicing daily for CP "}
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

export default Skills;
