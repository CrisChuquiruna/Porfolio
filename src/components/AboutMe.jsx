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
          <a href="https://drive.google.com/drive/u/0/folders/18SecXF4xOeDgsg4V1LGkzEx9pf987tFx" target="_blank" rel="noreferrer">
            Mi Curriculum
          </a>
        </div>
    </section>
  )
}
