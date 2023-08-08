import React from 'react'
import { Card } from './Card'
import '../stylesheets/card.css'
import imgCuatroEnLinea from '../assets/proyects/CuatroEnLinea.jpg'
import imgPorfolioArtista from '../assets/proyects/PorfolioArtista.jpg'

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
        linkGit={'https://github.com/CrisChuquiruna/Cuatro-en-Linea'}
      />
      <Card
        img={imgPorfolioArtista}
        title={'Porfolio para artista'}
        text={'Desarrollado en React cuenta con una api en node que conecta a Flickr para facilitar la subida de nuevas imagenes.'}
        link={'https://camilacaffieri.netlify.app/'}
        linkGit={'https://github.com/CrisChuquiruna/Porfolio-Artista'}
      />
    </section>
    </>
  )
}
