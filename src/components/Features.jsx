import React from 'react'
import styles from '../compModule/Feature.module.css'

function Features() {
  return (
    <div className={styles.mainDiv}>
      <h1>Key Features</h1>
      <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="./assets/book.png" alt="book logo" />
            </div>
            <div className={styles.square}>
              <h3>Blog Writing</h3>
              <p>Coach can write blogs</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}> 
              <img src="./assets/streamline.png" alt="book logo" />
            </div>
            <div className={styles.square}>
              <h3>Live Sessions</h3>
              <p>Coach can create live sessions</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="./assets/image.png" alt="book logo" /> 
            </div>
            <div className={styles.square}>
              <h3>Content Creation</h3>
              <p>Coach can create contents</p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <img src="./assets/video.png" alt="book logo" />
            </div>
            <div className={styles.square}>
              <h3>Workout Videos</h3>
              <p>Coach can create workout videos</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Features
