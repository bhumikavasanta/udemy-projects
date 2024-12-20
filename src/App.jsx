import React from "react"
import './App.css'
import { darkTheme } from "./themes/themes"
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar />
      <div className="bg">
        <div className="wrapper">
          <Projects />
          <Contact />
        </div>
      </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
