import React from 'react'
import '../stylesheets/skills.css'

export const Skill = ({ name, svg }) => {
  return (
  <div className='skill'>
    {svg}
    <h3>{ name }</h3>
  </div>
  )
}
