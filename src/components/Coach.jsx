import React from 'react';
import styles from "../compModule/Coach.module.css";

function Coach() {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.textArea}>
        <h1>What’s in it for <span>Coach</span></h1>
        <p>FitnEarnPal empowers coaches to grow and reach a global audience while providing valuable health and fitness insights to users.</p>
      </div>
      <div className={styles.animationMainDiv}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}></div>
        </div>

        {/* Left icons */}
        <div className={`${styles.iconWrapper} ${styles.leftIconWrapper}`}>
          <div className={styles.leftIcon}>
          <img className={styles.iconImage} src="./assets/revenue.png" alt="Icon" />
          </div>
        </div>
        <div className={styles.iconText1}>
        <h3 className={styles.iconTexth3}>Global Audience Access</h3>
        <p className={styles.iconTextp}>Helps you gain global audience</p>
        </div>
        <div className={`${styles.iconWrapper} ${styles.topLeftIconWrapper}`}>
          <div className={styles.leftIcon}>
          <img className={styles.iconImage} src="./assets/Group.png" alt="Icon" />
          </div>
          <div className={styles.iconText2}>
        <h3 className={styles.iconTexth3}>Revenue Opportunities</h3>
        <p className={styles.iconTextp}>Helps you gain global audience</p>
        </div>
        </div>

        {/* Right icons */}
        <div className={`${styles.iconWrapper} ${styles.rightIconWrapper}`}>
          <div className={styles.rightIcon}>
          <img className={styles.iconImage} src="./assets/time.png" alt="Icon" />
          </div>
          <div className={styles.iconText3}>
        <h3 className={styles.iconTexth3}>Personal Brand</h3>
        <p className={styles.iconTextp}>Helps you gain global audience</p>
        </div>
        </div>
        <div className={`${styles.iconWrapper} ${styles.topRightIconWrapper}`}>
          <div className={styles.rightIcon}>
          <img className={styles.iconImage} src="./assets/branding.png" alt="Icon" />
          </div>
          <div className={styles.iconText4}>
        <h3 className={styles.iconTexth3}>Work on Your Own Schedule</h3>
        <p className={styles.iconTextp}>Helps you gain global audience</p>
        </div>
        </div>

        <img className={styles.iPhone} src="./assets/iPhone13ProMax2.png" alt="image" />
      </div>
    </div>
  );
}

export default Coach;
