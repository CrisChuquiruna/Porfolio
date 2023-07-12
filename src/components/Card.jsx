import React from 'react'

export const Card = ({ img, title, text, link }) => {
  return (
    <div className='card'>
      <img src={img} alt={`Imagen de la pagina ${title}`}/>
      <h3>{title}</h3>
      <p>{text}</p>
      <a id='link' href={link} target='_blank' rel='noreferrer'>Visit Me</a>
    </div>
  )
}
