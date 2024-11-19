import React from 'react'
import styles from "../compModule/Header.module.css"
function header() {
  return (
    <header className= {styles.header}>
      <logo className= {styles.logo}>
        <img src="./assets/FitnEarnLogo.png" alt="logo" />
        <h1>FitnEarnPal</h1>
      </logo>
      <navigationlink className= {styles.navigation}>
        <h2>Home</h2>
        <h2>Features</h2>
        <h2>How It Works</h2>
      </navigationlink>
      <signup className= {styles.signup}>
        <button> Sign Up Form</button>
      </signup>

    </header>
  )
}

export default header
