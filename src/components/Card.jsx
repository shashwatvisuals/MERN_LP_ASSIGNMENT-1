import React from 'react'
import styles from "../compModule/Card.module.css"
function Card() {
  return (
    <card className={styles.card}>
      <div className={styles.firstRow}>
      <img src="./assets/fitnessTrainer.png" alt="fitness trainer" />
      <img src="./assets/meditaionTrainer.png" alt="Meditaion Trainer" />
      <img src="./assets/yogaTrainer.png" alt="Yoga Trainer" />
      </div>
      <div className={styles.secondRow}>
      <img src="./assets/physiotheraphyTrainer.png" alt="Physiotheraphy Trainer" />
      <img src="./assets/rehab&recovery.png" alt="rehab&recovery" />
      <img src="./assets/Doctors.png" alt="Doctors" />
      </div>
    </card>
  )
}

export default Card
