import React, { useContext } from 'react'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import styles from "./toggle.module.css"
import { themeContext } from '../Context';

const Toggle = () => {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({type : 'toggle'})
  }
  return (
    <>
    <div className={styles.toggle}   onClick = {handleClick}>
    <FaMoon/>
    <FaSun/>
    <button className={styles.btn}
     style = {darkMode ? {left : '2px'} : {right : '2px'}}
    >
      
    </button>
    </div>
  </>
  )
}

export default Toggle
