// import React, { useState } from 'react'
// import styles from './Navbar.module.css'
// import Toggle from './Toggle'
// import { Link } from 'react-scroll'
// import { ImMenu } from "react-icons/im";
// import { useRef } from 'react';
// import { useState } from 'react'
// import { GiCrossedAxes } from "react-icons/gi";
// const Navbar = () => {
//   const [menu , setMenu] = useState(false)
 
//   const menuRef = useRef()
//    const openMenu = () => {
//     menuRef.current.style.right = "0";
//    }
//    const closeMenu = () => {
//     menuRef.current.style.right = "-350px";
//    }
//   return (
//     <div className={styles.navbar}>

//       <div className={styles.navLeft}>
//           <div className={styles.navName}>Portfolio</div>
//           <Toggle/>
//           <ImMenu className={styles.menuOpen} onClick={openMenu}/>
//           < GiCrossedAxes  className={styles.menuClose} onClick={closeMenu}/>
//       <div className={styles.navRight}></div>
//            <div className={styles.navList} >
//             <ul className={styles.navList} ref={menuRef}>
//               <Link spy = {true} to='Navbar' smooth={true}>
//               <li>Home</li>
//               </Link>
//               <Link spy = {true} to='Services' smooth={true}>
//               <li>Services</li>
//               </Link>
//               <Link spy = {true} to='Experience' smooth={true}>
//               <li>Experience</li>
//               </Link>
//               <Link spy = {true} to='Portfolio' smooth={true}>
//               <li>Portfolio</li>
//               </Link>
//               <Link spy = {true} to='test' smooth={true}>
//               <li>test</li>
//               </Link>
//             </ul>
//            </div> 
//            <button className={styles.navButton}>Contact Us</button> 
//            <div className={styles.navConnect}>

//            </div>
//     </div>
//     </div>
//   )
// }

// export default Navbar;
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
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <div className={styles.navName}>Portfolio</div>
        <Toggle />
        <ImMenu className={styles.menuOpen} onClick={toggleMenu} />
        <GiCrossedAxes className={`${styles.menuClose} ${menuOpen ? styles.visible : styles.hidden}`} onClick={toggleMenu}/>
        <div className={styles.navRight}></div>
        <div className={styles.navList} ref={menuRef}>
          <ul>
            <Link spy={true} to='Navbar' smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='test' smooth={true}>
              <li>Test</li>
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
