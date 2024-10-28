
import React, { useState, useRef } from 'react';
import styles from './Navbar.module.css';
import Toggle from './Toggle';
import { Link } from 'react-scroll';
import { ImMenu } from "react-icons/im";
import { GiCrossedAxes } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    menuRef.current.style.right = menuOpen ? "-350px" : "0";
  };

  return (
    <>
    <div className={styles.navbar} id="Navbar">
      <div className={styles.navLeft}>
        <div className={styles.navName}>Portfolio</div>
        <Toggle />
        <ImMenu className={styles.menuOpen} onClick={toggleMenu} />
        <GiCrossedAxes className={`${styles.menuClose} ${menuOpen ? styles.visible : styles.hidden}`} onClick={toggleMenu}/>
        <div className={styles.navRight}></div>
        <div className={styles.navList} ref={menuRef}>
          <ul>
            <Link spy={true} to='Main' smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Aboutme' smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to='Skills' smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to='Carousel' smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to='Contact' smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <button className={styles.navButton}>Contact Us</button>
        <div className={styles.navConnect}></div>
      </div>
    </div>
    <div className={styles.line}></div>
    </>
  );
};

export default Navbar;
