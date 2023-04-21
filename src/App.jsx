import React from 'react'
import About from './compoents/About'
import Bot from './compoents/Bot'
import Contact from './compoents/Contact'
import Hero from './compoents/Hero'
import Navbar from './compoents/Navbar'
import Project from './compoents/Project'
import Skills from './compoents/Skills'
import {menuLinks, projects} from "./data"
const App = () => {
  return (
   <>
   <div>
    <Navbar menuLinks = {menuLinks}/>
    <Bot/>
    <Hero/>
    <About/>
    <Skills/>
    <Project projects={projects}/>
    <Contact/>
    
   </div>
   </>
  )
}

export default App
