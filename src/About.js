import React, { useContext } from 'react'
import AppContext from './context/AppContext'

const About = () => {
  const ctx= useContext(AppContext);
  return (
    <div>I'm {ctx.age} years old</div>
  )
}

export default About