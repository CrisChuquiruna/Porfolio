import React from 'react'
import '../stylesheets/aboutMe.css'

export const AboutMe = ({ img, text }) => {
  return (
    <section className='aboutMe'>
        {/* <div className='plant'></div> */}
        <img src={ img } alt='Foto de Cristian Chuquiruna' />
        <div className='aboutMe__container'>
          <h1 className='title'>Acerca de mí</h1>
          <p>{ text }</p>
          <a href="https://drive.google.com/file/d/1p_9T-uHJVlf9ysNGYiQ9DNl_V7xKY6lj/view" target="_blank" rel="noreferrer">
            Mi Curriculum
          </a>
        </div>
    </section>
  )
}
