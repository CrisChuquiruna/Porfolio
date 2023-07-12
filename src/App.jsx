import React from 'react'
import './stylesheets/reset.css'
import './App.css'
import { Presentation } from './components/Presentation'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

import imgPerfil from './assets/Foto.jpg'

function App () {
  return (
    <>
    <Presentation name='Cristian' secondName='Chuquiruna' subtitle='Full-Stack'/>
    <AboutMe img={ imgPerfil } text={ 'Desarrollador Full-Stack en React y Python. Egresado del bootcamp Oracle Next Education, con experiencia enseñando Javascript en el proyecto Argentina Programa.' }/>
    <Skills title={'Skills'} />
    <Projects title={'Proyectos'}/>
    <Footer mail={'cris.chuquiruna@gmail.com'} name={'Cristian'} secondname={'Chuquiruna'} />
    </>
  )
}

export default App
