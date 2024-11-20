import React from 'react'
import styles from '../compModule/StepsSection.module.css'

function StepsSection() {
  return (
    <div className={styles.mainDiv}>
      <h1>How It Works ?</h1>

      <div className={styles.flexedIcon}>
        <div className={styles.iconLine}></div>
        <div className={styles.allIcons}>
          <div className={styles.icon}>
            <img src="./assets/register.png" alt="image" />
          </div>
          <div className={styles.icon}>
            <img src="./assets/badge-check.png" alt="image" />
          </div>
          <div className={styles.icon}> 
            <img src="./assets/image.png" alt="image" />
          </div>
          <div className={styles.icon}>
            <img src="./assets/Engage.png" alt="image" />
          </div>
        </div>
      </div>

      <div className={styles.flexedTitle}>
        <h3>Register</h3>
        <h3>Verify</h3>
        <h3>Create <br/>
        Content</h3>
        <h3>Engage With <br/>
        Users</h3>
      </div>

      <div className={styles.flexedPara}>
        <p>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
        <p>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
        <p>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
        <p>Support for multiple languages, making health monitoring accessible and easy for users around the globe.</p>
      </div>

    </div>
  )
}

export default StepsSection
