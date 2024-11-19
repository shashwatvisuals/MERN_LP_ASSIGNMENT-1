import React, { useState } from "react";
import styles from "../compModule/Card.module.css";

function Card() {
  const [flipped, setFlipped] = useState(Array(6).fill(false)); // Manage flipped states for all cards

  const handleCardClick = (index) => {
    setFlipped((prev) =>
      prev.map((flip, i) => (i === index ? !flip : flip))
    );
  };

  const cardData = [
    { imgSrc: "./assets/fitnessTrainer.png", bio: "I am a Fitness Trainer" },
    { imgSrc: "./assets/meditaionTrainer.png", bio: "I am a Meditation Trainer" },
    { imgSrc: "./assets/yogaTrainer.png", bio: "I am a Yoga Trainer" },
    { imgSrc: "./assets/physiotheraphyTrainer.png", bio: "I am a Physiotherapy Trainer" },
    { imgSrc: "./assets/rehab&recovery.png", bio: "I am a Rehab & Recovery Expert" },
    { imgSrc: "./assets/Doctors.png", bio: "I am a Doctor" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.flexedRow}>
        {cardData.slice(0, 3).map((card, index) => (
          <div
            key={index}
            className={`${styles.cardItem} ${
              flipped[index] ? styles.flipped : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={card.imgSrc} alt={card.bio} />
              </div>
              <div className={styles.cardBack}>
                <p>{card.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.flexedRow}>
        {cardData.slice(3).map((card, index) => (
          <div
            key={index + 3}
            className={`${styles.cardItem} ${
              flipped[index + 3] ? styles.flipped : ""
            }`}
            onClick={() => handleCardClick(index + 3)}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={card.imgSrc} alt={card.bio} />
              </div>
              <div className={styles.cardBack}>
                <p>{card.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;


