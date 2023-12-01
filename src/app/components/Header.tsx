'use client'

import styles from "./header.module.css"
import Image from 'next/image'
import headerImage from "../../../public/images/logo.svg"
import NavBar from "./NavBar"
import navButtons from "../config/buttons"


const Header = () => {
    return (
      <div className={styles.Header}>
        <div className={styles.Image}>
          <Image
          priority
          src={headerImage}
          alt="Unicorn Solutions Logo"
          sizes="100vb"
          style={{ width: '100vb', height: 'auto' }}/>
        </div>
       
       <NavBar navButtons={navButtons}/>
         
      </div>
    );
  };
  
  export default Header;