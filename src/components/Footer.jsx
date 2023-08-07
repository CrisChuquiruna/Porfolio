import React from 'react'
import { Icons } from './Icons'
import '../stylesheets/footer.css'

export const Footer = ({ mail, name, secondname }) => {
  return (
    <footer className='footer'>
        <Icons />
        <p>Designed &amp; Built by {name} {secondname}</p>
    </footer>
  )
}
