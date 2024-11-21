import React from 'react'
import styles from '../compModule/Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { HiMiniHeart } from "react-icons/hi2";



function Footer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperContainer}>
          <div className={styles.firstUpperContainer}>
            <div className= {styles.logo}>
              <img src="./assets/FitnEarnLogo.png" alt="logo" />
              <h1>FitnEarnPal</h1>
            </div>
            <p>FitnEarnPal is your all-in-one place where you can train people as per your schedule. It’s a place where you can upload workout videos, create live sessions, write blogs and much more. Available on Android and iOS. Join our community of coaches today!</p>
            <div className= {styles.email}>
              <IoMail />
              <span>help-support@fitnearn.com</span>
            </div>
            <div className= {styles.socialLink}>
              <div className= {styles.linkIcon}>
                <FaInstagram/>
              </div>
              <div className= {styles.linkIcon}>
                <FaTwitter />
              </div>
              <div className= {styles.linkIcon}>
                <FaFacebookF />
              </div>
              <div className= {styles.linkIcon}>
                <FaGithub />
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Useful Links</h3>
            <p>Home</p>
            <p>How it works</p>
            <p>Features</p>
            <p>Sign Up form</p>
          </div>

          <div className={styles.policies}>
            <h3>Policies</h3>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Term & Conditions</p>
            <p>Data Deletion</p>
          </div>

          <div className={styles.downloadLink}>
              <h3>Download Now</h3>
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

      <div className={styles.line}></div>

      <div className={styles.lastContainer}>
          <div>
            <p>© Copyright 2024, All Rights Reserved.</p>
          </div>

          <div className={styles.heartContainer}>
            <p>Made with </p>
            <span><HiMiniHeart id= {styles.heart}/></span> 
            <p>in India</p>
          </div>

          <div>
            <p>Reg@2024</p>
          </div>
      </div>
    </div>
  )
}

export default Footer


