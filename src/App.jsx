import React from 'react'
import Header from "./components/Header"
import IntroBanner from "./components/IntroBanner"
import Card from "./components/Card"
import Coach from "./components/Coach"
import Features from "./components/Features"
import GetTheApp from "./components/GetTheApp"
import StepsSection from "./components/StepsSection"
import OurCoach from "./components/OurCoach"
import Footer from "./components/Footer"

function App() {
  return (
    <>
        <Header className = "header"/>
        <IntroBanner/>
        <Card/>
        <Coach/>
        {/* <Features/>
        <GetTheApp/>
        <StepsSection/>
        <OurCoach/>
        <Footer/> */}

    </>
  )
}

export default App

