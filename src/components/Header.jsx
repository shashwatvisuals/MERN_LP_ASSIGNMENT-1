import React from 'react'
import styles from "../compModule/Header.module.css"
function header() {
  return (
    <div className= {styles.header}>
      <div className= {styles.logo}>
        <img src="./assets/FitnEarnLogo.png" alt="logo" />
        <h1>FitnEarnPal</h1>
      </div>
      <div className= {styles.navigation}>
        <h2>Home</h2>
        <h2>Features</h2>
        <h2>How It Works</h2>
      </div>
      <div className= {styles.signup}>
        <button> Sign Up Form</button>
      </div>

    </div>
  )
}

export default header
