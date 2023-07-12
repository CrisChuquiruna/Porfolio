import React from 'react'
import { Card } from './Card'
import '../stylesheets/card.css'
import imgCuatroEnLinea from '../assets/proyects/CuatroEnLinea.jpg'

export const Projects = ({ title }) => {
  return (
    <>
    <h1 className='card_title'>{title}</h1>
    <section className='card-container'>
      <Card
        img={imgCuatroEnLinea}
        title={'Cuatro en linea'}
        text={'Desarrollado con Javascript, HTML y CSS. En el contexto de practicar Programación orientada a objetos.'}
        link={'https://crischuquiruna.github.io/Cuatro-en-Linea/'}
      />
      <Card
        img={imgCuatroEnLinea}
        title={'Cuatro en linea'}
        text={'Desarrollado con Javascript, HTML y CSS. En el contexto de practicar Programación orientada a objetos.'}
        link={'https://crischuquiruna.github.io/Cuatro-en-Linea/'}
      />
      <Card
        img={imgCuatroEnLinea}
        title={'Cuatro en linea'}
        text={'Desarrollado con Javascript, HTML y CSS. En el contexto de practicar Programación orientada a objetos.'}
        link={'https://crischuquiruna.github.io/Cuatro-en-Linea/'}
      />
      <Card
        img={imgCuatroEnLinea}
        title={'Cuatro en linea'}
        text={'Desarrollado con Javascript, HTML y CSS. En el contexto de practicar Programación orientada a objetos.'}
        link={'https://crischuquiruna.github.io/Cuatro-en-Linea/'}
      />
    </section>
    </>
  )
}
