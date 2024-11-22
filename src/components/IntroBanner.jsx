import React from 'react'
import { useRef, useEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import styles from "../compModule/IntroBanner.module.css"


gsap.registerPlugin(ScrollTrigger);


function IntroBanner() {


  useEffect(() => {
    const words = document.querySelectorAll(".word");
    gsap.to(words, {
      scrollTrigger: {
        trigger: ".word",  
        start: "top 72%",            
        end: "+=380px",       
        toggleActions: "play none none none",
        scrub: true,                 
        markers: true,              
      },
      color: "#ffffff",            
      stagger: 0.1,                
      // ease: "none", 
      // immediateRender: true,                
    });
    
  }, []);

  const splitText = (words) => {
    return words.split(" ").map((word, index) => (
      
      <span key={index} className="word">{word} </span>
    ));
  };


  return (
    <div>
    <div className={styles.upperHalf}>
    <div className={styles.leftHalf}>
    <div className={styles.firstLine}>
      <img src="./assets/smile2.png" alt="emogi" />
      <h1>Hey, Awesome Coach</h1>
    </div>
    <div className={styles.secondLine}>
    <h2>Expand Your Reach, Inspire More 
    <br/>Lives <span>Join FitnEarnPal Today !</span></h2>
    </div>
    <h2 className={styles.thirdLine}>A global platform for coaches to connect, Inspire and <br/> change Lives</h2>

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

    <div className={styles.rightHalf}>
    <div className={styles.outerCircle}>
      <div className={styles.innerCircle}></div>
    </div>
      <img className={styles.iPhone} src="./assets/iPhone13ProMax3.png" alt="image" />
   
    </div>
    </div>
  <div className={styles.lowerHalf}>
    <div className="scroll-section" id={styles.scrollText}>
      <h1>
        {splitText("Join growing community of Coaches")}
        </h1>
      <p >
        {splitText("FitnEarnPal is your getaway to connect with a global community  of health and fitness enthusiastic, share experience and valuable knowledge, and grow their audience. As a coach you have the power to inspire, educate and motivate users worldwide by creating and sharing impactful content, workout videos, conducting live sessions and much more.")}
        </p>
    </div>
    <button>Join Now</button>
  </div>
    </div>
  )
}

export default IntroBanner
