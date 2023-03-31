import React from 'react'
import About from './compoents/About'
import Bot from './compoents/Bot'
import Contact from './compoents/Contact'
import Hero from './compoents/Hero'
import Navbar from './compoents/Navbar'
import Project from './compoents/Project'
import Skills from './compoents/Skills'
const App = () => {
  return (
   <>
   <div>
    <Navbar/>
    <Bot/>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    
   </div>
   </>
  )
}

export default App
