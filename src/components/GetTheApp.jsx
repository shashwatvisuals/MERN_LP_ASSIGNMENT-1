import React from 'react'
import styles from '../compModule/GetTheApp.module.css'

import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function GetTheApp() {
  return (
    <div className={styles.mainDiv}>
      <h1>Become <span>Coach </span>Today</h1>
      <div className={styles.imageContainer}>
        <div className={styles.images}>
          <img id = {styles.phone1} src="./assets/iPhone1.png" alt="image" />
          <img id = {styles.phone2} src="./assets/iPhone2.png" alt="image" />
        </div>
      </div>
      <div>
      <div className={styles.bothButton}>
      <button className={styles.downloadButton}>
        <FaApple className={styles.icon}/>
        <div className={styles.buttonName}>
        <p>Download on the</p>
        <h3>App Store</h3>
        </div>
      </button>
      <button className={styles.downloadButton}>
        <FaGooglePlay className={styles.icon}/>
        <div className={styles.buttonName}>
        <p>Get it on</p>
        <h3>Google Play</h3>
        </div>
      </button>
    </div>
      </div>
    </div>
  )
}

export default GetTheApp
