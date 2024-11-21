import React, { useState, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { GiPlainCircle } from "react-icons/gi";
import styles from "../compModule/OurCoach.module.css"

function OurCoach() {
    const [activeCoach, setActiveCoach] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveCoach((prevCoach) => (prevCoach + 1) % 3);
      }, 3000);
  
      return () => clearInterval(interval); 
    }, []);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperText}>
        <h1>What our <span>Coach</span> Say</h1>
        <p>FitnEarnPal empowers coaches to grow and reach a global audience while valuable health and fitness insights to users. </p>
      </div>
      <div className={styles.allStars}>
        <IoMdStar className={styles.star}/>
        <IoMdStar className={styles.star}/>
        <IoMdStar className={styles.star}/>
        <IoMdStar className={styles.star}/>
        <IoMdStar className={styles.star}/>
      </div>
      <div className={styles.dialogBox}>
        <p>After Joining FitnEarnPal my audience reach has increased and i can work according to my time which i liked the most. </p>
      </div>
      
      <div className={styles.ourCoach}>
        <div
          className={`${styles.coach} ${
            activeCoach === 0 ? styles.visible : styles.hidden
          }`}
        >
          <img src="./assets/coach1.png" alt="Coach 1" />
          <h3>Coach Name</h3>
          <p>Yoga Trainer</p>
        </div>
        <div
          className={`${styles.coach} ${
            activeCoach === 1 ? styles.visible : styles.hidden
          }`}
        >
          <img src="./assets/coach2.png" />
          <h3>Coach Name</h3>
          <p>Maditator Trainer</p>
        </div>
        <div
          className={`${styles.coach} ${
            activeCoach === 2 ? styles.visible : styles.hidden
          }`}
        >
          <img src="./assets/coach3.png" />
          <h3>Coach Name</h3>
          <p>Cardio Trainer</p>
        </div>
      </div>
      <div className={styles.dots}>
        {[0, 1, 2].map((dotIndex) => (
          <GiPlainCircle
            key={dotIndex}
            className={`${styles.dot} ${
              activeCoach === dotIndex ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
      <div className={styles.leftIcons}>
        <img src="./assets/RobertBrown.png" alt="image" />
        <img id = {styles.leftMiddleicon} src="./assets/RobertBrown.png" alt="image" />
        <img src="./assets/RobertBrown.png" alt="image" />
      </div>
      <div className={styles.rightIcons}>
        <img src="./assets/RobertBrown.png" alt="image" />
        <img id = {styles.rightMiddleicon} src="./assets/RobertBrown.png" alt="image" />
        <img src="./assets/RobertBrown.png" alt="image" />
      </div>
    </div>
  )
}

export default OurCoach

